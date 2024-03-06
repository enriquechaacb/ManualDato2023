import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-mediosdepago',
    templateUrl: './mediosdepago.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class MediosdepagoComponent {
    public title: string = 'Medios de pago digitales';
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
        const palabras = [139,149,150];
        const expertos = [32,33,34,35];
        const instituciones = [5,25,26,18,2,14];
        const literatura = [89,90,91,92,93];
        const websites = [59,60,61,62,63,64];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "Plataformas de comercio digital", Recurso: "", Url: "https://platzi.com/clases/1986-fundamentos-ecommerce/30773-bienvenida-y-presentacion-del-proyecto/", Descripcion: "Clase introductoria al comercio digital", Observaciones: "Conocer elementos clave para una tienda de e-comerce" },
    { Tema: "Medios de pago", Recurso: "Guía para el cumplimiento de la normativa PCI", Url: "https://stripe.com/es/guides/pci-compliance", Descripcion: "Guía presentada por Stripe para cumplir con la Normativa de pagos", Observaciones: "Sitio web de apoyo" },
    { Tema: "Plataformas de comercio digital", Recurso: "", Url: "https://www.youtube.com/watch?v=L--YOAezLco", Descripcion: "Webinar donde se revisan temas relevantes de comercio electrónico para pyme en un proceso metodológica de Jtbd (Job to be done)", Observaciones: "Expone tips  para generar una lista de tareas personalizada para tener páginas web más eficientes en términos de comercio electrónico" },
    { Tema: "Tipos de transacciones", Recurso: "", Url: "https://www.youtube.com/watch?v=t1paD1e7obs", Descripcion: "Webinar que permite identificar cómo facilitar el proceso de pago para los clientes", Observaciones: "Se presenta información sobre diferentes medios de pago." }
]
