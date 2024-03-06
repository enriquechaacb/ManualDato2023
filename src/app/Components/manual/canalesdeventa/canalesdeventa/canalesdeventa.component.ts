import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-canalesdeventa',
    templateUrl: './canalesdeventa.component.html',
    styleUrls: ['../canalesdeventa.component.scss'],
    animations: [sectionsAnimation]
})
export class CanalesdeventaComponent {
    public title: string = 'Canales de venta';
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
        const palabras = [9, 10, 11, 12, 13, 14, 15];
        const expertos = [1,2,3];
        const instituciones = [1, 2, 3, 4, 5, 6, 7];
        const literatura = [4,5,6];
        const websites = [1,2,3];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}
const tools = [
    { Tema: "Sitios web", Recurso: "Tutorial WIX 2023 | Crea tu página Web PERSONALIZADA en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitios web", Recurso: "Como CREAR UNA PAGINA WEB EN WORDPRESS DESDE CERO 2023 TUTORIAL  ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitios web", Recurso: "DONDE comprar mi dominio y hosting BARATOS en 2023 [PASO A PASO]", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godday, empresa internacionalmente reconocida como una de las principales para adquirir un dominio." },
    { Tema: "Social commerce", Recurso: "Cómo CREAR una Tienda o Catálogo en Facebook e Instagram - ACTUALIZADO 2022", Url: "https://youtu.be/AnmI-XSQijs", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de tienda dentro de Facebook e Instagram." },
    { Tema: "Social commerce", Recurso: "Artículo", Url: "https://help.pinterest.com/es/business/article/link-your-shopify-and-pinterest-accounts ", Descripcion: "Artículo con explicación para hacer la vinculación entre la red social Pinterest y una tienda en Shopify, con la intención de vender a través de la red social." },
    { Tema: "Marketplaces", Recurso: "Curso GRATIS De Amazon FBA | Cómo Vender En Amazon FBA y Ganar Dinero Siendo Principiante En 2023", Url: "https://youtu.be/9j0lezwNxfQ", Descripcion: "Curso completo para vender productos en Amazon de toda Latinoamérica." },
    { Tema: "Aplicaciones móviles", Recurso: "", Url: "https://cynoteck.com/es/blog-post/complete-mobile-app-development-checklist-for-small-business/", Descripcion: "Artículo que incluye una lista de Verificación para realizar antes de lanzar una aplicación que se compartirá con clientes." },
    { Tema: "Programas de afiliados", Recurso: "Hotmart: Cómo COMENZAR desde CERO en Marketing de Afiliados (Paso a Paso Completo) ", Url: "https://youtu.be/XT1IDHyxsoI", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un programa de afiliados utilizando la plataforma de Hotmart." },
    { Tema: "Programas de afiliados", Recurso: "Tutorial Completo de Marketing de Afiliados de Amazon para Principiantes 2021", Url: "https://youtu.be/xQNqY9C8smY", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un programa de afiliados utilizando la plataforma de Amazon." },
    { Tema: "Programas de afiliados", Recurso: "", Url: "https://hotmart.com/es/blog/abril-150-guia-completa-programa-de-afiliados", Descripcion: "Artículo que incluye guía para la creación de un programa de afiliados para empresa. " },
    { Tema: "Programas de afiliados", Recurso: "Estrategias para Evitar Carritos Abandonados", Url: "https://youtu.be/ApOXhEXpCfs", Descripcion: "En el siguiente video se muestran estrategias para disminuir los carritos abandonados dentro de las tiendas en línea." },
    { Tema: "Programas de afiliados", Recurso: "Artículo explicativo ", Url: "https://www.zendesk.com.mx/blog/intermediarios-comerciales/", Descripcion: "En este artículo se explica el ejemplo de intermediarios minoristas." }
]
