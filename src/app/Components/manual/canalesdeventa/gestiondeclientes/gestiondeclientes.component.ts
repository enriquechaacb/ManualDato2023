import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-gestiondeclientes',
    templateUrl: './gestiondeclientes.component.html',
    styleUrls: ['../canalesdeventa.component.scss'],
    animations: [sectionsAnimation]
})
export class GestiondeclientesComponent {

    public title: string = 'Gestión de clientes';
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
        const palabras = [41,42,43,44,45];
        const expertos = [1,2,3];
        const instituciones = [1, 2, 3, 4, 5, 6, 7];
        const literatura = [13,14,15];
        const websites = [3,6];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}
const tools = [
    { Tema: "", Recurso: "Demostración de ZOHO CRM. Conoce CRM en 32 minutos ", Url: "https://youtu.be/GKk-Ce0RvCM", Descripcion: "Tutorial en video sobre la implementación del CRM de la empresa Zoho." },
    { Tema: "", Recurso: "Monday.com", Url: "https://youtube.com/playlist?list=PLutcJfNEwNkQrBEmYNa2PLRKwQ8hcc1uJ", Descripcion: "Curso completo en video de introducción e implementación del CRM de la empresa Monday.com" },
    { Tema: "", Recurso: "Workshop - Funnel de ventas + CRM con monday.com", Url: "https://youtu.be/A38Q8Oel_Gc", Descripcion: "Curso completo de la utilización de CRM de la empresa Monday.com" }
]