import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

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
    { Palabra: "Captación de clientes", Significado: "es el proceso de incorporar nuevos clientes a la empresa, con el propósito que compren nuestros productos y se conviertan en una fuente de utilidad para el negocio", Fuente: "(Borrás, 2018)." },
    { Palabra: "Costo de adquisición del cliente", Significado: "es una métrica que ayuda a determinar cuál es la inversión económica realizada para convertir un prospecto en cliente", Fuente: "(Hotmart, 2022)." },
    { Palabra: "Demanda", Significado: "establece el volumen o la cantidad que está dispuesto a comprar un grupo de clientes, dentro de un periodo de tiempo, en un área geográfica y en un ambiente definido", Fuente: "(Quiroa, 2022)." },
    { Palabra: "Fidelización de clientes", Significado: "es el proceso de crear y mantener una relación duradera y positiva con los consumidores existentes al satisfacer sus necesidades y expectativas, generar lealtad y propiciar compras repetidas y recomendaciones", Fuente: "(Pursell, 2023)." },
    { Palabra: "Servicio al cliente", Significado: "es el conjunto de acciones enfocadas en mejorar la experiencia de un cliente, con la cual se establece un proceso para resolver cualquier desafío, duda o problema del cliente de manera inmediata y efectiva", Fuente: "(Moreno, 2023)."}
]
const tools = [
    { Tema: "", Recurso: "Demostración de ZOHO CRM. Conoce CRM en 32 minutos ", Url: "https://youtu.be/GKk-Ce0RvCM", Descripcion: "Tutorial en video sobre la implementación del CRM de la empresa Zoho." },
    { Tema: "", Recurso: "Monday.com", Url: "https://youtube.com/playlist?list=PLutcJfNEwNkQrBEmYNa2PLRKwQ8hcc1uJ", Descripcion: "Curso completo en video de introducción e implementación del CRM de la empresa Monday.com" },
    { Tema: "", Recurso: "Workshop - Funnel de ventas + CRM con monday.com", Url: "https://youtu.be/A38Q8Oel_Gc", Descripcion: "Curso completo de la utilización de CRM de la empresa Monday.com" }
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
    { Autor: "Verdesoto, G. J. Z. (2020).", Titulo: "La gestión de relación con los clientes (CRM) en el desarrollo comercial de las empresas.", Subtitulo: "Espíritu Emprendedor TES, 4(3), 49-64.", Url: "http://espirituemprendedortes.com/index.php/revista/article/view/204" },
    { Autor: "Granadillo, E. D. L. H., Polo, L. L., & Coronell, L. P. (2017).", Titulo: "Modelo de gestión de relaciones con los clientes en empresas de consultoría.", Subtitulo: "Investigación e Innovación en Ingenierías, 5(2), 46-76.", Url: "https://revistas.unisimon.edu.co/index.php/innovacioning/article/view/2756" },
    { Autor: "Rogel, R. A. F., Laveriano, R. O. P., & Sagastegui, B. A. V. (2022).", Titulo: "Implementación de un sistema CRM en una PYME.", Subtitulo: "Gestión de Operaciones Industriales, 1(1), 73-82.", Url: "https://revistas.unitru.edu.pe/index.php/RINGIND/article/view/4463" }
]

const websites = [
    { Nombre: "La plataforma de Hubspot tiene un gran repertorio en temas de comunicación, marketing, ventas y servicio al cliente.", Url: "https://blog.hubspot.es/" },
    { Nombre: "La plataforma de Monday.com tiene un gran repertorio en temas de gestión de proyectos, marketing, productividad y servicio al cliente.", Url: "https://monday.com/blog/es/" }
]



