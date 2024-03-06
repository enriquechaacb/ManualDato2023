import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-analiticadedatos',
    templateUrl: './analiticadedatos.component.html',
    styleUrls: ['../datosyanalitica.component.scss'],
    animations: [sectionsAnimation]
})
export class AnaliticadedatosComponent {
    public title: string = 'Analítica de datos';
    public subtitle: string = 'Datos y analítica';
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
        const palabras = [58,59,60,61,62,63];
        const expertos = [4,5,6,7];
        const instituciones = [8,2,5,11];
        const literatura = [19,20,21,22];
        const websites = [7,8,5,10,11];
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
    {Nombre:"Analítica de datos",Url:"../Introduccion"}
]
const tools = [
    { Tema: "Implementación de herramientas de analítica de datos.", Recurso: "Casos exitosos de Empresas que usaron Analítica de Datos - DataKnow", Url: "https://www.dataknow.io/casos-exitosos-analitica-datos/", Descripcion: "Solución al problema de procesos y sistemas rudimentarios para el análisis de incidentes o siniestros, duplicidad de registros, elevados tiempos de procesamiento.", Observaciones: "Analítica de datos en una empresa aseguradora en Perú." },
    { Tema: "Implementación de la analítica de datos en las organizaciones en Latinoamérica.", Recurso: "La analítica y la Inteligencia Artificial, catalizadores de los negocios en la región (estrategiaynegocios.net)", Url: "https://www.estrategiaynegocios.net/tecnologia-cultura-digital/la-analitica-y-la-inteligencia-artificial-catalizadores-de-los-negocios-en-la-region-IF10625872", Descripcion: "La analítica puede seguir el comportamiento de los consumidores en las tiendas físicas y en línea.", Observaciones: "El análisis del comportamiento del consumidor permite diseñar campañas de Marketing con mayor nivel de personalización y conversión." },
    { Tema: "Caso de aplicación de la tecnología en servicios bancarios.", Recurso: "Caso de éxito Banorte | LexisNexis Risk Solutions", Url: "https://risk.lexisnexis.es/insights-resources/case-study/banorte-financial-crime-compliance", Descripcion: "Caso de aplicación de analítica de datos frente al combate a crímenes financieros.", Observaciones: "Este es un caso que aplica la Automatización y depuración inicial y el monitoreo continuo de los datos." },
    { Tema: "Caso de transformación digital en Grupo Bimbo", Recurso: "“Analítica de datos”: La clave para la transformación digital de Grupo Bimbo (expansion.mx)", Url: "https://expansion.mx/tecnologia/2023/01/26/analitica-de-datos-la-clave-para-la-transformacion-digital-de-grupo-bimbo", Descripcion: "“Analítica de datos”: La clave para la transformación digital de Grupo Bimbo", Observaciones: "Bimbo ha logrado mejor control de datos y optimizar con Microsoft Azure, Power BI y Azure Synapse Analytics." },
    { Tema: "Casos reales de analítica avanzada por sectores", Recurso: "www.sdggroup.com/es-ES/analitica-avanzada-de-la-ia-la-z", Url: "https://www.sdggroup.com/es-ES/analitica-avanzada-de-la-ia-la-z?__hstc=258840533.b9a0c603f3484beeb24481ae96cc0801.1611070782046.1613486431865.1613639604974.15&__hssc=258840533.4.1613639604974&__hsfp=1577037732&hsCtaTracking=acb8b699-4389-4c80-ab29-21675432daf0%7C1dd5ecba-53d0-468c-b25a-59d8b235470d", Descripcion: "eBook sobre Analítica Avanzada. ", Observaciones: "Algunos de los casos de uso reales más relevantes según el modelo analítico empleado." },
    { Tema: "Creación de experiencias inteligentes con Inteligencia artificial en Coca Cola", Recurso: "Coca Cola se apoya en el Big Data para impulsar aún más su éxito - Big Data Magazine", Url: "https://bigdatamagazine.es/coca-cola-se-apoya-en-el-big-data-para-impulsar-aun-mas-su-exito", Descripcion: "Artículo que describe cómo Coca Cola se apoya en el Big Data para impulsar aún más su éxito", Observaciones: "Coca Cola busca seguir el liderazgo de los gigantes de la tecnología al desarrollar su asistente virtual en máquinas expendedoras para mayor personalización." },
    { Tema: "El Big Data y su valor", Recurso: "https://youtu.be/w4vsFKMO7XA", Url: "https://youtu.be/w4vsFKMO7XA", Descripcion: "Video que explica el Big data en 3 minutos y sus posibles aplicaciones.", Observaciones: "Explicación sencilla conceptos como Big Data y Analítica de datos." },
    { Tema: "Ciencia de datos aplicada en los negocios", Recurso: "https://youtu.be/1NrA-Nv4Uf0", Url: "https://youtu.be/1NrA-Nv4Uf0", Descripcion: "Video que explica casos de aplicación de analítica de datos en LA.", Observaciones: "Muestra aplicaciones a estrategias de ventas, marketing y publicidad." },
    { Tema: "Ejemplos de uso de Data Analytics", Recurso: "https://youtu.be/mm1bTZbaTH8", Url: "https://youtu.be/mm1bTZbaTH8", Descripcion: "Video que documenta el primer viaje de Uber en Paraguay.", Observaciones: "Muestra las bondades de la aplicación de analítica de datos en Uber." },
    { Tema: "Modelos predictivos exitosos ", Recurso: "https://youtu.be/ieTh3iM0zcY", Url: "https://youtu.be/ieTh3iM0zcY", Descripcion: "Video que muestra el uso de análisis predictivo para optimizar estrategias comerciales.", Observaciones: "Webinar que presenta casos de empresas que han aplicado análisis de predicción con éxito." }
]
