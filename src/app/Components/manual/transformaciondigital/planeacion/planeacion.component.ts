import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-planeacion',
    templateUrl: './planeacion.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class PlaneacionComponent {
    public title: string = 'Planeación y estrategia digital';
    public subtitle: string = 'Estrategia y transformación digital';
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

const tools = [
    { Tema: "La alineación entre la estrategia de negocio y la estrategia digital", Recurso: "Cómo diseñar una estrategia digital", Url: "https://www.youtube.com/watch?v=rW9eY8MSCEg", Descripcion: "Vídeo descriptivo", Observaciones: "Amplía conceptos revisados en el texto" },
    { Tema: "La alineación entre la estrategia de negocio y la estrategia digital", Recurso: "Documental \"Big Data: el valor de nuestra información\" de Modesto Sierra", Url: "https://www.youtube.com/watch?v=xDlV1jCW7n0", Descripcion: "Documental que describe el valor de la información y la importancia de resguardarla apropiadamente", Observaciones: "Amplía conceptos revisados en el texto" },
    { Tema: "La alineación entre la estrategia de negocio y la estrategia digital", Recurso: "Big Data y sus Aplicaciones en 2023 (Economía de los Datos)", Url: "https://www.youtube.com/watch?v=l_5AnUi4tEw", Descripcion: "Describe qué es la economía de datos y su valor para la economía.", Observaciones: "Presenta el concepto de economía del dato" },
    { Tema: "Procesar y entender los datos", Recurso: "Introducción al Big Data, sesión 2 datahack", Url: "https://www.youtube.com/watch?v=hLaWJA_Dcts&t=2464s", Descripcion: "Casos prácticos de implementación de Big Data", Observaciones: "Permite sentar las bases para comprender el uso e importancia de los datos" },
    { Tema: "Procesar y entender los datos", Recurso: "Sitio web de Asana", Url: "https://asana.com/es/resources/key-performance-indicator-kpi?psafe_param=1&gad_source=1&gclid=CjwKCAiA1-6sBhAoEiwArqlGPmxTQ4MFHfyZU7eacmlKg408Zf0YBwvcCh1jOPW1tYqXGsw1r6ZifBoCV8MQAvD_BwE&gclsrc=aw.ds", Descripcion: "Plantilla de KPI’s", Observaciones: "Sitio web explicativo acompañado de una plantilla anexa. Archivo de Excel que sugiere cómo llevar un control de los KPIs " },
    { Tema: "Procesar y entender los datos", Recurso: "Lista de verificación para identificar datos", Url: "", Descripcion: "Archivo de Excel con el listado de los pasos sugeridos para el identificar datos productivos en una empresa.", Observaciones: "Lista de verificación en Excel, anexa" },
    { Tema: "Vamos a medirnos", Recurso: "KPI - Qué es + Ejemplos de Indicadores Clave de Desempeño", Url: "https://www.youtube.com/watch?v=dzh7faTkHCk&list=RDLVdzh7faTkHCk&start_radio=1&rv=dzh7faTkHCk&t=241", Descripcion: "Video explicativo. Presenta ejemplos y explicaciones claras para identificar KPI en las empresas", Observaciones: "Amplia conceptos revisados en el texto" },
    { Tema: "Planeación y diagnóstico", Recurso: "Análisis FODA (Fortalezas, oportunidades, debilidades y amenazas)", Url: "https://asana.com/es/resources/swot-analysis", Descripcion: "complementado con un archivo en Excel ", Observaciones: "Archivo de Excel, que debe ser utilizado por el experto en TI para comparar herramientas de software a fin de elegir la que de mejores ventajas competitivas a la empresa considerando sus necedades reales y el presupuesto disponible." }
]

const experts = [
    { Nombre: "Modo digital", Contacto: "", Url: "https://mododigital.uy", Descripcion: "Una plataforma apoyada por el BID que integra recursos y herramientas útiles para la transformación digital de las pymes. " },
    { Nombre: "Incubadora de empresas GERMINA", Contacto: "", Url: "https://onlineuniversity.ufg.edu.sv/i.germina.html", Descripcion: "Incubadora de empresas enfocadas en prestar servicios de TIC, tiene apoyo del Banco Mundial " },
    { Nombre: "Fundación Da Vinci Uruguay", Contacto: "", Url: "https://davinci.lat/", Descripcion: "Esta incubadora está dirigida a emprendimientos en etapas tempranas de desarrollo con soluciones validadas y que cuenten o con mérito innovador o valor diferencial." },
    { Nombre: "Incubar Colombia", Contacto: "", Url: "https://incubarcolombia.org.co/", Descripcion: "Incubar Colombia es una Incubadora de Empresas innovadoras de Base Tecnológica, especializada en proveer servicios integrales de Emprendimiento y creación de empresa a nivel nacional, mediante el apoyo de iniciativas empresariales en fase de PRE- INCUBACIÓN, INCUBACIÓN y Fortalecimiento Empresarial." },
    { Nombre: "InQlab Colombia", Contacto: "Paula Barrientos, Managing partner", Url: "mailto:pbarrientos@inqlab.co", Descripcion: "InQlab se funda en el 2013 como una incubadora que apoya e invierte en proyectos de empresas disruptivas." },
    { Nombre: "Cámara Colombiana de Comercio Electrónico", Contacto: "", Url: "https://www.ccce.org.co/", Descripcion: "Es una entidad privada sin ánimo de lucro, de orden gremial, que tiene como propósito promover y fortalecer la industria eCommerce en Colombia" },
    { Nombre: "Cámara de Comercio de Cali", Contacto: "", Url: "https://www.ccc.org.co", Descripcion: "Instancia que trabaja en una visión ecosistémica que apoya y orienta al empresario y a las empresas en favor de su desarrollo" },
    { Nombre: "Colombia Fintech", Contacto: "", Url: "https://colombiafintech.co/", Descripcion: "Asociación de empresas Fintech de Colombia" },
    { Nombre: "FUSADES", Contacto: "", Url: "https://fusades.org/", Descripcion: "Organización en el Salvador que busca una mayor inclusión social e impulsa a las pequeñas empresas" },
]

const institutions = [
    { Nombre: "Ministerio de Tecnologías de la Información y Comunicaciones de Colombia, está encargado de las tecnologías de la información y la comunicación.", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Ministerio de Comercio, Industria y Turismo de Colombia, encargado de las relaciones comerciales dentro del país.", Url: "https://www.mincit.gov.co/" },
    { Nombre: "Ministerio de Economía y Finanzas de la República Oriental del Uruguay, Secretaría de estado encargada de la administración y fortalecimiento del comercio del Uruguay.", Url: "https://www.gub.uy/ministerio-economia-finanzas/" },
    { Nombre: "Dirección Nacional de Innovación, Ciencia y Tecnología Uruguay, instancia de articulación y vinculación para el desarrollo de la ciencia y la tecnología de Uruguay", Url: "https://www.gub.uy/ministerio-educacion-cultura/direccion-innovacion-ciencia-tecnologia" },
    { Nombre: "Ministerio de Economía de El Salvador es la entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.", Url: "https://www.economia.gob.sv/" },
    { Nombre: "Ministerio de Educación, Ciencia y Tecnología de El Salvador, encargado de elaborar Políticas orientadas al desarrollo tecnológico del país.", Url: "https://www.mined.gob.sv/" }

]

const words = [
    { Palabra: "Algoritmo", Significado: "Es un conjunto de instrucciones o reglas definidas y no-ambiguas, ordenadas y finitas que permite, típicamente, solucionar un problema, realizar un cómputo, procesar datos y llevar a cabo otras tareas o actividades.", Fuente: "(Española, 2022)" },
    { Palabra: "Estrategia", Significado: "Es un procedimiento dispuesto para la toma de decisiones y/o para accionar frente a un determinado escenario. Esto, buscando alcanzar uno o varios objetivos previamente definidos.", Fuente: "(Westreicher, 2021)" },
    { Palabra: "Gestión", Significado: "La gestión es un conjunto de procedimientos y acciones que se llevan a cabo para lograr un determinado objetivo.", Fuente: "(Westreicher G. , 2020)" },
    { Palabra: "Información", Significado: "Es el nombre por el que se conoce un conjunto organizado de datos procesados que constituyen un mensaje que cambia el estado de conocimiento del sujeto o sistema que recibe dicho mensaje.", Fuente: "(Wikipeida, 2023)" },
    { Palabra: "Machine Learning", Significado: "Es una forma de la IA que permite a un sistema aprender de los datos en lugar de aprender mediante la programación explícita. Conforme el algoritmo recibe datos de entrenamiento, es posible producir modelos más precisos basados en datos. Un modelo de machine learning es la salida de información que se genera cuando entrena su algoritmo de machine learning con datos.", Fuente: "(IBM, 2023)" },
    { Palabra: "Software", Significado: "Es un término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.", Fuente: "(Siginificados.com, s.f.)" }
]

const books = [
    { Autor: "Alonso, M. (2023).", Titulo: "Transformación digital de la empresa: recursos útiles y guía completa.", Subtitulo: "Asana.", Url: "https://asana.com/es/resources/what-is-dx" },
    { Autor: "Gómez-Zorrilla, J., Sánchez-Piña, D. (2022).", Titulo: "Guía práctica de analítica digital: ROI, KPI y métricas. Cómo medir y optimizar tu estrategia digital para potenciar tu negocio.", Subtitulo: "LID Editorial. España. 196 p.", Url: "" },
    { Autor: "Perdigones L, R. (2020).", Titulo: "Cómo gané a Zara en estrategia digital: La historia real de un comercio de barrio que se hizo con el Premio de Estrategia Digital frente a Gigantes de Internet.", Subtitulo: "Publicación Independiente. 66 p.", Url: "" },
    { Autor: "Pera, L. (2020).", Titulo: "Manual para Digitalizar una Pyme.", Subtitulo: "Publicación independiente.", Url: "" },
    { Autor: "Steebeek, I. (2018).", Titulo: "The Data Management Cookbook.", Subtitulo: "Data Crossroads.", Url: "https://datacrossroads.nl/wp-content/uploads/woocommerce_uploads/2019/11/The-DM-Cookbook-FULL.pdf" }
]

const websites = [
    { Nombre: "Acelera pyme (2023). Estrategia orientada al dato para tu pyme", Url: "https://www.acelerapyme.gob.es/recursos/monografico/estrategia-orientada-al-dato-para-tu-pyme" },
    { Nombre: "HubSpot (2024). Blog que presenta diversidad de temas y sugerencias para planeación, administración, marketing, comunicación, entre otros.", Url: "https://blog.hubspot.es" },
    { Nombre: "Cyberclick (2022). 7 ejemplos reales y casos de éxito de Big Data", Url: "https://www.youtube.com/watch?v=59b0rINnBuU" }
]
