import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-estrategiadenegocios',
    templateUrl: './estrategiadenegocios.component.html',
    styleUrls: ['../organizacionypersonas.component.scss'],
    animations: [sectionsAnimation]
})
export class EstrategiadenegociosComponent {
    public title: string = 'Estrategia de negocios en la era digital';
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
        const palabras = [17,87,88,89,90,91,92,93,94,95,96,97];
        const expertos = [11,12,13];
        const instituciones = [12,2,14,15,5,17,18,19];
        const literatura = [54];
        const websites = [26,27,28,29,30];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "Análisis e investigación de mercado", Recurso: "Video 1", Url: "https://www.youtube.com/watch?v=kZPPoPMwrIE", Descripcion: "Se presentan dos videos que ayudan al participante a comprender lo que es un nicho y un segmento de mercado, cómo definirlos y qué elementos considerar." },
    { Tema: "Clientes", Recurso: "Video 2", Url: "https://www.youtube.com/watch?v=MAbo2baFGhs", Descripcion: "Se presentan dos videos que ayudan al participante a comprender lo que es un nicho y un segmento de mercado, cómo definirlos y qué elementos considerar." },
    { Tema: "Clientes", Recurso: "Formato para definir segmento y nicho de mercado.", Url: "", Descripcion: "Se presenta una herramienta en Word que servirá para que el participante defina el nicho y segmento de mercado." },
    { Tema: "Clientes", Recurso: "Podcast: caso de definición de nicho de mercado", Url: "", Descripcion: "Se presenta un podcast para que el participante conozca un caso específico de definición de nicho de mercado." },
    { Tema: "Análisis e investigación de mercado", Recurso: "Análisis de competidores.", Url: "", Descripcion: "Se presenta un caso de una empresa para analizar los competidores." },
    { Tema: "Competidores y sustitutos", Recurso: "", Url: "", Descripcion: "Este caso se vincula con una actividad de reflexión en la que se debe hacer un análisis de competidores en un mercado específico." },
    { Tema: "Análisis de la situación de la empresa, análisis FODA", Recurso: "Formato para elaborar un análisis FODA.", Url: "", Descripcion: "Formato que ayudará al participante en la elaboración de un análisis de fortalezas, oportunidades, debilidades y amenazas." },
    { Tema: "Análisis de la situación de la empresa, análisis FODA", Recurso: "Video", Url: "https://www.youtube.com/watch?v=IZWUYayHLcI", Descripcion: "Video que muestra la herramienta matriz FODA, y la explica de manera detalla para una mejor comprensión." },
    { Tema: "Estrategias de marketing", Recurso: "Las 4 Ps. Formato que guía al participante en la integración de su estrategia.", Url: "", Descripcion: "Documento que va guiando al participante paso a pasa para la elaboración de su estrategia de marketing." },
    { Tema: "Estrategias de marketing", Recurso: "Video", Url: "https://www.youtube.com/watch?v=uhxViGl4tX0", Descripcion: "Video que explica de manera sencilla las 4 Ps del marketing." },
    { Tema: "Estrategias de marketing", Recurso: "Video", Url: "https://www.youtube.com/watch?v=2HuOar6VBUk", Descripcion: "Video de consulta que habla de las 4 Ps en la era digital." },
    { Tema: "Estrategias clave de publicidad en la era digital: SEO Marketing", Recurso: "Video", Url: "https://www.youtube.com/watch?v=_ewwO0Y1zb4", Descripcion: "Video que se refiere a la técnica de posicionamiento web SEO." },
    { Tema: "Curso", Recurso: "Programa especializado: Implementación del Marketing Mix", Url: "https://www.coursera.org/specializations/implementacion-marketing-mix", Descripcion: "Curso que permite gestionar el marketing mix y las habilidades necesarias para implementar estrategias de marketing exitosas" },
    { Tema: "Curso", Recurso: "Marketing digital para E-commerce", Url: "https://www.coursera.org/learn/marketing-digital-ecommerce", Descripcion: "El curso  te permitirá conocer las claves principales para desarrollar una estrategia de marketing digital aplicada a tu proyecto online. De esta forma podrás generar mayor visibilidad a tu propuesta y conseguir mejores resultados." },
    { Tema: "Curso", Recurso: "Marketing Digital en Acción", Url: "https://www.coursera.org/learn/marketing-digital-en-accion", Descripcion: "Este curso busca enseñar los principales pilares en los cuales se debe sustentar toda campaña de difusión de marketing digital, ilustrando los principales conceptos, así como las herramientas más importantes." }

]
