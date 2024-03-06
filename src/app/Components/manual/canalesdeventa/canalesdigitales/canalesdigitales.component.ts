import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-canalesdigitales',
    templateUrl: './canalesdigitales.component.html',
    styleUrls: ['../canalesdeventa.component.scss'],
    animations: [sectionsAnimation]
})
export class CanalesdigitalesComponent {
    public title: string = 'Canales digitales de comunicación';
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
        const palabras = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
        const expertos = [1,2,3];
        const instituciones = [1, 2, 3, 4, 5, 6, 7];
        const literatura = [7,8,9];
        const websites = [1,2,3];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "Tutorial WIX 2023 | Crea tu página Web personalizada en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "Como crear una pagina web en wordpress desde cero 2023 tutorial ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "¿Qué hace un administrador Web? ", Url: "https://youtu.be/vDPOfs_H5WY", Descripcion: "El video explica la importancia del administrador web dentro de las empresas." },
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "Dónde comprar mi dominio y hosting baratos en 2023 [paso a paso] ", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godaddy, empresa internacionalmente reconocida para adquirir un dominio." },
    { Tema: "Blogs", Recurso: "Google Trends 2.0 | Herramienta potenciada [2023] 🚀 Cómo usar ", Url: "", Descripcion: "Explicación para utilizar la plataforma de Google Trends en la búsqueda de tendencias y temas de interés para realizar contenido, principalmente para un blog." },
    { Tema: "Blogs", Recurso: "Convierte tu blog en una máquina de generación de contenido de calidad.", Url: "https://offers.hubspot.es/calendario-editorial ", Descripcion: "Plantilla para elaborar un calendario editorial de un blog empresarial, ideal para mantenerse organizado." },
    { Tema: "Redes sociales", Recurso: "Crea post para Instagram con Canva (animaciones, música, videos y más)", Url: "https://youtu.be/nsapNssgqVo", Descripcion: "Tutorial en video para la creación de contenido atractivo en la herramienta gratuita Canva." },
    { Tema: "Redes sociales", Recurso: "9 plantillas de redes sociales que te ahorrarán horas de trabajo", Url: "https://blog.hootsuite.com/es/seis-plantillas-de-redes-sociales/", Descripcion: "Plantillas para redes sociales en las que se incluyen:  auditoría de redes sociales, calendario editorial, informe de análisis y resultados y tamaño de imágenes. " },
    { Tema: "Redes sociales", Recurso: "Los 21 mejores gestores de redes sociales para 2024", Url: "https://blog.hubspot.es/marketing/mejores-gestores-redes-sociales", Descripcion: "Lista de herramientas para gestionar redes sociales y tener mayor organización durante la labor. " },
    { Tema: "Mensajería instantánea y chatbots", Recurso: "Chatbot para Facebook con ManyChat - Curso para Principiantes [2022]", Url: "https://youtu.be/dGgcWoclr4U", Descripcion: "Tutorial en video sobre la implementación de Chatbot para Facebook con ManyChat." },
    { Tema: "Mensajería instantánea y chatbots", Recurso: "Whatsapp para empresas: la guía para mercadólogos y emprendedores", Url: "https://blog.hootsuite.com/es/whatsapp-para-empresas/", Descripcion: "Artículo explicativo sobre la implementación de WhatsApp Business para empresas adicional de herramientas y ejemplos de uso." },
    { Tema: "Optimización para motores de búsqueda (SEO)", Recurso: "Tutorial | Planificador de palabras clave de Google ", Url: "https://youtu.be/n2vpYp3umxQ", Descripcion: "Tutorial en video sobre la utilización de la herramienta gratuita del Planificador de Palabras calves de Google. " },
    { Tema: "Email marketing", Recurso: "Plantillas de Email", Url: "https://www.canva.com/es_es/plantillas/s/email/", Descripcion: "Plantillas editables para la elaboración y envío de email marketing a través de la plataforma gratuita con opciones de pago, Canva. " },
    { Tema: "Email marketing", Recurso: "Mailchimp tutorial 2022 (Principiantes) - Paso a paso Guía Email Marketing ", Url: "https://youtu.be/Ro_U77MBBFU", Descripcion: "Tutorial en video para la implementación de herramienta de email marketing Mailchimp." },
]

