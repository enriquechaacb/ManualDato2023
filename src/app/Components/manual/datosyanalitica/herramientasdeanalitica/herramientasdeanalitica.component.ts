import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';

@Component({
    selector: 'app-herramientasdeanalitica',
    templateUrl: './herramientasdeanalitica.component.html',
    styleUrls: ['../datosyanalitica.component.scss'],
    animations: [sectionsAnimation]
})
export class HerramientasdeanaliticaComponent {
    public title: string = 'Sistemas y herramientas de analítica';
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
    {Nombre:"Sistemas y herramientas de analítica",Url:"../Introduccion"}
]

const tools = [
    {Tema:"Excel",Descripcion:"Lista de reproducción para aprender a usar Excel para análisis de datos.",Url:"https://www.youtube.com/watch?v=AKhPo4ronKI&list=PLEy6Omomtm3ED2ZMs6zqW_xO3uV13Iziu",Observaciones:"18 videos de 15 minutos cada uno."},
    {Tema:"Google sheets",Descripcion:"Video para usar Google sheets en el análisis de datos.",Url:"https://www.youtube.com/watch?v=SvWGxBjs5ts",Observaciones:"Muestra cómo utilizar la herramienta de GSuite."},
    {Tema:"Tableau",Descripcion:"Video para analizar datos en Tableau.",Url:"https://www.youtube.com/watch?v=7UgU4Y_TWAU&t=30s ",Observaciones:"Crea un dashboard."},
    {Tema:"Power BI",Descripcion:"Lista de reproducción para aprender a usar Power BI para análisis de datos.",Url:"https://www.youtube.com/watch?v=HrCOmM-XRjE&list=PLXR1MU_rf6FKuB37dxmrsDWxt6SbMMcAD ",Observaciones:"8 videos "},
    {Tema:"Google Analytics",Descripcion:"Video de introducción para Google Analytics.",Url:"https://www.youtube.com/watch?v=2ka2YZscki8 ",Observaciones:"Enfocado a pymes."},
    {Tema:"IBM SPSS Statistics",Descripcion:"Video de introducción a IBM SPSS Statistics.",Url:"https://www.youtube.com/watch?v=F9yD-5r2dSE",Observaciones:""},
    {Tema:"Lenguaje de programación R",Descripcion:"Lista de reproducción para aprender a usar R para análisis de datos.",Url:"https://www.youtube.com/watch?v=k3tiNvTmug8&list=PLbDLkhJ5sFvCWFbP4tAFALHkNWNFo_FiL",Observaciones:"29 videos de 6 minutos cada uno."},
    {Tema:"Python",Descripcion:"Lista de reproducción para aprender a usar Python para análisis de datos.",Url:"https://www.youtube.com/watch?v=_2UhskLjBi0&list=PLjdo6jnQHJFZipQTvzOsfqFHjfOinLT6J",Observaciones:"21 vídeos de 8 minutos cada uno."},
    {Tema:"MicroStrategy",Descripcion:"Video que muestra cómo usar MicroStrategy Web.",Url:"https://youtu.be/LuAueW2vFi8",Observaciones:"Microstrategy es una interfaz interactiva para usuarios empresariales."},
    {Tema:"Qlikview",Descripcion:"Video explicativo de una plataforma de Business Discovery para análisis de datos.",Url:"https://youtu.be/TgByoEkPcZk",Observaciones:"Qlikview ofrece autoservicios para los usuarios empresariales."}
]
const words = [
    {Palabra:"Lenguaje de programación", Significado:"Es un lenguaje formal que proporciona al programador, la capacidad y habilidad de escribir una serie de instrucciones o secuencias de órdenes en forma de algoritmos con el fin de controlar el comportamiento físico o lógico de un sistema informático, para ejecutar determinadas tareas. Los lenguajes de programación se utilizan para crear software, aplicaciones y sistemas operativos.", Fuente:"Codeacademy Team, 2023"},
    {Palabra:"Plataforma de Análisis de datos", Significado:"Es un software que ayuda a analizar miles de puntos de datos a la vez, lo que permite obtener información sobre los procesos de una organización. Las plataformas de análisis de datos pueden proporcionar una amplia variedad de funciones, como la integración con múltiples fuentes de datos, la limpieza y transformación de datos, el análisis estadístico y la visualización de datos. Algunas plataformas también pueden incluir herramientas para el aprendizaje automático y la inteligencia artificial.", Fuente:"AWS, 2023"},
    {Palabra:"Preprocesamiento de datos", Significado:"Es el proceso de preparar los datos para su análisis. El preprocesamiento de datos se realiza para garantizar que los datos sean coherentes, completos y precisos. El preprocesamiento de datos incluye la eliminación de valores atípicos, la eliminación de datos duplicados, la normalización de los datos y la selección de características relevantes.", Fuente:"Krypton Solid, 2021"},
    {Palabra:"Valores atípicos", Significado:"Son valores que se encuentran muy lejos de los demás valores en un conjunto de datos, pueden ser el resultado de errores en la medición o simplemente pueden ser valores extremos que no siguen la tendencia general del conjunto de datos, pueden afectar significativamente los resultados de un análisis estadístico, ya que pueden sesgar la media y otros estadísticos importantes. Por lo tanto, es importante identificar y tratarlos antes de realizar cualquier análisis.", Fuente:"Sanjuán, 2022"}
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
    {Autor:"Cruz, J. (2022).",Titulo:"EXPOSICIONES CREATIVAS.",Subtitulo:"prezi.com.",Url:"https://prezi.com/p1hziyawkyqn/exposiciones-creativas/"},
    {Autor:"Moreno, J. (2023, 20 enero).",Titulo:"Exposiciones creativas: 10 ideas asombrosamente eficaces. CRM Hubspot.",Subtitulo:"Recuperado 6 de agosto de 2023, de ",Url:"https://blog.hubspot.es/marketing/paginas-de-equipos-creativas"},
    {Autor:"Núñez, V. (2020, 14 octubre).",Titulo:"Guía: Cómo hacer una buena presentación de resultados y no morir en el intento.",Subtitulo:"Vilma Núñez - Consultora Estratégica de Marketing",Url:"https://vilmanunez.com/como-hacer-una-presentacion-de-resultados/"},
    {Autor:"Torres, D. (2023, 20 enero).",Titulo:"Presentación de un proyecto empresarial: Cómo atraer a tus inversores. ",Subtitulo:"Hubspot. Recuperado 6 de agosto de 2023, de ",Url:"https://blog.hubspot.es/sales/presentacion-proyecto-inversores"},
    {Autor:"Vozalia. (2023).",Titulo:"Mejorar la dicción y vocalización.",Subtitulo:"Ejercicios y consejos para tener mejor dicción. Vozalia.",Url:"https://www.vozalia.com/entrenamiento-de-voz/clases-de-diccion-mejorar-la-diccion-y-vocalizacion-ejercicios-y-consejos-para-tener-mejor-diccion/"}
]

// const books = [
//     {Autor:"Aitana Soluciones. (2022).",Titulo:"Caso de éxito de La Corberana con Microsoft Power BI.",Subtitulo:"",Url:"https://blog.aitana.es/2022/05/31/caso-de-exito-la-corberana-con-microsoft-power-bi-business-central/"},
//     {Autor:"",Titulo:"Caso de éxito Grupo Libertad",Subtitulo:"Estrategia HyperIntelligence. (s. f.). MicroStrategy. ",Url:"https://www.microstrategy.com/es/resources/video/caso-de-exito-grupo-libertad---estrategia-hyperintelligence"},
//     {Autor:"Codeacademy Team. (2023).",Titulo:"What is a programming language? ",Subtitulo:"Codecademy Blog.",Url:"https://www.codecademy.com/resources/blog/programming-languages/"},
//     {Autor:"Krypton Solid. (2021).",Titulo:"¿Qué es el preprocesamiento de datos? ",Subtitulo:"",Url:"https://kryptonsolid.com/que-es-el-preprocesamiento-de-datos/"},
//     {Autor:"",Titulo:"Mejores prácticas de modelado de datos",Subtitulo:"QlikView ayuda. (2021).",Url:"https://help.qlik.com/es-ES/qlikview/May2023/Subsystems/Client/Content/QV_QlikView/LoadData/best-practices-data-modeling.htm"},
//     {Autor:"Pablog, & Pablog. (2022).",Titulo:"Caso de éxito Skechers: integrando Google Analytics y medición de ROAS.",Subtitulo:"Mentalidad Web.",Url:"https://www.mentalidadweb.com/blog-marketing-digital/caso-de-exito-skechers-integrando-google-analytics-y-medicion-de-roas/"},
//     {Autor:"AWS. (s. f.).",Titulo:"¿Qué es el análisis de datos? - Explicación del análisis de datos",Subtitulo:"Amazon Web Services, Inc.",Url:"https://aws.amazon.com/es/what-is/data-analytics/"},
//     {Autor:"Sanjuán, F. J. M. (2022).",Titulo:"Outlier.",Subtitulo:"Economipedia.",Url:"https://economipedia.com/definiciones/outlier.html"},
//     {Autor:"Tableau from Salesforce. (2023).",Titulo:"PepsiCo reduce el tiempo de análisis hasta en un 90 % con Tableau + Trifacta.",Subtitulo:"Tableau.",Url:"https://www.tableau.com/es-es/solutions/customer/pepsico-cuts-analysis-time-90-tableau-trifacta"},
//     {Autor:"Tokio School. (2023).",Titulo:"¿Quiénes usan Python? descubre las empresas que utilizan este lenguaje.",Subtitulo:"",Url:"https://www.tokioschool.com/noticias/quienes-usan-python-empresas/"}
// ]

const websites = [
    {Nombre:"HubSpot",Url:"https://www.hubspot.es/"},
    {Nombre:"Microsoft",Url:"https://www.microsoft.com/es-mx"},
    {Nombre:"IEBS Digital School",Url:"https://www.iebschool.com/blog/analista-datos-big-data/"},
    {Nombre:"Microsoft Dynamics, Historias de casos de éxito globales con Dynamics 365 | Microsoft Dynamics 365",Url:"https://dynamics.microsoft.com/es-es/customer-stories/"},
    {Nombre:"Oracle",Url:"https://www.oracle.com/cr/"},
    {Nombre:"Salesforce",Url:"https://www.salesforce.com/mx"},
    {Nombre:"SAP",Url:"https://www.sap.com/latinamerica/index.html"},
    {Nombre:"SkillLab",Url:"https://skilllab.io/en-us "},
    {Nombre:"Zendesk",Url:"https://www.zendesk.com.mx/"}
]