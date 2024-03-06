import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-marketingdigital',
    templateUrl: './marketingdigital.component.html',
    styleUrls: ['../canalesdeventa.component.scss'],
    animations: [sectionsAnimation]
})
export class MarketingdigitalComponent {
    public title: string = 'Marketing digital';
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
        const palabras = [46,47,48,49,50,51,52,53,54,55,56,57];
        const expertos = [1, 2, 3];
        const instituciones = [1, 2, 3, 4, 5, 6, 7];
        const literatura = [16,17,18];
        const websites = [1, 2, 3];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}
const tools = [
    { Tema: "Definición del marketing digital", Recurso: "Todo lo que necesitas saber sobre #MarketingDigital parte I - #VilmaNúñez ", Url: "https://youtu.be/6ccvtd0x0Mw", Descripcion: "Curso completo en video de marketing digital para empresas. " },
    { Tema: "Definición del marketing digital", Recurso: "CURSO de Marketing Digital Completo (2023) ", Url: "https://youtu.be/v17EXDu3t0E", Descripcion: "Curso completo en video de marketing digital para empresas. " },
    { Tema: "Definición del marketing digital", Recurso: "Plantilla de checklist para diseñar una estrategia de marketing online que de verdad funciona", Url: "https://vilmanunez.com/estrategia-marketing-online-plantilla-checklist/ ", Descripcion: "Lista de verificación para diseñar una estrategia de marketing digital" },
    { Tema: "Sitios web", Recurso: "Tutorial WIX 2023 | Crea tu página Web PERSONALIZADA en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitios web", Recurso: "Como CREAR UNA PAGINA WEB EN WORDPRESS DESDE CERO 2023 TUTORIAL  ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitios web", Recurso: "DONDE comprar mi dominio y hosting BARATOS en 2023 [PASO A PASO]", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godday, empresa internacionalmente reconocida como una de las principales para adquirir un dominio." },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Tutorial | Planificador de Palabras Clave de Google ", Url: "https://youtu.be/n2vpYp3umxQ", Descripcion: "Tutorial en video sobre la utilización de la herramienta gratuita del Planificador de Palabras calves de Google. " },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Curso de SEO (2023): Completo y GRATIS", Url: "https://youtu.be/Usm9p_sewQ4", Descripcion: "Curso completo en video para elaborar una estrategia SEO" },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Cómo crear una campaña", Url: "https://support.google.com/google-ads/answer/6324971?hl=es-419", Descripcion: "Tutorial escrito por parte de Google Ads sobre como lanzar una campaña en su plataforma. " },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Tutorial de Semrush COMPLETO + 14 días GRATIS", Url: "https://youtu.be/DhsdyTsmsYE", Descripcion: "Tutorial en video para utilizar la herramienta de SEMRush para la búsqueda de palabras claves." },
    { Tema: "Email marketing", Recurso: "Plantillas de Email", Url: "https://www.canva.com/es_es/plantillas/s/email/", Descripcion: "Plantillas editables para la elaboración y envío de email marketing a través de la plataforma gratuita con opciones de pago, Canva. " },
    { Tema: "Email marketing", Recurso: "MAILCHIMP TUTORIAL 2022 (Principiantes) - Paso a Paso Guía Email Marketing ", Url: "https://youtu.be/Ro_U77MBBFU", Descripcion: "Tutorial en video para la implementación de herramienta de email marketing Mailchmp." },
    { Tema: "Gestión de redes sociales", Recurso: "CREA POST PARA INSTAGRAM CON CANVA⚡️ (ANIMACIONES, MÚSICA, VIDEOS Y MÁS)", Url: "https://youtu.be/nsapNssgqVo", Descripcion: "Tutorial en video para la creación de contenido atractivo en la herramienta gratuita Canva. " },
    { Tema: "Gestión de redes sociales", Recurso: "9 plantillas de redes sociales que te ahorrarán horas de trabajo", Url: "https://blog.hootsuite.com/es/seis-plantillas-de-redes-sociales/", Descripcion: "Plantillas para redes sociales en las que se incluyen:  auditoría de redes sociales, calendario editorial, informe de análisis y resultados y tamaño de imágenes. " },
    { Tema: "Gestión de redes sociales", Recurso: "Los 21 mejores gestores de redes sociales para 2024", Url: "https://blog.hubspot.es/marketing/mejores-gestores-redes-sociales", Descripcion: "Lista de herramientas para gestionar redes sociales y tener mayor organización durante la labor. " },
    { Tema: "Gestión de redes sociales", Recurso: "Haz esto para aumentar el alcance de tus publicaciones de Instagram [TUTORIAL] ", Url: "https://youtu.be/5kjixKGOECQ", Descripcion: "En este video se describe un tutorial para aumentar el alcance de las publicaciones en Instagram. " },
    { Tema: "Marketing de contenidos", Recurso: "Marketing de Contenidos - Crea tu Estrategia de Contenidos ", Url: "https://youtu.be/z8io3g6tmjs", Descripcion: "Tutorial en video para realizar una estrategia de marketing de contenidos. " },
    { Tema: "Marketing de contenidos", Recurso: "Las 7 mejores herramientas de marketing de contenidos para 2020", Url: "https://www.cyberclick.es/numerical-blog/las-mejores-herramientas-de-marketing-de-contenidos", Descripcion: "Lista de herramientas para ejecutar una estrategia de marketing de contenidos.  " },
    { Tema: "Marketing de contenidos", Recurso: "7 consejos para crear contenidos para redes sociales ", Url: "https://youtu.be/T1zvo2q3igo", Descripcion: "En este video se muestra la creación de contenido para redes sociales." },
    { Tema: "Marketing de contenidos", Recurso: "Curso Google Analytics 4 2023 (Paso a Paso)", Url: "https://youtu.be/oDIQWblkeII", Descripcion: "Curso de Google Analitycs para medir los resultados de un sitio web." },
    { Tema: "Implementación de estrategia de marketing digital", Recurso: "Qué es un análisis FODA y cómo se hace ", Url: "https://youtu.be/A77rrexPlAk", Descripcion: "Tutorial para hacer un análisis de FODA de una empresa y comprender la situación interna y externa de la empresa para hacer una estrategia de marketing digital." }
]
