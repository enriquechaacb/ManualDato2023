import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-comercioelectronico',
    templateUrl: './comercioelectronico.component.html',
    styleUrls: ['../canalesdeventa.component.scss'],
    animations: [sectionsAnimation]
})
export class ComercioelectronicoComponent {
    public title: string = 'Comercio electrónico';
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
    setCatalogs() {
        const palabras = [34,35,36,37,38,39,40];
        const expertos = [1, 2, 3];
        const instituciones = [1, 2, 3, 4, 5, 6, 7];
        const literatura = [10, 11, 12];
        const websites = [1, 2, 3,4,5];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "Identificación de la idea de negocio", Recurso: "Cómo idear y crear productos y servicios que se vendan.", Url: "https://www.youtube.com/watch?v=F8PrK3z5p1A", Descripcion: "En el tutorial se explica de forma sencilla cómo desarrollar nuevos productos y servicios. " },
    { Tema: "Identificación de la idea de negocio", Recurso: "Costos operativos", Url: "https://youtu.be/KaF1VO4WjnY", Descripcion: "Se observa cómo se realiza un Excel con los costos operativos de una empresa." },
    { Tema: "Identificación de la idea de negocio", Recurso: "Cómo hacer una análisis de la demanda en tu empresa", Url: "https://youtu.be/jQOsXZ3ND_k", Descripcion: "Presenta una explicación sobre cómo identificar y elaborar la demanda para una empresa." },
    { Tema: "Identificación de la idea de negocio", Recurso: "Técnicas de lluvia de ideas: Cómo innovar en grupo", Url: "https://youtu.be/YPTYQ3yrpHw", Descripcion: "Muestra cómo se puede utilizar una lluvia de ideas en un entorno empresarial." },
    { Tema: "Sitios web", Recurso: "Tutorial WIX 2023 | Crea tu página Web PERSONALIZADA en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitios web", Recurso: "Como CREAR UNA PAGINA WEB EN WORDPRESS DESDE CERO 2023 TUTORIAL  ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitios web", Recurso: "DONDE comprar mi dominio y hosting BARATOS en 2023 [PASO A PASO]", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godday, empresa internacionalmente reconocida como una de las principales para adquirir un dominio." },
    { Tema: "Selección de plataforma para sitio web", Recurso: "Curso explicativo de cómo vender en Amazon FBA", Url: "https://www.youtube.com/watch?v=9j0lezwNxfQ", Descripcion: "Curso completo que guía paso a paso el proceso para vender productos en Amazon de toda Latinoamérica" },
    { Tema: "Selección de plataforma para sitio web", Recurso: "Rockcontent comparte un tutorial explicativo del Woocommerce", Url: "https://rockcontent.com/es/blog/woocommerce/#:~:text=WooCommerce%20es%20un%20plugin%20de,WooCommerce%20para%20administrar%20su%20ecommerce", Descripcion: "Tutorial de Rockcontent que explica el WooCommerce: qué es y cómo funciona el plugin para crear una tienda virtual" },
    { Tema: "Certificados de seguridad para sitios web ", Recurso: "Qué y cómo funciona un certificado de seguridad SSL TLS", Url: "https://youtu.be/tHhFQaurGAg", Descripcion: "En este video se muestra cómo funcionan los certificados de seguridad y su importancia en los sitios webs." },
    { Tema: "Cifrado para la protección de datos", Recurso: "Cifrado de datos: qué es y cómo puede ayudarte a proteger tu información en Internet", Url: "https://youtu.be/wcJBmoz6Vlk", Descripcion: "En este video se muestra cómo se puede aplicar un cifrado para la protección de datos importantes para una empresa." },
    { Tema: "Diseño del canal de suministro y logístico", Recurso: "Curso completo de canal de suministro y logística", Url: "https://youtube.com/playlist?list=PLj7Cf_gfzmi8uMB_JWYg3v0zxnUhr1BHi", Descripcion: "" },
    { Tema: "Diseño del canal de suministro y logístico", Recurso: "Cómo Funciona una Tienda Online Logística para e-Commerce", Url: "https://www.youtube.com/watch?v=Fxz8Ka7ny3M", Descripcion: "Ejemplo de aplicación del canal de suministro para tiendas en línea" },
    { Tema: "", Recurso: "Cómo crear las POLÍTICAS DE PRIVACIDAD para tu PÁGINA WEB Tutorial 2020", Url: "https://youtu.be/9oZQbZz1Tco", Descripcion: "En este video se muestra cómo se pueden redactar las políticas de privacidad de un sitio web o comercio electrónico" },
    { Tema: "Plan de comunicación", Recurso: "Cyberclick ¿Cómo vender más? – 20 Estrategias de E-commerce?", Url: "https://www.youtube.com/watch?v=iNcx5W_3rsM", Descripcion: "Explicación en video de estrategias para implementar en una tienda en línea y aumentar las ventas" },
    { Tema: "Selección de plataforma para sitio web", Recurso: "Chat GPT para tu TIENDA EN LÍNEA Inteligencia Artificial para tu Ecommerce", Url: "https://www.youtube.com/watch?v=KO0W385koMQ", Descripcion: "Tutorial en video sobre la aplicación de la inteligencia artificial, Chat GPT, en una tienda en línea." }
]
