import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';

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
    public Tools: any = tools;
    public Experts: any = experts;
    public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public Websites: any = websites;
    public Breadcrumbs: any = breadcrumbs;
    public Beneficios: any = beneficios;

    constructor(
        public _thisroute: ActivatedRoute
    ) {
        this.Secciones = sections;
        this.Seccion = "Introduccion";
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            console.log(params)
            this.Seccion = params['section'];
        });
    }
    downloadEbook(url: string){
        const d = '../../../assets/downloads/'+url+'.pdf';
        window.open(d,'_blank');
    }
}

const sections = [
    { Nombre: "Introducción", Valor: "Introduccion", Activo: true },
    { Nombre: "¿Qué es?", Valor: "Definicion", Activo: true },
    { Nombre: "Beneficios", Valor: "Beneficios", Activo: true },
    { Nombre: "Proceso", Valor: "Proceso", Activo: true },
    { Nombre: "Herramientas", Valor: "Herramientas", Activo: true },
    { Nombre: "Glosario", Valor: "Glosario", Activo: true },
    { Nombre: "Directorio de expertos", Valor: "Expertos", Activo: true },
    { Nombre: "Instituciones clave", Valor: "Instituciones", Activo: true },
    { Nombre: "Literatura sugerida", Valor: "Literatura", Activo: true },
    { Nombre: "Sitios web", Valor: "WebSites", Activo: true },
    { Nombre: "Casos de éxito", Valor: "Casos", Activo: false },
    { Nombre: "E-book", Valor: "analitica_de_datos", Activo: true, EsExterno: true }
]
const breadcrumbs = [
    {Nombre:"BiblioSmart",Url:"../../../"},
    {Nombre:"Datos y Analítica",Url:"../../"},
    {Nombre:"Sistemas especializados",Url:"../Introduccion"}
]
const tools = [
    {Tema:"Technology Evaluation Center",Recurso:"",Url:"https://landing.technologyevaluation.com/sistemas-erp/?TecReferer=ppc_google_latam_search_erp-general_erp-caracteristicas_v7a&gad=1&gclid=CjwKCAjwu4WoBhBkEiwAojNdXpwP4px7dRMU-lRSGQqDvREEspbeKD4UpS3ZV61joYElcaYf4xuVtBoCg74QAvD_BwE",Descripcion:"Permite comparar diversos proveedores de sistemas ERP",Observaciones:"Ofrece un informe gratuito sobre diversas soluciones ERP disponibles en el mercado"},
    {Tema:"Sistema de gestión empresarial (ERP)",Recurso:"",Url:"https://www.ticportal.es/temas/enterprise-resource-planning/que-es-sistema-erp",Descripcion:"Artículo descriptivo acerca de los ERP",Observaciones:"El artículo agrega programas de ERP y un video explicativo"},
    {Tema:"Customer Relationship Management (CRM)",Recurso:"",Url:"https://www.salesforce.com/mx/crm/",Descripcion:"Artículo sobre los CRM",Observaciones:"El artículo está enfocado a pymes"},
    {Tema:"Top10.com",Recurso:"",Url:"https://www.top10.com/crm/sp-comparison?utm_source=google&kw=crm%20gratuito&c=572827443537&t=search&p=&m=b&adpos=&dev=c&devmod=&mobval=0&network=g&campaignid=15778536479&groupid=135447135767&targetid=kwd-315582950&interest=&physical=9047091&feedid=&a=151115&ts=&topic=&clicktype=&camtype=&gclid=CjwKCAjwu4WoBhBkEiwAojNdXtMWH72LdbLJ8lsEfXnUNIQ65DSCycbgI8v5RYodwmiqnNUfFrzZRRoCHZ8QAvD_BwE",Descripcion:"Analiza los mejores recursos CRM disponibles de forma gratuita",Observaciones:"Incluye reseñas de usuarios"},
    {Tema:"Slack",Recurso:"",Url:"https://www.youtube.com/watch?v=wtrajB1mBPk",Descripcion:"Video guía para aprender a usar Slack",Observaciones:"Plataforma de comunicación empresarial y colaboración en equipo"},
    {Tema:"Sistema de punto de venta (POS)",Recurso:"",Url:"https://squareup.com/us/es/townsquare/what-pos-system",Descripcion:"Artículo sobre los POS",Observaciones:"El artículo está enfocado a pymes"},
    {Tema:"Alegra",Recurso:"",Url:"https://escuela-emprendedores.alegra.com/contabilidad-facil/sistema-pos/",Descripcion:"Ofrece una explicación clara de su sistema de punto de venta",Observaciones:""},
    {Tema:"Sistema de gestión de inventario (IMS)",Recurso:"",Url:"https://www.ibm.com/mx-es/topics/inventory-management",Descripcion:"Artículo sobre los IMS",Observaciones:"Artículo para conocer, entender y saber a dónde se dirigen los IMS"},
    {Tema:"ScotiaBank",Recurso:"",Url:"https://www.scotiabank.com.mx/blog/pymes-optimizar-gestion-inventarios-negocio-empresa",Descripcion:"Es un blog dedicado a pymes que aborda temas relevantes de forma simple",Observaciones:""},
    {Tema:"Monday.com",Recurso:"",Url:"https://www.youtube.com/watch?v=Eyia8mQxcPY ",Descripcion:"Video oficial para aprender a usar Monday.com",Observaciones:"Plataforma de gestión y colaboración en línea que ayuda a las empresas y equipos a planificar, organizar y realizar un seguimiento de sus proyectos y tareas de manera eficiente"},
    {Tema:"Shopify",Recurso:"",Url:"https://www.youtube.com/watch?v=ty1tGghxqjk ",Descripcion:"Curso para crear una tienda en Shopify",Observaciones:"Ofrece un centro de comercio completo"},
    {Tema:"Wix",Recurso:"",Url:"https://www.youtube.com/watch?v=4q97uMfhAbk ",Descripcion:"Curso para crear una página web en Wix",Observaciones:"Es ideal para personas que no tienen experiencia en el diseño web "},
    {Tema:"Sistema de gestión de recursos humanos (HRM)",Recurso:"",Url:"https://www.docusign.mx/blog/HRMS ",Descripcion:"Artículo sobre los HRM",Observaciones:"El artículo está enfocado a pymes"},
    {Tema:"Plataforma de gestión de contenido (CMS)",Recurso:"",Url:"https://www.oracle.com/mx/content-management/what-is-cms/#:~:text=¿Qué%20es%20un%20sistema%20de,editar%2C%20organizar%20y%20publicar%20contenidos",Descripcion:"Artículo sobre los CMS",Observaciones:"El artículo está enfocado a pymes"}
]
const words = [
    {Palabra:"Sistema Especializado", Significado:"Un sistema especializado de gestión es un sistema que se enfoca en una función o proceso específico de una organización, como la calidad, el medio ambiente, la seguridad o la innovación. Un sistema especializado de gestión busca mejorar el desempeño de la organización en ese ámbito, mediante la definición de políticas, objetivos y procesos, así como el seguimiento y la evaluación de los resultados.", Fuente:"Alicia, 2020"},
    {Palabra:"Ciclo de vida de los sistemas de gestión", Significado:"Se refiere a las etapas que atraviesa un sistema desde su concepción hasta su finalización o desuso. El ciclo de vida puede variar según el tipo de sistema, pero en general se compone de las siguientes fases: análisis, diseño, desarrollo, evaluación, implementación, operación y mantenimiento, medición de resultados y ajustes.", Fuente:"Corvo, 2020"},
    {Palabra:"Inteligencia de datos", Significado:"La inteligencia de datos es el proceso de extraer el significado de los datos para tomar mejores decisiones. Implica la aplicación de técnicas de diversos campos, como la estadística, la informática y las matemáticas. La inteligencia de datos ayuda a las organizaciones a responder preguntas fundamentales sobre sus datos, como quién los utiliza, cómo los utiliza, dónde se almacenan, qué calidad tienen, qué valor tienen y qué riesgos implican. La inteligencia de datos también se relaciona con los macrodatos o Big data, que son conjuntos de datos tan grandes y complejos que precisan de aplicaciones informáticas no tradicionales de procesamiento de datos para tratarlos adecuadamente. La ciencia de datos es una especialidad que surge de la inteligencia de datos y que se enfoca en el análisis, la visualización y la comunicación de los datos.", Fuente:"(¿Qué es la ciencia de datos?, 2023"},
    {Palabra:"Ciencia de datos", Significado:"La ciencia de datos combina estadística, computación científica, aprendizaje automatizado, análisis avanzado y programación. La ciencia de datos es una forma de extraer conocimientos ocultos y sacar el máximo provecho de los datos en la era cognitiva.", Fuente:"(¿Qué es la ciencia de datos? | IBM, 2023"},
    {Palabra:"Sistema de gestión de contenidos", Significado:"A menudo abreviado como CMS, es un software que ayuda a los usuarios a crear, administrar y modificar contenido en un sitio web sin la necesidad de conocimientos técnicos especializados.", Fuente:"Kinsta, 2020"},
    {Palabra:"Sistema de gestión de recursos empresariales", Significado:"Conocido también por las siglas ERP es un sistema de administración que integra todas las partes del negocio, como planificación, manufactura, ventas y finanzas. El sistema ERP tiene la meta de integrar información de toda la empresa y eliminar procesos que no son necesarios y que además resultan costosos.", Fuente:"Sánchez, 2013"}
]
const experts = [
    {Nombre:"ABPMP (Asociación de Profesionales de Procesos de Negocio)",Contacto:"abpmp.org.mx",Url:"http://abpmp.org.mx/",Descripcion:"Es una organización que busca promover y desarrollar la disciplina de gestión de procesos de negocio en América Latina."},
    {Nombre:"DATA, UC",Contacto:"Alexis Alvear Leyton",Url:"mailto:aalvearl@uc.cl",Descripcion:"Director ejecutivo de DATA UC, la unidad de estudios estadísticos y del Diplomado en Data Science de la Pontificia Universidad Católica de Chile"},
    {Nombre:"DATA IQ Ciudad de México",Contacto:"Empresa consultora",Url:"https://dataiq.mx/",Descripcion:"DATA IQ es una empresa consultora que reúne expertos en analítica de datos"},
    {Nombre:"Universidad Panamericana Ciudad de México, México",Contacto:"Antonieta Martínez-Velasco",Url:"mailto:amarvel.am@gmail.com",Descripcion:"Profesora investigadora "},
]
const institutions = [
    {Nombre:"Consejo Nacional de Política Económica y Social, CONPES",Url:"https://2022.dnp.gov.co/CONPES"},
    {Nombre:"Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia",Url:"https://www.mintic.gov.co/portal/inicio/"},
    {Nombre:"Ministerio de Economía de El Salvador",Url:"https://www.economia.gob.sv/"},
    {Nombre:"ANDE - Agencia Nacional de Desarrollo",Url:"https://www.ande.org.uy"},
]
const books = [
    {Autor:"Corvo, H. S. (2020)",Titulo:"Ciclo de vida de un sistema de información (Fases).",Subtitulo:"Lifeder.",Url:"https://www.lifeder.com/ciclo-vida-sistema-informacion/"},
    {Autor:"García, Laura (s.f.)",Titulo:"Kushki evoluciona el negocio paytech con la integración de data estratégica y la digitalización de las ventas.",Subtitulo:"Caso de éxito publicado en Salesforce.",Url:"https://www.salesforce.com/mx/customer-success-stories/kushki/"},
    {Autor:"IBM (2023)",Titulo:"¿Qué es la ciencia de datos?",Subtitulo:"Recuperado de",Url:"https://www.ibm.com/es-es/topics/data-science"},
    {Autor:"Kinsta (2020)",Titulo:"¿Qué es un sistema de gestión de contenidos (CMS)?",Subtitulo:"Kinsta®",Url:"https://kinsta.com/es/base-de-conocimiento/sitema-de-gestion-de-contenido/"},
    {Autor:"Microsoft Corporation. (2023)",Titulo:"Definición, ejemplos y ventajas de ERP.",Subtitulo:"Microsoft.com. Recuperado el 12 de agosto de 2023, de",Url:"https://dynamics.microsoft.com/es-x/erp/define-erp/"},
    {Autor:"Oracle México. (2023)",Titulo:"¿Qué es la ciencia de datos? ",Subtitulo:"Recuperado de",Url:"https://www.oracle.com/mx/what-is-data-science/"},
    {Autor:"Sánchez, F. O. (2013)",Titulo:"Éxito y fracaso de los ERP’S.",Subtitulo:"Gestiopolis, recuperado de",Url:"https://www.gestiopolis.com/exito-fracaso-erps/"},
    {Autor:"Terreros, D. (2022)",Titulo:"Guía completa: cómo crear casos de éxito que atraigan clientes.",Subtitulo:"Publicado en el blog de Hubspot.es y recuperado de",Url:"https://blog.hubspot.es/service/crear-casos-de-exito"},
    {Autor:"Useche Mahecha, Edwin y David Vega, Cristian (2018)",Titulo:"Propuesta de Plan de transición del sistema de gestión de calidad bajo la norma ISO 9001:2008 a ISO 9001:2015 en Dispetrocom Ltda.",Subtitulo:"Proyecto de titulación para el título de Ingeniero de Producción de la Universidad Distrital Francisco José de Caldas, Bogotá D.C. documento publicado en Library, recuperado de",Url:"https://1library.co/document/4yrrexpy-propuesta-transicion-sistema-gestion-calidad-norma-dispetrocom-ltda.html#google_vignette"}
]
const websites = [
    {Nombre:"HubSpot",Url:"https://www.hubspot.es/"},
    {Nombre:"Microsoft",Url:"https://www.microsoft.com/es-mx"},
    {Nombre:"IEBS Digital School",Url:"https://www.iebschool.com/blog/analista-datos-big-data/"},
    {Nombre:"Historias de casos de éxito globales con Dynamics 365 | Microsoft Dynamics 365",Url:"https://dynamics.microsoft.com/es-es/customer-stories/"},
    {Nombre:"Oracle",Url:"https://www.oracle.com/cr/"},
    {Nombre:"Salesforce",Url:"https://www.salesforce.com/mx"},
    {Nombre:"SAP",Url:"https://www.sap.com/latinamerica/index.html"},
    {Nombre:"Zendesk",Url:"https://www.zendesk.com.mx/"}
]

const beneficios = [
    {titulo:'Beneficio 1', texto:'La empresa mejorará la eficiencia operativa al optimizar sus recursos y procesos, aumentar la productividad y reducir costos.'},
    {titulo:'Beneficio 2', texto:'La pyme contará con elementos para dar seguimiento efectivo de las interacciones con los clientes para mejorar su experiencia.'},
    {titulo:'Beneficio 3', texto:'Mediante la automatización inteligente y sistemas basados en datos, las empresas pueden ofrecer experiencias personalizadas a los clientes, basadas en la recopilación de la información sobre sus preferencias y comportamientos.'},
    {titulo:'Beneficio 4', texto:'Los sistemas de automatización pueden manejar grandes volúmenes de consultas y solicitudes simultáneamente, lo que permite una mayor velocidad de respuesta evitando retrasos.'}
]