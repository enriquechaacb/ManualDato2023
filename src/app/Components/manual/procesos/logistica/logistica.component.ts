import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-logistica',
    templateUrl: './logistica.component.html',
    styleUrls: ['./../procesos.component.scss'],
    animations: [sectionsAnimation]
})
export class LogisticaComponent {
    public title: string = 'Logística';
    public subtitle: string = 'Procesos';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    public Experts: any = experts;
    public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public Websites: any = websites;
    public Breadcrumbs: any = [
        {Nombre: "BiblioSmart", Url:"../../../"},
        {Nombre: this.subtitle, Url:"../../"},
        {Nombre: this.title, Url:"../Introduccion"}
    ];

    constructor(
        public _thisroute: ActivatedRoute,
        public _globalService: GlobalService
    ) {
        this.Secciones = sections;
        this.Seccion = "Introduccion";
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            console.log(params)
            this.Seccion = params['section'];
        });
    }

}

const sections = [
    { Nombre: "Introducción", Valor: "Introduccion", Activo: true },
    { Nombre: "¿Qué es?", Valor: "Definicion", Activo: true },
    { Nombre: "Beneficios", Valor: "Beneficios", Activo: true },
    { Nombre: "Proceso", Valor: "Proceso", Activo: true },
    { Nombre: "Herramientas", Valor: "Herramientas", Activo: true },
    { Nombre: "Glosario", Valor: "Glosario", Activo: true },
    { Nombre: "Directorio de expertos", Valor: "Expertos", Activo: true },
    { Nombre: "Instituciones clave", Valor: "Instituciones", Activo: true },
    { Nombre: "Literatura sugerida", Valor: "Literatura", Activo: true },
    { Nombre: "Sitios web", Valor: "WebSites", Activo: true },
    { Nombre: "Casos de éxito", Valor: "Casos", Activo: false },
    { Nombre: "E-book", Valor: "analitica_de_datos", Activo: true, EsExterno: true }
]


const words = [
    {Palabra:"", Significado:"", Fuente:""}
]
const tools = [
    { Tema: "", Recurso: "", Url: "", Descripcion: "" }
]

const experts = [
    {Nombre:"ABPMP (Asociación de Profesionales de Procesos de Negocio)",Contacto:"abpmp.org.mx",Url:"http://abpmp.org.mx/",Descripcion:"Es una organización que busca promover y desarrollar la disciplina de gestión de procesos de negocio en América Latina."},
    {Nombre:"IIBA Capítulo Latinoamérica",Contacto:"Mexico City IIBA Chapter (ddi.com.mx)",Url:"https://www.ddi.com.mx/IIBA/",Descripcion:"Capítulo Latinoamericano del International Institute of Business Analysis (IIBA), que se enfoca en la gestión y mejora de procesos de negocio."},
    {Nombre:"Facultad de Ingeniera Universidad Panamericana",Contacto:"Claudia Arias Portela",Url:"mailto:cyarias@up.edu.mx ",Descripcion:"Profesora investigadora"},
]

const institutions = [
    {Nombre:"",Url:""},
]

const books = [
    {Autor:"",Titulo:"",Subtitulo:"",Url:""}
]

const websites = [
    {Nombre:"",Url:"",Resumen:""},
]

