import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-herramientasdeanalitica',
    templateUrl: './herramientasdeanalitica.component.html',
    styleUrls: ['../datosyanalitica.component.scss'],
    animations: [sectionsAnimation]
})
export class HerramientasdeanaliticaComponent {
    public title: string = 'Sistemas y herramientas de analítica';
    public subtitle: string = 'Datos y Analítica';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    public Experts: any;
    public Institutions: any;
    public Words: any;
    public Books: any;
    public Websites: any;
    public Breadcrumbs: any = breadcrumbs;

    constructor(
        public _thisroute: ActivatedRoute,
        public _globalService: GlobalService
    ) {
        this.Seccion = "Introduccion";
        this.Secciones = NavSections;
        this.setCatalogs();
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            this.Seccion = params['section'];
        });
    }
    setCatalogs(){
        const palabras = [64,65,66,67];
        const expertos = [4,5,6,7];
        const instituciones = [8,2,5,11];
        const literatura = [23,24,25,26,27];
        const websites = [3,12,13,14,15,16,17,18,19];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const breadcrumbs = [
    {Nombre:"BiblioSmart",Url:"../../../"},
    {Nombre:"Datos y Analítica",Url:"../../"},
    {Nombre:"Sistemas y herramientas de analítica",Url:"../Introduccion"}
]

const tools = [
    {Tema:"Excel",Descripcion:"Lista de reproducción para aprender a usar Excel para análisis de datos.",Url:"https://www.youtube.com/watch?v=AKhPo4ronKI&list=PLEy6Omomtm3ED2ZMs6zqW_xO3uV13Iziu",Observaciones:"18 videos de 15 minutos cada uno."},
    {Tema:"Google sheets",Descripcion:"Video para usar Google sheets en el análisis de datos.",Url:"https://www.youtube.com/watch?v=SvWGxBjs5ts",Observaciones:"Muestra cómo utilizar la herramienta de GSuite."},
    {Tema:"Tableau",Descripcion:"Video para analizar datos en Tableau.",Url:"https://www.youtube.com/watch?v=7UgU4Y_TWAU&t=30s ",Observaciones:"Crea un dashboard."},
    {Tema:"Power BI",Descripcion:"Lista de reproducción para aprender a usar Power BI para análisis de datos.",Url:"https://www.youtube.com/watch?v=HrCOmM-XRjE&list=PLXR1MU_rf6FKuB37dxmrsDWxt6SbMMcAD ",Observaciones:"8 videos "},
    {Tema:"Google Analytics",Descripcion:"Video de introducción para Google Analytics.",Url:"https://www.youtube.com/watch?v=2ka2YZscki8 ",Observaciones:"Enfocado a pymes."},
    {Tema:"IBM SPSS Statistics",Descripcion:"Video de introducción a IBM SPSS Statistics.",Url:"https://www.youtube.com/watch?v=F9yD-5r2dSE",Observaciones:""},
    {Tema:"Lenguaje de programación R",Descripcion:"Lista de reproducción para aprender a usar R para análisis de datos.",Url:"https://www.youtube.com/watch?v=k3tiNvTmug8&list=PLbDLkhJ5sFvCWFbP4tAFALHkNWNFo_FiL",Observaciones:"29 videos de 6 minutos cada uno."},
    {Tema:"Python",Descripcion:"Lista de reproducción para aprender a usar Python para análisis de datos.",Url:"https://www.youtube.com/watch?v=_2UhskLjBi0&list=PLjdo6jnQHJFZipQTvzOsfqFHjfOinLT6J",Observaciones:"21 vídeos de 8 minutos cada uno."},
    {Tema:"MicroStrategy",Descripcion:"Video que muestra cómo usar MicroStrategy Web.",Url:"https://youtu.be/LuAueW2vFi8",Observaciones:"Microstrategy es una interfaz interactiva para usuarios empresariales."},
    {Tema:"Qlikview",Descripcion:"Video explicativo de una plataforma de Business Discovery para análisis de datos.",Url:"https://youtu.be/TgByoEkPcZk",Observaciones:"Qlikview ofrece autoservicios para los usuarios empresariales."}
]
