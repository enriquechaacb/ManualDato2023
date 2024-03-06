import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

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
        const palabras = [17,157,158,159,160,86];
        const expertos = [39,28,29,30,31,32,45,34,35];
        const instituciones = [5,25,26,18,2,14];
        const literatura = [98,99,10,101,102];
        const websites = [68,69,70];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
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
