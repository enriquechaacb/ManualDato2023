import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-modelosmatematicos',
    templateUrl: './modelosmatematicos.component.html',
    styleUrls: ['../datosyanalitica.component.scss'],
    animations: [sectionsAnimation]
})
export class ModelosmatematicosComponent {
    public title: string = 'Modelos matemáticos';
    public subtitle: string = 'Datos y Analítica';
    public Seccion: string;
    public Secciones: Array<any>;
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
        const palabras = [68,69,70];
        const expertos = [4,7];
        const instituciones = [8,5,2,11];
        const literatura = [28,29,30,31,32];
        const websites = [20,21];
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
    {Nombre:"Modelos matemáticos",Url:"../Introduccion"}
]

const tools = [
    {Tema:"Modelos de Simulación",Recurso:"Artículo que describe la aplicación del modelado matemático aplicado al sector agrícola en Cuba.",Url:"http://scielo.sld.cu/scielo.php?pid=S2071-00542011000200008&script=sci_arttext",Observaciones:"En el documento se muestran las bondades del uso de modelos matemáticos de simulación en el sector agrícola, aplicable a otros sectores también."},
    {Tema:"Modelos de Simulación",Recurso:"Página Web que muestra cómo los modelos matemáticos de simulación son una alternativa viable para diseñar nuevos procesos en las empresas.",Url:"https://www.ainia.es/ainia-news/simulacion-procesos-modelos-matematicos-utilizas/#:~:text=La%20simulación%20de%20procesos%20con,un%20procedimiento%20útil%20y%20económico.",Observaciones:"Este caso es una aplicación en la industria alimenticia, aplicable a diversos sectores."},
    {Tema:"Modelos de proyección",Recurso:"Video que muestra la importancia de los modelos matemáticos para predecir o proyectar procesos. ",Url:"https://www.youtube.com/watch?v=5L3wJymM5NE",Observaciones:"En este video se explica cómo los modelos matemáticos responden objetivamente a los hechos reales."},
    {Tema:"Modelos de proyección",Recurso:"Artículo sobre la importancia de los modelos de proyección en la proyección financiera.",Url:"https://dialnet.unirioja.es/servlet/articulo?codigo=8679437",Observaciones:"Este es un caso de aplicación de modelos matemáticos a una empresa del sector de la construcción en México, parar determinar el estrés financiero de la misma y la sensibilidad a factores exógenos en las empresas."},
    {Tema:"Modelos de optimización",Recurso:"Libro digital en el que se aborda la metodología para formular y aplicar un modelo matemático de optimización.",Url:"http://repository.unipiloto.edu.co/handle/20.500.12277/6637",Observaciones:"En este documento se hacen análisis de casos que se resuelven por medio de modelado matemático."},
    {Tema:"Modelos de optimización",Recurso:"Video que describe la aplicación de modelos de optimización con ejemplos.",Url:"https://www.youtube.com/watch?v=lxln4J-GIGY",Observaciones:"Da una introducción general al tema y resuelve algunos ejemplos de aplicación."},
    {Tema:"Modelos de Redes y Grafos",Recurso:"Artículo introductorio a la teoría de grafos.",Url:"https://redined.educacion.gob.es/xmlui/bitstream/handle/11162/13526/011-026.pdf?sequence=1",Observaciones:"Describe la aplicación de la teoría de grafos en problemas de redes de comunicación y transporte."},
    {Tema:"Modelos de Redes y Grafos",Recurso:"Video introducción a Teoría de grafos como aplicación de problemas tales como redes sociales.",Url:"https://www.youtube.com/watch?v=F5Xjpg0-NhM",Observaciones:"Aborda los conceptos teóricos de la teoría de grafos explicados de manera accesible a todo público."}
]
