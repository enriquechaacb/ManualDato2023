import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-sistemasespecializados',
    templateUrl: './sistemasespecializados.component.html',
    styleUrls: ['./sistemasespecializados.component.scss','../datosyanalitica.component.scss'],
    animations: [sectionsAnimation]
})
export class SistemasespecializadosComponent {
    public title: string = 'Sistemas especializados';
    public subtitle: string = 'Datos y Analítica';
    public Seccion: string;
    public Secciones: Array<any>;
    public Sistemas: any = sistemas;
    public Beneficios: any = beneficios;
    public Tools: any = tools;
    public Experts: any;
    public Institutions: any;
    public Words: any;
    public Books: any;
    public Websites: any;
    public Breadcrumbs: any = breadcrumbs;

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
        const palabras = [76,77,78,79,80,81];
        const expertos = [4,5,6,7];
        const instituciones = [8,5,2,11];
        const literatura = [38,39,40,41,42,43,44,45,46];
        const websites = [3,12,13,14,15,16,17,19];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const breadcrumbs = [
    {Nombre:"BiblioSmart",Url:"../../../"},
    {Nombre:"Datos y Analítica",Url:"../../"},
    {Nombre:"Sistemas especializados",Url:"../Introduccion"}
]
const tools = [
    {Tema:"Technology Evaluation Center",Recurso:"",Url:"https://landing.technologyevaluation.com/sistemas-erp/",Descripcion:"Permite comparar diversos proveedores de sistemas ERP",Observaciones:"Ofrece un informe gratuito sobre diversas soluciones ERP disponibles en el mercado"},
    {Tema:"Sistema de gestión empresarial (ERP)",Recurso:"",Url:"https://www.ticportal.es/temas/enterprise-resource-planning/que-es-sistema-erp",Descripcion:"Artículo descriptivo acerca de los ERP",Observaciones:"El artículo agrega programas de ERP y un video explicativo"},
    {Tema:"Customer Relationship Management (CRM)",Recurso:"",Url:"https://www.salesforce.com/mx/crm/",Descripcion:"Artículo sobre los CRM",Observaciones:"El artículo está enfocado a pymes"},
    {Tema:"Top10.com",Recurso:"",Url:"https://www.top10.com/crm/sp-comparison",Descripcion:"Analiza los mejores recursos CRM disponibles de forma gratuita",Observaciones:"Incluye reseñas de usuarios"},
    {Tema:"Slack",Recurso:"",Url:"https://www.youtube.com/watch?v=wtrajB1mBPk",Descripcion:"Video guía para aprender a usar Slack",Observaciones:"Plataforma de comunicación empresarial y colaboración en equipo"},
    {Tema:"Sistema de punto de venta (POS)",Recurso:"",Url:"https://squareup.com/us/es/townsquare/what-pos-system",Descripcion:"Artículo sobre los POS",Observaciones:"El artículo está enfocado a pymes"},
    {Tema:"Alegra",Recurso:"",Url:"https://escuela-emprendedores.alegra.com/contabilidad-facil/sistema-pos/",Descripcion:"Ofrece una explicación clara de su sistema de punto de venta",Observaciones:""},
    {Tema:"Sistema de gestión de inventario (IMS)",Recurso:"",Url:"https://www.ibm.com/mx-es/topics/inventory-management",Descripcion:"Artículo sobre los IMS",Observaciones:"Artículo para conocer, entender y saber a dónde se dirigen los IMS"},
    {Tema:"ScotiaBank",Recurso:"",Url:"https://www.scotiabank.com.mx/blog/pymes-optimizar-gestion-inventarios-negocio-empresa",Descripcion:"Es un blog dedicado a pymes que aborda temas relevantes de forma simple",Observaciones:""},
    {Tema:"Monday.com",Recurso:"",Url:"https://www.youtube.com/watch?v=Eyia8mQxcPY ",Descripcion:"Video oficial para aprender a usar Monday.com",Observaciones:"Plataforma de gestión y colaboración en línea que ayuda a las empresas y equipos a planificar, organizar y realizar un seguimiento de sus proyectos y tareas de manera eficiente"},
    {Tema:"Shopify",Recurso:"",Url:"https://www.youtube.com/watch?v=ty1tGghxqjk ",Descripcion:"Curso para crear una tienda en Shopify",Observaciones:"Ofrece un centro de comercio completo"},
    {Tema:"Wix",Recurso:"",Url:"https://www.youtube.com/watch?v=4q97uMfhAbk ",Descripcion:"Curso para crear una página web en Wix",Observaciones:"Es ideal para personas que no tienen experiencia en el diseño web "},
    {Tema:"Sistema de gestión de recursos humanos (HRM)",Recurso:"",Url:"https://www.docusign.mx/blog/HRMS ",Descripcion:"Artículo sobre los HRM",Observaciones:"El artículo está enfocado a pymes"},
    {Tema:"Plataforma de gestión de contenido (CMS)",Recurso:"",Url:"https://www.oracle.com/mx/content-management/what-is-cms/",Descripcion:"Artículo sobre los CMS",Observaciones:"El artículo está enfocado a pymes"}
]
const beneficios = [
    {titulo:'Beneficio 1', texto:'La empresa mejorará la eficiencia operativa al optimizar sus recursos y procesos, aumentar la productividad y reducir costos.'},
    {titulo:'Beneficio 2', texto:'La pyme contará con elementos para dar seguimiento efectivo de las interacciones con los clientes para mejorar su experiencia.'},
    {titulo:'Beneficio 3', texto:'Mediante la automatización inteligente y sistemas basados en datos, las empresas pueden ofrecer experiencias personalizadas a los clientes, basadas en la recopilación de la información sobre sus preferencias y comportamientos.'},
    {titulo:'Beneficio 4', texto:'Los sistemas de automatización pueden manejar grandes volúmenes de consultas y solicitudes simultáneamente, lo que permite una mayor velocidad de respuesta evitando retrasos.'}
]
const sistemas = [
    {titulo:'Sistemas de gestión empresarial (ERP)', texto:'Integración de múltiples procesos y datos en una sola plataforma para facilitar la planificación, la gestión de recursos, la contabilidad y la toma de decisiones en toda la organización.'},
    {titulo:'Sistemas de gestión de relaciones con clientes (CRM)', texto:'Herramientas para gestionar y analizar la información de los clientes, mejorar las relaciones con ellos y optimizar la estrategia de ventas y marketing.'},
    {titulo:'Sistemas de gestión de recursos humanos (HRM)', texto:'Plataformas que automatizan procesos de recursos humanos, como la contratación, la nómina, la gestión del desempeño y la capacitación del personal.'},
    {titulo:'Sistemas de comercio electrónico', texto:'Plataformas diseñadas para facilitar la venta y compra de bienes y servicios en línea, ofreciendo una experiencia de compra más fluida y segura para los clientes.'},
    {titulo:'Sistemas de automatización de procesos (BPM)', texto:'Herramientas para automatizar flujos de trabajo, tareas repetitivas y procesos empresariales, lo que aumenta la eficiencia y reduce los errores humanos.'},
    {titulo:'Sistemas de análisis de datos y Business Intelligence (BI)', texto:'Plataformas que recopilan, procesan y analizan grandes cantidades de datos para obtener información valiosa y tomar decisiones informadas.'},
    {titulo:'Sistemas de gestión de la cadena de suministro (SCM)', texto:'Herramientas que optimizan la logística, el inventario, la producción y la distribución para mejorar la eficiencia en la cadena de suministro.'},
    {titulo:'Sistemas de gestión de proyectos y colaboración', texto:'Plataformas que facilitan la planificación, el seguimiento y la colaboración en proyectos internos y externos.'}
]