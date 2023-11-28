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
    public menuItems: Array<any> = [];
    public Activeurl: string = "";
    isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

    constructor(
        public _thisroute: Router,
        private _globalService: GlobalService,
        private _breakpointObserver: BreakpointObserver,
    ){}
    ngOnInit(): void {
        this._thisroute.events.subscribe((event: Event|RouterEvent) => {
            if (event instanceof NavigationEnd) {
                console.log(event.url)
                this.Activeurl = event.url;
                switch(this.Activeurl){
                    default:
                        this.menuItems = Menu.filter((x:any)=>x.Seccion==="/");
                    break;
                }
                
            }
        });
    }

    menuToggle(){this.change.emit();}
    goToUrl(url: string){
        window.open(
            url,
            '_blank'
        );
    }

}
/*
@Component({
    selector: 'app-countryselector',
    template: '<mat-dialog-content><h3>¿De qué país nos visitas?</h3>'
    +'<mat-form-field class="d-block" appearance="outline">'
    +'<mat-select [(ngModel)]="IdPais" (selectionChange)="setCountry(IdPais)">'
    +'<mat-option *ngFor="let item of Paises" [value]="item.IdPais">{{item.Nombre}}</mat-option>'
    +'</mat-select>'
    +'</mat-form-field>'
    +'</mat-dialog-content>',
    styleUrls: ['./navigation.component.scss']
})
export class CountryselectorComponent {
    public Paises: Array<any> = [
        {IdPais:1,Nombre:'Colombia'},
        {IdPais:2,Nombre:'El Salvador'},
        {IdPais:3,Nombre:'Uruguay'},
        //{IdPais:0,Nombre:'Otro'}
    ];
    public IdPais: number = undefined!;
    constructor(
        public _dialogRef: MatDialogRef<CountryselectorComponent>,
    ){}

    setCountry(id:number){
        var url: string = "";
        switch(id){
            //case 0: break;
            case 1: url = "https://www.rutadigital.cl"; break;
            case 2: url = "https://rutadigital.minec.gob.sv"; break;
            case 3: url = "https://mododigital.uy"; break;
        }
        this._dialogRef.close(url);
    }
}
*/
const Menu = [
    {Url:"/presentacion",Icono:"chevron_right",Nombre:"Presentación",Seccion:"/"},
    {Url:"/bienvenida",Icono:"chevron_right",Nombre:"Bienvenida",Seccion:"/"},
    {Url:"/objetivos",Icono:"chevron_right",Nombre:"Objetivos",Seccion:"/"},
    //{Url:"",Icono:"chevron_right",Nombre:"Chequeo Digital",Seccion:"/", Externo:true},
    {Url:"/manual",Icono:"chevron_right",Nombre:"Manual",Seccion:"/"}
];
