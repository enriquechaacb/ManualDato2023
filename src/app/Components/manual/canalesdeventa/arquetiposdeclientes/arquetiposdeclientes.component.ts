import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

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
    public Experts: any = experts;
    public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public Websites: any = websites;
    public Breadcrumbs: any = [
        { Nombre: "BiblioSmart", Url: "../../../" },
        { Nombre: this.subtitle, Url: "../../" },
        { Nombre: this.title, Url: "../Introduccion" }
    ];

    constructor(
        public _thisroute: ActivatedRoute,
        public _globalService: GlobalService
    ) {
        this.Secciones = this._globalService.Secciones;
        this.Seccion = "Introduccion";
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            console.log(params)
            this.Seccion = params['section'];
        });
    }

}

const words = [
    { Palabra: "Arquetipos de clientes", Significado: "Son descripciones generales de personas que representan segmentos típicos de clientes (actuales o potenciales) dentro de un mercado. Pueden incluir características psicográficas y demográficas generales y se basa en patrones de comportamiento comunes y así como de insights sobre motivaciones profundas y puntos de dolor de los clientes. Los arquetipos son útiles para entender las necesidades y comportamientos de grupos más grandes de clientes.", Fuente: "" },
    { Palabra: "Buyer persona", Significado: "Es una representación semificticia del cliente ideal de un negocio. Se define usando datos sociodemográficos concretos e información sobre aspectos como su conducta online, personal, profesional y de la relación con la empresa que ofrece este producto o servicio.", Fuente: "" },
    { Palabra: "Cliente ideal", Significado: "Es el perfil que una empresa o negocio define como la persona que reúne las características y desafíos que un producto o servicio busca y puede resolver", Fuente: "(Moreno, 2023). " },
    { Palabra: "Cliente potencial", Significado: "Aquella persona que se podría convertir en comprador o consumidor de los productos que ofrece una empresa", Fuente: "(Quiroa, 2022). " },
    { Palabra: "Hábito de compra", Significado: "Identifica las tendencias que siguen los consumidores al comprar los productos y servicios en su día a día", Fuente: "(Cárdenas, 2022). " },
    { Palabra: "Insights", Significado: "Anglicismo que hace referencia a una motivación profunda del consumidor con relación a su comportamiento hacia un sector, marca o producto. Se basa en percepciones, imágenes o experiencias del consumidor con la marca. Esta palabra utilizada en el argot publicitario hace referencia a una situación, pensamiento, secreto, deseo o necesidad del consumidor.", Fuente: "" },
    { Palabra: "Prospecto", Significado: "Es un cliente potencial que encaja con las características del cliente ideal, dispone de los medios para comprar y está autorizado para tomar decisiones", Fuente: "(De La Peña Frade, 2022). " },
    { Palabra: "Segmentación de mercado", Significado: "s un proceso que identifica grupos de compradores con características similares, los cuales provocan que los mercados se dividan. Las empresas, en lugar de llegar a un mercado general, lo segmentan para que sea más sencillo atender las necesidades específicas de estos clientes.", Fuente: "" }
]
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

const experts = [
    { Nombre: "Sarah Vercheval. Directora de Marketing en InboundCycle", Contacto: "https://www.inboundcycle.com/", Url: "https://www.inboundcycle.com/", Descripcion: "Empresa especializada en Inbound marketing" },
    { Nombre: "Vilma Nuñez", Contacto: "https://vilmanunez.com/", Url: "https://vilmanunez.com/", Descripcion: "Ceo del Grupo Convierte Más " },
    { Nombre: "José Facchin", Contacto: "https://josefacchin.com/", Url: "https://josefacchin.com/", Descripcion: "Creador de contenido en comunicación digital" }
]

const institutions = [
    { Nombre: "Cámara de Comercio e Industria de El Salvador: Promueve y defendiendo permanentemente el sistema de libre iniciativa, impulsando la unidad nacional, y el desarrollo empresarial con responsabilidad social, liderando acciones y facilitando servicios que fomenten la competitividad y la innovación de nuestros asociados, protegiendo sus derechos.", Url: "https://connectamericas.com/" },
    { Nombre: "Ministerio de Economía de El Salvador: entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.", Url: "https://www.economia.gob.sv/" },
    { Nombre: "La Agencia de Gobierno Electrónico y Sociedad de la Información y del Conocimiento (AGESIC): Tiene la misión de liderar la estrategia de implementación del Gobierno Electrónico del país e impulsar la Sociedad de la Información y del Conocimiento como una nueva forma de ciudadanía, promoviendo la inclusión y la apropiación a través del buen uso de las tecnologías de la información y de las comunicaciones.", Url: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/ " },
    { Nombre: "Cámara Nacional de Comercio y Servicios del Uruguay: Entidad gremial empresarial que tiene por objetivo velar por el interés general del comercio y de todo el sector privado de la economía nacional.", Url: "https://www.cncs.com.uy/" },
    { Nombre: "Ministerio de Tecnologías de la Información y las Comunicaciones: Entidad que se encarga de diseñar, adoptar y promover las políticas, planes, programas y proyectos del sector de las Tecnologías de la Información y las Comunicaciones.", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Cámara de Comercio de Bogotá: Entidad privada con más de un siglo de historia, que promueve la prosperidad regional y contribuye a mejorar la calidad de vida y el clima de negocios.", Url: "https://www.ccb.org.co/" },
    { Nombre: "Superintendencia de Industria y Comercio: Es la autoridad nacional de protección de la competencia, los datos personales y la metrología legal, protege los derechos de los consumidores y administra el Sistema Nacional de Propiedad Industrial, a través del ejercicio de sus funciones administrativas y jurisdiccionales.", Url: "https://www.sic.gov.co/" }
]

const books = [
    { Autor: "Castellanos Marrón, L. D. C. (2020). ", Titulo: "Buyer persona: su construcción.", Subtitulo: "", Url: "http://148.202.167.116:8080/xmlui/handle/123456789/3796 " },
    { Autor: "Cienfuegos, M. G. P. (2021).", Titulo: "Estudio de mercado para la creación del Buyer Persona enfocado en el servicio al cliente.", Subtitulo: "Revisión: Armando Briñis Zambrano, 66.", Url: "https://www.itetps.edu.sv/img/investigacion/descargas/CONARES%20VOLUMEN%20II.pdf#page=66" },
    { Autor: "Foullon Inzunza, J. J. (2020). ", Titulo: "Segmentación de mercado.", Subtitulo: "", Url: "http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/3432/1/Segmentaci%c3%b3n_mercado.PDF" },
]

const websites = [
    { Nombre: "La plataforma de Wix tiene un gran repertorio de información en temas de diseño web, fotografía, eCommerce, Google y SEO, redes sociales, entre otros. Recursos útiles para implementar dentro de una empresa. ", Url: "https://es.wix.com/blog" },
    { Nombre: "La plataforma de Hootsuite ofrece gran cantidad de información para implementar y destacar en redes sociales.", Url: "https://blog.hootsuite.com/es/" },
    { Nombre: "La plataforma de Hubspot tiene un gran repertorio en temas de comunicación, marketing, ventas y servicio al cliente.", Url: "https://blog.hubspot.es/" }
]











