import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-indicadores',
    templateUrl: './indicadores.component.html',
    styleUrls: ['../organizacionypersonas.component.scss'],
    animations: [sectionsAnimation]
})
export class IndicadoresComponent {
    public title: string = 'Indicadores y métricas en entornos digitales';
    public subtitle: string = 'Organización y personas';
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
        const palabras = [105,106,107,108,109,110,111,112];
        const expertos = [14,15,16,17];
        const instituciones = [12,2,14,15,5,17,18,19];
        const literatura = [59,60];
        const websites = [31,32];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "Introducción a los indicadores y métricas para PYME", Recurso: "Curso en línea sobre conceptos fundamentales de Analítica Digital", Url: "https://www.udemy.com/course/define-tus-kpis-y-objetivos-en-el-entorno-digital/ ", Descripcion: "Define tus KPIs y objetivos en el entorno digital." },
    { Tema: "Selección e implementación de indicadores apropiados", Recurso: "Guía completa que acompaña con videos y ejercicios", Url: "https://www.ingenioempresa.com/indicadores-una-guia-incompleta/ ", Descripcion: "Publicación sobre indicadores de gestión: Definición, elaboración e interpretación con ejemplo práctico" },
    { Tema: "Métricas en un entorno digital y su importancia para la PYME", Recurso: "Programa intensivo, en formato de diplomado. ", Url: "https://www.techtitute.com/pa/escuela-de-negocios/diplomado/metricas-analiticas-marca-reputacion ", Descripcion: "Curso Universitario en Métricas y Analíticas de Marca y Reputación" },
    { Tema: "Métricas en un entorno digital y su importancia para la PYME", Recurso: "Las 15 métricas más importantes en Marketing digital. ", Url: "https://www.iebschool.com/blog/metricas-marketing-digital-marketing-digital/", Descripcion: "Un artículo que explica con detalle cada una de las métricas clave del marketing digital y cómo medirlas " },
    { Tema: "Guía de Kpis", Recurso: "Publicación de guía para conocer más sobre los conceptos vistos.", Url: "https://tudashboard.com/guia-de-kpis/ ", Descripcion: "Entender lo básico sobre los indicadores clave de rendimiento. " },
    { Tema: "Indicadores y métricas", Recurso: "5 indicadores para medir el impacto de la transformación digital", Url: "https://estrategia-td.com/5-indicadores-para-medir-el-impacto-de-la-transformacion-digital/", Descripcion: "Artículo de un blog especializado en transformación digital " }
]
