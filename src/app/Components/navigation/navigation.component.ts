import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, Event, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    @Output() change = new EventEmitter<any>();
    public menuItems: Array<any> = [];
    public Activeurl: string = "";

    constructor(
        public _thisroute: Router,
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

}

const Menu = [
    {Url:"/acerca",Icono:"chevron_right",Nombre:"Acerca de",Seccion:"/"},
    {Url:"/presentacion",Icono:"chevron_right",Nombre:"Presentación",Seccion:"/"},
    {Url:"/bienvenida",Icono:"chevron_right",Nombre:"Bienvenida",Seccion:"/"},
    {Url:"/objetivos",Icono:"chevron_right",Nombre:"Objetivos",Seccion:"/"},
    {Url:"/filosofia",Icono:"chevron_right",Nombre:"Filosofía",Seccion:"/"},
    {Url:"/manual",Icono:"chevron_right",Nombre:"Manual",Seccion:"/"},
    // {Url:"",Icono:"chevron_right",Nombre:"Título de la dimensión",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Eje temático",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Presentación",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Beneficios",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Metas",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Proceso",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Perfil del participante",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Desarrollo de contenidos",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Autoevaluación diagnóstica",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Contenido temático con desglose de objetivos temáticos",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Base conceptual...",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"1, 2, 3, 4...",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Referencias ",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Actividades sugeridas (autoevaluación final)",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Caja de herramientas",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Directorio de expertos",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Instituciones clave",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Casos de éxito",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Bibliografía de consulta",Seccion:""},
    // {Url:"",Icono:"chevron_right",Nombre:"Sitios web de consulta",Seccion:""}
];
