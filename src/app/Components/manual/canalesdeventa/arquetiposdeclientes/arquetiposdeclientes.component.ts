import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-arquetiposdeclientes',
    templateUrl: './arquetiposdeclientes.component.html',
    styleUrls: ['../canalesdeventa.component.scss'],
    animations: [sectionsAnimation]
})
export class ArquetiposdeclientesComponent {
    public title: string = 'Arquetipos de clientes';
    public subtitle: string = 'Comunicación y canales de venta';
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
    setCatalogs(){
        const palabras = [1, 2, 3, 4, 5, 6, 7, 8];
        const expertos = [1,2,3];
        const instituciones = [1, 2, 3, 4, 5, 6, 7];
        const literatura = [1,2,3];
        const websites = [1,2,3];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}


const tools = [
    { Tema: "Proceso de investigación de mercados", Recurso: "CURSO: INVESTIGACIÓN Y ESTUDIOS DE MERCADO | Prof. Lorena Ronda | Universidad de Deusto ", Url: "https://youtube.com/playlist?list=PLDAF_u7fViPiGCXpPPPXM2XBEok9gKvad", Descripcion: "Curso completo en video para elaborar la investigación de mercado" },
    { Tema: "Proceso de investigación de mercados", Recurso: "Cómo crear encuestas con Google Forms paso a paso ", Url: "https://youtu.be/_9doB2YAsgw", Descripcion: "Tutorial en video para la elaboración de una encuesta en la herramienta gratuita Google Forms." },
    { Tema: "Proceso de investigación de mercados", Recurso: "Cómo hacer una encuesta que brinde resultados fiables (ejemplos + software)", Url: "https://blog.hubspot.es/service/como-hacer-encuestas", Descripcion: "Tutorial escrito para la elaboración de una encuesta con preguntas cerradas y abiertas." },
    { Tema: "Segmentación de mercados", Recurso: "Plantilla para hacer segmentación de mercado", Url: "https://offers.hubspot.es/plantilla-segmentacion-mercado", Descripcion: "Plantilla descargable para elaborar una segmentación de mercado" },
    { Tema: "Segmentación de mercados", Recurso: "Cómo hacer una SEGMENTACIÓN de MERCADO en 5 pasos", Url: "https://youtu.be/MAbo2baFGhs", Descripcion: "Tutorial en video para la elaboración de segmentación de mercado. " },
    { Tema: "Determinación de arquetipos de clientes", Recurso: "6 ejemplos de buyer personas para diferentes empresas", Url: "https://blog.hubspot.es/marketing/ejemplos-buyer-persona ", Descripcion: "Herramienta digital para la elaboración del buyer persona" },
    { Tema: "Determinación de arquetipos de clientes", Recurso: "Pack para crear tu Buyer Persona", Url: "https://www.cyberclick.es/plantilla-para-descargar-buyer-persona ", Descripcion: "Plantillas descargables para elaboración del buyer persona" },
    { Tema: "Determinación de arquetipos de clientes", Recurso: "Qué es un buyer persona, tipos y cómo hacer uno (+ plantilla)", Url: "https://www.inboundcycle.com/buyer-persona ", Descripcion: "Plantillas descargables para elaboración del buyer persona" },
    { Tema: "Determinación de arquetipos de clientes", Recurso: "Buyer persona ¿Qué es y qué puede hacer por tu empresa?", Url: "https://elviajedelcliente.com/buyer-persona-que-es-plantillas-ejemplos/", Descripcion: "Sitio web que presenta detalles del buyer persona y arquetipos de clientes" },
]











