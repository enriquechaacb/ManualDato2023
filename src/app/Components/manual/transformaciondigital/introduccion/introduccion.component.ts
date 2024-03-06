import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-introduccion',
    templateUrl: './introduccion.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class IntroduccionComponent {
    public title: string = 'Introducción a la transformación digital';
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
        const palabras = [135,146,147,148];
        const expertos = [21,28,29,30,31];
        const instituciones = [5,25,26,18,2,14];
        const literatura = [83,84,85,86,87,88];
        const websites = [55,56,57,58];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "1.2. Adoptando la transformación digital", Recurso: "", Url: "https://www.youtube.com/watch?v=wHRWJPvMdwA&list=RDLVSy-MaezAyEQ&index=2", Descripcion: "Vídeo descriptivo", Observaciones: "Amplia conceptos revisados en el texto" },
    { Tema: "1.2.1 Herramientas", Recurso: "", Url: "https://www.youtube.com/watch?v=drlT9DAtTHA", Descripcion: "Video donde se explica que es Big Data y cómo funciona", Observaciones: "Amplia conceptos revisados en el texto" },
    { Tema: "1.2.2 Estrategia y Herramientas", Recurso: "", Url: "https://resources.esmartia.com/blog/como-la-inteligencia-artificial-esta-transformando-el-marketing", Descripcion: "Blog como la inteligencia artificial está transformando el marketing", Observaciones: "Explicación complementaria" },
    { Tema: "1.2.2 Estrategia y Herramientas", Recurso: "", Url: "https://www.youtube.com/watch?v=EvHSoedDfUI", Descripcion: "Video que explica como utilizar ChatGPT para principiantes", Observaciones: "Explicación complementaria" },
    { Tema: "1.2.2 Estrategia y Herramientas", Recurso: "", Url: "https://www.chequeodigital.cl/", Descripcion: "Revisión del grado de madurez de la empresa", Observaciones: "Herramienta del BID" },
    { Tema: "", Recurso: "Formato anexo. Lista de comparación de elementos del software", Url: "", Descripcion: "Archivo de Excel que permite comparar herramientas de software a fin de elegir la que ofrezca mejores ventajas competitivas, considerando sus necesidades reales y el presupuesto disponible.", Observaciones: "Formato anexo " },
    { Tema: "", Recurso: "Formato para definir objetivos SMART", Url: "", Descripcion: "Plantilla de referencia para establecer objetivos SMART: Específico, medible, alcanzable, realista, temporalmente definido.", Observaciones: "Documento anexo" }
]
