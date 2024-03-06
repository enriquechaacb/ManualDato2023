import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-modelosdenegocio',
    templateUrl: './modelosdenegocio.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class ModelosdenegocioComponent {
    public title: string = 'Modelos de negocio';
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
        const palabras = [15,151,152,153,154,155,156];
        const expertos = [36,37,38,30,31];
        const instituciones = [5,27,2,28,11,29];
        const literatura = [94,95,96,97];
        const websites = [65,66,67];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "1.1. Definición de modelo de negocio", Recurso: "", Url: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Descripcion: "Video acerca de cómo Netflix derrotó a Blockbuster.", Observaciones: "Video vinculado a una actividad" },
    { Tema: "1.2 Las necesidades de los clientes", Recurso: "", Url: "https://www.youtube.com/watch?v=BgiRwlyXnxQ", Descripcion: "Vídeo acerca de las necesidades de los clientes y cómo se diseñan estrategias a partir de identificar dichas necesidades", Observaciones: "Video vinculado a una actividad" },
    { Tema: "1.2 Las necesidades de los clientes", Recurso: "Formato para definir una estrategia de acuerdo con las necesidades del cliente.docx", Url: "", Descripcion: "Formato que permite definir una estrategia comercial habiendo definido las necesidades de los clientes", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.3. Diseño de una propuesta de valor", Recurso: "", Url: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Descripcion: "Video que explica la manera de elaborar una propuesta de valor utilizando el lienzo Canvas", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.3. Diseño de una propuesta de valor", Recurso: "Formato para comparar con el mercado.docx", Url: "", Descripcion: "Formato que permite identificar las características comunes y diferencias entre los productos o servicios de los competidores y los de la empresa.", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.3. Diseño de una propuesta de valor", Recurso: "Formato para definir propuesta de valor.docx", Url: "", Descripcion: "Formato que permite construir una propuesta de valor consistente con las necesidades del cliente.", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.4 Diseño del modelo de negocio", Recurso: "Formato para definir un modelo de negocio", Url: "", Descripcion: "Formato que facilita el diseño de un modelo de negocio.", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.4 Diseño del modelo de negocio", Recurso: "", Url: "https://www.youtube.com/watch?v=1TGDFWptFM0", Descripcion: "Vídeo que permite ver la manera en la que el modelo de negocio se articula con la propuesta de valor.", Observaciones: "Video informativo." },
    { Tema: "1.4 Diseño del modelo de negocio", Recurso: "", Url: "https://www.youtube.com/watch?v=OnvW8vbM02U", Descripcion: "Video que explica el uso de la metodología canvas para un modelo de negocio.", Observaciones: "Video vinculado a una actividad" },
    { Tema: "1.5 Tipos de modelo de negocio", Recurso: "Podcast tipos de modelo de negocio", Url: "", Descripcion: "Audio en el que se explica de manera detallada los tipos de modelos de negocio que existen en Internet", Observaciones: "Audio informativo" }
]
