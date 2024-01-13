import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavigationEnd, Router, Event, RouterEvent } from '@angular/router';
import { GlobalService } from '../../Services/global.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    @Output() change = new EventEmitter<any>();
    public menuItems: any = Menu;
    public Activeurl: string = "";
    isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

    constructor(
        public _thisroute: Router,
        private _breakpointObserver: BreakpointObserver,
    ){}
    ngOnInit(): void {
        this._thisroute.events.subscribe((event: Event|RouterEvent) => {
            if (event instanceof NavigationEnd) {
                this.Activeurl = event.url;
            }
        });
    }

    menuToggle(){this.change.emit();}
    goToUrl(url: string){ window.open(url,'_blank') }

}
const Menu = [
    {Url:"/presentacion",Icono:"chevron_right",Nombre:"Presentación",Seccion:"/"},
    {Url:"/bienvenida",Icono:"chevron_right",Nombre:"Bienvenida",Seccion:"/"},
    {Url:"/objetivos",Icono:"chevron_right",Nombre:"Objetivos",Seccion:"/"},
    {Url:"/bibliosmart",Icono:"chevron_right",Nombre:"BiblioSmart",Seccion:"/"}
];
