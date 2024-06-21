import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-presentaciones',
    templateUrl: './presentaciones.component.html',
    styleUrls: ['../datosyanalitica.component.scss'],
    animations: [sectionsAnimation]
})
export class PresentacionesComponent {
    public title: string = 'Presentaciones para la toma de decisiones';
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
        const palabras = [71,72,73,74,75,76];
        const expertos = [4,5,6,7];
        const instituciones = [8,5,2,11];
        const literatura = [23,34,25,36,37];
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
    {Nombre:"Presentaciones para la toma de decisiones",Url:"../Introduccion"}
]

const tools = [
    {Tema:"PowerPoint",Recurso:"Video guía para aprender a usar Power Point.",Url:"https://youtu.be/LIXfGkAca0g ",Observaciones:"Herramienta muy conocida y utilizada, tiene plantillas, gráficos e imágenes para captar la atención y transmitir el mensaje."},
    {Tema:"Google slides",Recurso:"Video guía para aprender a usar Google slides.",Url:"https://www.youtube.com/watch?v=T8Fs-zkIX3I",Observaciones:"Herramienta en línea para crear presentaciones sencillas y colaborativas. Tiene plantillas, imágenes, formas y animaciones."},
    {Tema:"Prezi",Recurso:"Video guía para aprender a usar Prezi.",Url:"https://www.youtube.com/watch?v=sn2VrIanOWk ",Observaciones:"Herramienta en línea para presentaciones dinámicas e interactivas, se caracteriza por el uso de zooms, movimientos y efectos para mostrar la relación entre los elementos a presentar."},
    {Tema:"Canva",Recurso:"Video guía para aprender a usar Canva.",Url:"https://www.youtube.com/watch?v=UavsAM66D2Q ",Observaciones:"Herramienta en línea para diseño de presentaciones e infografías creativas y ejecutivas."},
    {Tema:"Tableau",Recurso:"Video guía para aprender a usar Tableau.",Url:"https://www.youtube.com/watch?v=7UgU4Y_TWAU ",Observaciones:"Herramienta en línea para crear dashboards o paneles para presentar datos de forma visualmente atractiva y analítica. Tiene diferentes fuentes con filtros, cálculos, estadísticas para la presentación de gráficos interactivos y dinámicos."},
    {Tema:"Powtoon",Recurso:"Video guía para aprender a usar Powtoon.",Url:"https://www.youtube.com/watch?v=q8M2R0IMwXs",Observaciones:"Herramienta en línea para crear presentaciones animadas y vídeos explicativos, se caracteriza por el uso de personajes, escenarios y efectos divertidos para captar la atención y contar una historia."},
    {Tema:"Emaze",Recurso:"Video guía para aprender a usar Emaze.",Url:"https://www.youtube.com/watch?v=-VbzNi44kkI",Observaciones:"Herramienta en línea para crear presentaciones visuales e impactantes, se caracteriza por el uso de diseños 3D, transiciones dinámicas y efectos de realidad aumentada para mostrar la información de forma innovadora."},
    {Tema:"SlideBean",Recurso:"Video guía para aprender a usar SlideBean.",Url:"https://www.youtube.com/watch?v=wmrMl94Dqs8",Observaciones:"Herramienta en línea para crear presentaciones, se caracteriza por el uso de inteligencia artificial para optimizar el diseño, el contenido y el formato de las diapositivas."},
    {Tema:"Visme",Recurso:"Video guía para aprender a usar Visme.",Url:"https://www.youtube.com/watch?v=lYd-pjdB6Ts",Observaciones:"Herramienta en línea para crear presentaciones creativas y ejecutivas, se caracteriza por el uso de elementos animados e interactivos para hacer las diapositivas más atractivas y dinámicas. "},
    {Tema:"Keynote",Recurso:"Video guía para aprender a usar Keynote.",Url:"https://www.youtube.com/watch?v=4ajmt3L_VOw ",Observaciones:"Herramienta para Mac e iOS para crear presentaciones elegantes y sofisticadas, se caracteriza por el uso de gráficos avanzados, transiciones fluidas y efectos especiales para mostrar la información de forma profesional."},
    {Tema:"Power BI",Recurso:"Primeros pasos con Power BI - Mi primer Dashboard",Url:"https://www.youtube.com/watch?v=p639VfOSyaI",Observaciones:"Power BI es otra herramienta popular de análisis y visualización de datos que permite conectar y analizar datos de diversas fuentes y crear informes interactivos."}
]

