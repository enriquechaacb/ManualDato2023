import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-inteligencianegocio',
    templateUrl: './inteligencianegocio.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class InteligencianegocioComponent {
    public title: string = 'Inteligencia de negocio';
    public subtitle: string = 'Estrategia y transformación digital';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    public Experts: any;
    public Institutions: any;
    public Words: any;
    public Books: any;
    public Websites: any;
    public Breadcrumbs: any = [
        { Nombre: "BiblioSmart", Url: "../../../" },
        { Nombre: this.subtitle, Url: "../../" },
        { Nombre: this.title, Url: "../Introduccion" }
    ];

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
    setCatalogs() {
        const palabras = [140,141,142,143,144,145];
        const expertos = [26,27,21,28,29,30];
        const instituciones = [23,24,5,25,26,18,2,14];
        const literatura = [73,74,75,76,77,78,79,80,81,82];
        const websites = [50,51,52,53,54];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=Pfi1kE2tYBs", Descripcion: "Tutorial de ayuda para construir un cuadro de control utilizando Excel", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=7UgU4Y_TWAU&t=612s", Descripcion: "Tutorial de ayuda para construir un cuadro de control utilizando Tableau", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=FQuojsVM5dM", Descripcion: "Tutorial de ayuda para construir un cuadro de control Power BI", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=XHIoVC-cUO0", Descripcion: "Tutorial de ayuda para construir un cuadro de control Data Studio", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=9afSH2-hTOc", Descripcion: "Tutorial de ayuda para construir un cuadro de control Smart sheet", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Selección de la herramienta de inteligencia de negocio adecuada", Recurso: "repository.upb.edu.co", Url: "https://repository.upb.edu.co/handle/20.500.11912/7695", Descripcion: "Documento donde se presentan elementos a considerar para la mejor selección de una plataforma de inteligencia de negocios", Observaciones: "Herramienta para toma de decisiones" },
    { Tema: "1.5 Pasos para implementar la Inteligencia de Negocio", Recurso: "www.itson.mx", Url: "https://www.itson.mx/oferta/mtin/SiteAssets/Paginas/productividad/Libro%20BI.pdf", Descripcion: "Casos prácticos para la implementación de herramientas de negocio en Pymes", Observaciones: "Referencias para la puesta implementar soluciones de inteligencia de negocio" },
    { Tema: "Paneles de control", Recurso: "Ejemplos de contenidos de paneles de control", Url: "", Descripcion: "Documento de consulta donde se sugieren algunos elementos para diferentes tópicos de cuadros de control", Observaciones: "Archivo anexo" },
    { Tema: "Estrategias y objetivos", Recurso: "Ejemplos de estrategias con objetivos y KPI’s definidos", Url: "", Descripcion: "Documento donde se sugieren estrategias con objetivos y KPIs", Observaciones: "Archivo anexo" }
]
