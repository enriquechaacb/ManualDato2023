import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { GlobalService } from './Services/global.service';
import { NavigationEnd, Router, Event, RouterEvent } from '@angular/router';
import { pagesAnimation } from './Services/animations.service';
declare var gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [pagesAnimation]
})
export class AppComponent implements OnInit {
    public Activeurl: string = "";
	public navIsFixed: boolean = false;
    constructor(
        public _globalService: GlobalService,
        @Inject(DOCUMENT) private _document: Document,
        private _renderer: Renderer2,
        private _thisroute: Router
    ) {
        this._thisroute.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
              gtag('config', 'G-D7KJ2GY9JE', {
                'page_path': event.urlAfterRedirects
              });
            }
          });
    }
    ngOnInit(): void {
        this._thisroute.events.subscribe((event: Event|RouterEvent) => {
            if (event instanceof NavigationEnd) {
                this.Activeurl = event.url;
                const d:string = event.url.split("/")[2];
                this._renderer.removeClass(this._document.body, 'organizacion');
                this._renderer.removeClass(this._document.body, 'estrategia');
                this._renderer.removeClass(this._document.body, 'datos');
                this._renderer.removeClass(this._document.body, 'tecnologias');
                this._renderer.removeClass(this._document.body, 'comunicacion');
                this._renderer.removeClass(this._document.body, 'procesos');
                if(d){
                    this._renderer.removeClass(this._document.body, 'default');
                    switch(d){
                        case "organizacionypersonas": this._renderer.addClass(this._document.body, 'organizacion'); break;
                        case "estrategiaytransformaciondigital": this._renderer.addClass(this._document.body, 'estrategia'); break;
                        case "datosyanalitica": this._renderer.addClass(this._document.body, 'datos'); break;
                        case "tecnologiasyhabilidadesdigitales": this._renderer.addClass(this._document.body, 'tecnologias'); break;
                        case "comunicacionycanalesdeventa": this._renderer.addClass(this._document.body, 'comunicacion'); break;
                        case "procesos": this._renderer.addClass(this._document.body, 'procesos'); break;
                    }
                }else{
                    this._renderer.addClass(this._document.body, 'default');
                }
            }

        });
        
        //console.log(this._router)
    }
    triggerAnimation(outlet:any) {
        return outlet.activatedRouteData.animation || null;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
		if (document.documentElement.scrollTop > 400) {
			this.navIsFixed = true;
		} else { 
            this.navIsFixed = false; 
        }
	}
}
