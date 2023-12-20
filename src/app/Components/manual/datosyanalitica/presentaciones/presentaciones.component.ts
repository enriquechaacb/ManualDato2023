import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-presentaciones',
    templateUrl: './presentaciones.component.html',
    styleUrls: ['../datosyanalitica.component.scss']
})
export class PresentacionesComponent {
    public title: string = 'Presentaciones para la toma de decisiones';
    public subtitle: string = 'Datos y Analítica';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    // public Experts: any = experts;
    // public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public References: any = references;
    // public Websites: any = websites;
    public Breadcrumbs: any = breadcrumbs;

    constructor(
        public _thisroute: ActivatedRoute
    ) {
        this.Secciones = [
            {Nombre: "Introducción", Valor: "Introduccion"},
            {Nombre: "Beneficios", Valor: "Beneficios"},
            {Nombre: "Proceso", Valor: "Proceso"},
            {Nombre: "Desarrollo", Valor: "Desarrollo"},
            {Nombre: "Herramientas", Valor: "Herramientas"},
            {Nombre: "Glosario", Valor: "Glosario"},
            // {Nombre: "Directorio de expertos", Valor: "Expertos"},
            // {Nombre: "Instituciones clave", Valor: "Instituciones"},
            // {Nombre: "Casos de éxito",Valor:"Casos"},
            {Nombre: "Referencias", Valor: "Referencias"},
            {Nombre: "Literatura sugerida", Valor: "Literatura"},
            // {Nombre: "Sitios web", Valor: "WebSites"},
            {Nombre: "E-book", Valor: "analitica_de_datos", EsExterno: true}
        ];
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
const breadcrumbs = [
    {Nombre:"Manual",Url:"../../../"},
    {Nombre:"Datos y Analítica",Url:"../../"},
    {Nombre:"Presentaciones para la toma de decisiones",Url:"../Introduccion"}
]

const tools = [
    {Tema:"PowerPoint",Recurso:"Video guía para aprender a usar Power Point.",Url:"https://youtu.be/LIXfGkAca0g ",Observaciones:"Herramienta muy conocida y utilizada, tiene plantillas, gráficos e imágenes para captar la atención y transmitir el mensaje."},
    {Tema:"Google slides",Recurso:"Video guía para aprender a usar Google slides.",Url:"https://www.youtube.com/watch?v=T8Fs-zkIX3I",Observaciones:"Herramienta en línea para crear presentaciones sencillas y colaborativas. Tiene plantillas, imágenes, formas y animaciones."},
    {Tema:"Prezi",Recurso:"Video guía para aprender a usar Prezi.",Url:"https://www.youtube.com/watch?v=sn2VrIanOWk ",Observaciones:"Herramienta en línea para presentaciones dinámicas e interactivas, se caracteriza por el uso de zooms, movimientos y efectos para mostrar la relación entre los elementos a presentar."},
    {Tema:"Canva",Recurso:"Video guía para aprender a usar Canva.",Url:"https://www.youtube.com/watch?v=UavsAM66D2Q ",Observaciones:"Herramienta en línea para diseño de presentaciones e infografías creativas y ejecutivas."},
    {Tema:"Tableau",Recurso:"Video guía para aprender a usar Tableau.",Url:"https://www.youtube.com/watch?v=7UgU4Y_TWAU ",Observaciones:"Herramienta en línea para crear dashboards o paneles para presentar datos de forma visualmente atractiva y analítica. Tiene diferentes fuentes con filtros, cálculos, estadísticas para la presentación de gráficos interactivos y dinámicos."},
    {Tema:"Powtoon",Recurso:"Video guía para aprender a usar Powtoon.",Url:"https://www.youtube.com/watch?v=q8M2R0IMwXs",Observaciones:"Herramienta en línea para crear presentaciones animadas y vídeos explicativos, se caracteriza por el uso de personajes, escenarios y efectos divertidos para captar la atención y contar una historia."},
    {Tema:"Emaze",Recurso:"Video guía para aprender a usar Emaze.",Url:"https://www.youtube.com/watch?v=-VbzNi44kkI",Observaciones:"Herramienta en línea para crear presentaciones visuales e impactantes, se caracteriza por el uso de diseños 3D, transiciones dinámicas y efectos de realidad aumentada para mostrar la información de forma innovadora."},
    {Tema:"SlideBean",Recurso:"Video guía para aprender a usar SlideBean.",Url:"https://www.youtube.com/watch?v=wmrMl94Dqs8",Observaciones:"Herramienta en línea para crear presentaciones, se caracteriza por el uso de inteligencia artificial para optimizar el diseño, el contenido y el formato de las diapositivas."},
    {Tema:"Visme",Recurso:"Video guía para aprender a usar Visme.",Url:"https://www.youtube.com/watch?v=lYd-pjdB6Ts",Observaciones:"Herramienta en línea para crear presentaciones creativas y ejecutivas, se caracteriza por el uso de elementos animados e interactivos para hacer las diapositivas más atractivas y dinámicas. "},
    {Tema:"Keynote",Recurso:"Video guía para aprender a usar Keynote.",Url:"https://www.youtube.com/watch?v=4ajmt3L_VOw ",Observaciones:"Herramienta para Mac e iOS para crear presentaciones elegantes y sofisticadas, se caracteriza por el uso de gráficos avanzados, transiciones fluidas y efectos especiales para mostrar la información de forma profesional."},
    {Tema:"Power BI",Recurso:"Primeros pasos con Power BI - Mi primer Dashboard",Url:"https://www.youtube.com/watch?v=p639VfOSyaI",Observaciones:"Power BI es otra herramienta popular de análisis y visualización de datos que permite conectar y analizar datos de diversas fuentes y crear informes interactivos."}
]
const words = [
    {Palabra:"Audiencia Objetivo", Significado:"Grupo específico de personas o individuos a quienes está dirigido un mensaje, producto, servicio o presentación. Es el grupo de personas que se pretende alcanzar, impactar o influenciar con la comunicación o acción en cuestión. Identificar la audiencia objetivo es esencial para adaptar el contenido y el enfoque de manera adecuada, asegurando que el mensaje sea relevante y efectivo para el público al que va dirigido.", Fuente:"(Meza, 2018)"},
    {Palabra:"Dicción", Significado:"Es la habilidad de quien ofrece un mensaje sonoro claro y definido. Es la forma de emplear las palabras y formar oraciones de manera verbal.", Fuente:"(Vozalia, 2023)"},
    {Palabra:"Discurso", Significado:"Es la construcción textual que permite la comunicación de contenidos científicos por medio de una lengua especializada en la que se caracterizan el léxico, la sintaxis y la configuración textual completa.", Fuente:"(Gurrea, 2008)"},
    {Palabra:"Exposiciones creativas", Significado:"Es un acto de convocatoria, generalmente público, en el que se exhiben colecciones de objetos de diversa temática (tales como: obras de arte, hallazgos arqueológicos, instrumentos de diversa índole, maquetas de experimentos científicos, maquetas varias, temas de debate, etc).", Fuente:"(Cruz, 2022)"},
    {Palabra:"Multimedia", Significado:"Es la integración en un sistema informático de texto, gráficos, imágenes, vídeo, animaciones, sonido y cualquier otro medio que pueda ser tratado digitalmente. El soporte habitual para este tipo de medios es de tipo electrónico y, a menudo, un sistema informático se encarga de generar la presentación de esa información en la forma y secuencia correcta. No obstante, otras formas de comunicación con múltiples recursos expresivos pueden también recibir la calificación de multimedia.", Fuente:"(Introducción a la multimedia y conceptos básicos, 2004)"},
]

const experts = [
    // {Nombre:"",Contacto:"",Url:"",Descripcion:""},
]

const institutions = [
    // {Nombre:"",Url:""},
]

const references = [
    {Autor:"INCIPY (2023).",Titulo:"Presentación 3º Estudio de Madurez AI & Data Driven de las Empresas.",Subtitulo:"Recuperado de ",Url:"https://www.youtube.com/watch?v=3ylOv3kUR9c&t=225s"},
    {Autor:"Hall, S. H. (2021).",Titulo:"Cómo dar presentaciones a ejecutivos de alto nivel y a los altos directivos. ",Subtitulo:"Business Envato Tuts+.",Url:"https://business.tutsplus.com/es/tutorials/presentations-to-senior-management--cms-34148"},
    {Autor:"Gurrea, M. T. (2008).",Titulo:"El español profesional y académico en el aula universitaria. el discurso oral y escrito.",Subtitulo:"Ibérica, 16, 187-189. ",Url:"https://www.redalyc.org/pdf/2870/287024065012.pdf"},
    {Autor:"Introducción a la multimedia y conceptos básicos. (2004).",Titulo:"En Tecnologías para los Sistemas Multimedia (1.a ed., p. https://www.trabajosocial.unlp.edu.ar).",Subtitulo:"Universidad Nacional de la Plata.",Url:"https://www.trabajosocial.unlp.edu.ar"},
    {Autor:"Jiménez, L. (2020).",Titulo:"Impacto de la investigación cuantitativa en la actualidad.",Subtitulo:"Convergence Tech, 4(IV), 59-68.",Url:""},
    {Autor:"Manterola, C. (2006).",Titulo:"¿Cómo presentar resultados de una investigación científica?",Subtitulo:"Revista Chilena de Cirugía, 59(2). ",Url:"https://scielo.conicyt.cl/pdf/rchcir/v59n2/art14.pdf"},
    {Autor:"Meza, M. (2018).",Titulo:"Audiencias objetivo y su segmentación: determinantes para la efectividad de una estrategia de comunicación ",Subtitulo:"Hub WordPress Theme. Hub WordPress ",Url:""},
    {Autor:"Theme",Titulo:"Create jaw-dropping websites.",Subtitulo:"",Url:"https://www.infosol.com.mx/miespacio/audiencias-objetivo-y-su-segmentacion-determinantes-para-la-efectividad-de-una-estrategia-de-comunicacion/"}
]

const books = [
    {Autor:"Cruz, J. (2022).",Titulo:"EXPOSICIONES CREATIVAS.",Subtitulo:"prezi.com.",Url:"https://prezi.com/p1hziyawkyqn/exposiciones-creativas/"},
    {Autor:"Moreno, J. (2023, 20 enero).",Titulo:"Exposiciones creativas: 10 ideas asombrosamente eficaces. CRM Hubspot.",Subtitulo:"Recuperado 6 de agosto de 2023, de ",Url:"https://blog.hubspot.es/marketing/paginas-de-equipos-creativas"},
    {Autor:"Núñez, V. (2020, 14 octubre).",Titulo:"Guía: Cómo hacer una buena presentación de resultados y no morir en el intento.",Subtitulo:"Vilma Núñez - Consultora Estratégica de Marketing",Url:"https://vilmanunez.com/como-hacer-una-presentacion-de-resultados/"},
    {Autor:"Torres, D. (2023, 20 enero).",Titulo:"Presentación de un proyecto empresarial: Cómo atraer a tus inversores. ",Subtitulo:"Hubspot. Recuperado 6 de agosto de 2023, de ",Url:"https://blog.hubspot.es/sales/presentacion-proyecto-inversores"},
    {Autor:"Vozalia. (2023).",Titulo:"Mejorar la dicción y vocalización.",Subtitulo:"Ejercicios y consejos para tener mejor dicción. Vozalia.",Url:"https://www.vozalia.com/entrenamiento-de-voz/clases-de-diccion-mejorar-la-diccion-y-vocalizacion-ejercicios-y-consejos-para-tener-mejor-diccion/"}
]

const websites = [
    //{Nombre:"",Url:""}
]