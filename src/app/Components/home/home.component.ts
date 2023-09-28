import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { GlobalService } from '../../Services/global.service';
import { NavigationEnd, Router, Event, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public Activeurl: string = "";
    public Subtitle: string = "";
    constructor(
        public _globalService: GlobalService,
        public _thisroute: Router
    ){
        this.Activeurl = _thisroute.url.replace("/","");
        this.setSubtitle(this.Activeurl);
    }

    ngOnInit(): void {
        this._thisroute.events.subscribe((event: Event|RouterEvent) => {
            if (event instanceof NavigationEnd) {
                this.Activeurl = event.url.replace("/","");
                this.setSubtitle(this.Activeurl);
                console.log(this.Activeurl)
            }
        });
    }
    setSubtitle(u:string){
        switch(u){
            case "presentacion": this.Subtitle="Presentación"; break;
            case "bienvenida": this.Subtitle="Bienvenida"; break;
            case "objetivos": this.Subtitle="Objetivos"; break;
        }
    }
}
