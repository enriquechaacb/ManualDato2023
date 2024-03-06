import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-logistica',
    templateUrl: './logistica.component.html',
    styleUrls: ['./../procesos.component.scss'],
    animations: [sectionsAnimation]
})
export class LogisticaComponent {
    public title: string = 'Logística';
    public subtitle: string = 'Procesos';
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
        const palabras = [115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133];
        const expertos = [23,24,20];
        const instituciones = [20,21,22,16,13,9,10];
        const literatura = [64,65,66,67,68,69];
        const websites = [39,40,41,42,43,44];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}


const tools = [
    { Tema: "2.1 Introducción a la logística ", Recurso: "Video de TEDxAlcoi. No es Magia, es Logística.", Url: "https://www.youtube.com/watch?v=dtOqiwLalAk", Descripcion: "Vídeo explicativo de la logística.",Observaciones:"Video que ejemplifica un caso de éxito" },
    { Tema: "3.1 Introducción a la cadena de suministro", Recurso: "Platzi. Video ejemplo de la estrategia que cambió la industria del entretenimiento", Url: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Descripcion: "Vídeo que narra cómo Netflix derrotó al gigante de la renta de películas Blockbuster.",Observaciones:"Video que ejemplifica un caso de éxito " },
    { Tema: "3.2 Introducción a la logística en el comercio electrónico", Recurso: "Formato de estrategia para Satisfacer las Necesidades del Cliente - PYME de Ventas en Línea (adjunto)", Url: "", Descripcion: "Formato que permite definir una estrategia comercial habiendo definido las necesidades de los clientes",Observaciones:"Formato para descarga" },
    { Tema: "3.3 Cadena de valor y cadena de suministro", Recurso: "Euge Oller presenta y explica la propuesta de valor. ", Url: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Descripcion: "Video que explica la manera de elaborar una propuesta de valor utilizando el lienzo Canvas",Observaciones:"Video explicativo del modelo " },
    { Tema: "3.3. Cadena de valor y cadena de suministro", Recurso: "EAE (2018). Cadena logística VS cadena de suministro, no las confundas", Url: "https://retos-operaciones-logistica.eae.es/cadena-logistica-vs-cadena-de-suministro-no-las-confundas/", Descripcion: "Sitio web de EAE Business School Barcelona que explica las definiciones y características de la logística y la cadena de suministro. ",Observaciones:"Sitio web que aborda el tema" },
    { Tema: "3.4 Modelos de logística push y pull", Recurso: "DATATEC organización que agrupa a consultores expertos en el tema", Url: "https://www.datadec.es/blog/5-tecnologias-para-almacenes-que-debes-aplicar", Descripcion: "Sitio web donde se explican cinco tecnologías para utilizar en almacenes",Observaciones:"Sitio web explicativo del tema" },
    { Tema: "3.4 Modelos de logística push y pull", Recurso: "Cyberclick Marketing digital (2022). Marketing Push & Pull ¿Qué es y cuál escoger?", Url: "https://www.youtube.com/watch?v=m1n3df0ykY0  ", Descripcion: "Video que explica la manera de escoger uno de los dos modelos",Observaciones:"Video vinculado al tema" },
    { Tema: "3.4 Modelos de logística push y pull", Recurso: "Mira cómo se hace. ¿Qué diferencias hay entre el sistema Push y Pull en el control de inventarios por incrementos (2022)?", Url: "https://www.youtube.com/watch?v=_hufTGem8iY", Descripcion: "Video explicativo de las diferencias entre Puss y Pull en el control de inventarios",Observaciones:"Video vinculado al tema " },
    { Tema: "3.5 Sistemas de gestión de almacenes", Recurso: "Soluciones Logísticas y Aduanas. ", Url: "https://www.youtube.com/watch?v=gxz_S2W6VFo ", Descripcion: "Video explicativo de la dinámica, consejos y herramientas útiles de los tipos de sistemas de gestión de almacenes",Observaciones:"Video vinculado al tema " },
    { Tema: "3.6 Gestión de inventarios", Recurso: "Control de almacenes", Url: "https://www.youtube.com/watch?v=d7TMj6UiYXo", Descripcion: "Video que ofrece los pasos para controlar un almacén desde cero",Observaciones:"Video explicativo del tema" },
    { Tema: "3.6 Gestión de inventarios", Recurso: "El Inge Francisco. Cómo crear un control de inventario dinámico con entradas, salidas y stock", Url: "https://www.youtube.com/watch?v=xPgY1sVAajw ", Descripcion: "Video que explica la manera de crear un control de inventario dinámico con entradas, salidas y stock",Observaciones:"Video vinculado al tema" },
    { Tema: "3.7 Gestión de órdenes de compra, recepción y despacho de productos", Recurso: "Luis Torres. Orden de compra en Excel VBA.", Url: "https://www.youtube.com/watch?v=iHrYRvyL4I0", Descripcion: "Video que explica la manera de crear una orden de compra en Excel",Observaciones:"Video vinculado al tema" },
    { Tema: "3.7 Gestión de órdenes de compra, recepción y despacho de productos", Recurso: "Yornandy Alonso Martínez Pérez. Control y solicitud de mercancías. Gestión de Compras ", Url: "https://www.youtube.com/watch?v=Z9QSA9nVdIc", Descripcion: "Video que explica la manera de crear un control y solicitud de mercancías y gestión de compras",Observaciones:"Video vinculado al tema" },
    { Tema: "3.8  Optimización de rutas", Recurso: "Distribución y planificación de rutas ", Url: "https://www.youtube.com/watch?v=FBDN7mUvdjo", Descripcion: "Video que explica la manera de hacer la distribución y planificación de rutas con tips y herramientas clásicas",Observaciones:"Video vinculado al tema" },
    { Tema: "3.8  Optimización de rutas", Recurso: "Programación de rutas en Excel ", Url: "https://www.youtube.com/watch?v=vJ3IV3lOz0c", Descripcion: "Video tutorial explicativo de la manera de hacer la distribución de rutas con Excel ",Observaciones:"Video vinculado al tema" },
    { Tema: "3.9 Herramientas de logística y envío en el comercio electrónico", Recurso: "ESAN Graduate School of Business", Url: "https://www.youtube.com/watch?v=P2a2t9LuXc8", Descripcion: "Video explicativo de la manera de entender Logística tradicional versus la logística para e-commerce.",Observaciones:"Video vinculado al tema" },
    { Tema: "3.9 Herramientas de logística y envío en el comercio electrónico", Recurso: "Juan Merodio explica tres herramientas para comercio electrónico", Url: "https://www.youtube.com/watch?v=mXCotdzihZ0", Descripcion: "Video que explica 3 Herramientas Gratuitas para tu Comercio Electrónico",Observaciones:"Video vinculado al tema" }
]