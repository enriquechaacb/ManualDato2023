import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-procesosdenegocio',
    templateUrl: './procesosdenegocio.component.html',
    styleUrls: ['./../procesos.component.scss'],
    animations: [sectionsAnimation]
})
export class ProcesosdenegocioComponent {
    public title: string = 'Procesos de negocio';
    public subtitle: string = 'Procesos';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    public Experts: any = experts;
    public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public Websites: any = websites;
    public Breadcrumbs: any = [
        {Nombre: "BiblioSmart", Url:"../../../"},
        {Nombre: this.subtitle, Url:"../../"},
        {Nombre: this.title, Url:"../Introduccion"}
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

const words = [
    {Palabra:"Internet de las cosas (IoT)", Significado:"IoT se refiere a la red de dispositivos físicos conectados entre sí y a internet, que pueden recopilar y compartir datos, interactuar y tomar decisiones sin intervención humana directa.", Fuente:""},
    {Palabra:"Chatbot", Significado:"Un chatbot es un programa de inteligencia artificial que puede interactuar con los usuarios a través de chat, simulando una conversación humana. Se utiliza en servicios de atención al cliente, asistencia en línea y otras interacciones automatizadas.", Fuente:""},
    {Palabra:"Automatización robótica de procesos (RPA)", Significado:"RPA es una tecnología que utiliza robots de software para automatizar tareas repetitivas y basadas en reglas en sistemas informáticos. Estos robots pueden emular las acciones humanas en aplicaciones y sistemas.", Fuente:""},
    {Palabra:"Inteligencia Artificial", Significado:"La inteligencia artificial (IA) se refiere a la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos. La IA permite a las máquinas aprender de la experiencia y realizar tareas que normalmente requerirían habilidades humanas, como el reconocimiento de voz, el aprendizaje automático y la toma de decisiones.", Fuente:""},
    {Palabra:"Big Data", Significado:"Se refiere al gran volumen de datos que se generan y recopilan a gran velocidad de diferentes fuentes. Estos datos son complejos y masivos, lo que dificulta su análisis con herramientas tradicionales.", Fuente:""},
    {Palabra:"Blockchain", Significado:"Es una tecnología de registro distribuido que utiliza cadenas de bloques para garantizar la seguridad, transparencia e integridad de las transacciones en línea sin necesidad de una autoridad central.", Fuente:""}
]
const tools = [
    { Tema: "1.1. Qué son los procesos de negocio y su importancia en las organizaciones.", Recurso: "Película en Netflix Hambre de Poder", Url: "https://www.netflix.com/", Descripcion: "\"The Founder\" (Hambre de Poder) - Cuenta la historia de cómo Ray Kroc adquirió y transformó la cadena de restaurantes McDonald's en una empresa global, destacando los procesos de negocio y la expansión de la franquicia." },
    { Tema: "2.2 Mapeo y documentación de los procesos: diagramas de flujo ", Recurso: "Infografía de cómo hacer un diagrama de flujo.", Url: "https://asana.com/es/resources/what-is-a-flowchart", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "2.2 Mapeo y documentación de los procesos: SIPOC", Recurso: "Herramienta para elaborar un diagrama SIPOC", Url: "https://www.lucidchart.com/pages/es/plantillas/diagrama-sipoc", Descripcion: "Formato para caja de herramientas" },
    { Tema: "3.1 Buenas prácticas para el diseño de procesos eficientes y efectivos.", Recurso: "Video que explica la diferencia de la eficiencia y eficacia.", Url: "https://youtu.be/9KqpOStyV48", Descripcion: "Formato para caja de herramientas" },
    { Tema: "3.1 Buenas prácticas para el diseño de procesos eficientes y efectivos.", Recurso: "Video que muestra la importancia de KPI con ejemplos", Url: "https://youtu.be/dzh7faTkHCk", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "3.2 Estrategias para optimizar los procesos y reducir tiempos y costos.", Recurso: "Video que desarrolla el uso del tiempo estándar para reducir costos", Url: "https://youtu.be/d-d19ze6V-E", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "3.3 Automatización y digitalización de procesos para mejorar la productividad.", Recurso: "Blog para el uso KPIS en entorno digital", Url: "https://rockcontent.com/es/blog/kpis-de-ventas/#:~:text=Los%207%20principales%20KPIs%20de%20ventas%201%201.,concretados%20...%207%207.%20Ciclo%20de%20venta%20", Descripcion: "Formato para caja de herramientas" },
    { Tema: "4.2 Implementación de un sistema de gestión de procesos (BPM) en la empresa.", Recurso: "Video explicativo de como implementar un BMP", Url: "https://youtu.be/0fTWBDyZ4fI", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "5.2 Cómo Aprovechar las Tecnologías Digitales para Innovar y Optimizar los Procesos", Recurso: "Video demostrativo del uso de la realidad virtual y aumentada.", Url: "https://youtu.be/PLpDCK3Zy7Q", Descripcion: "Vinculado a una actividad de lectura" },
]

const experts = [
    {Nombre:"ABPMP (Asociación de Profesionales de Procesos de Negocio)",Contacto:"abpmp.org.mx",Url:"http://abpmp.org.mx/",Descripcion:"Es una organización que busca promover y desarrollar la disciplina de gestión de procesos de negocio en América Latina."},
    {Nombre:"IIBA Capítulo Latinoamérica",Contacto:"Mexico City IIBA Chapter (ddi.com.mx)",Url:"https://www.ddi.com.mx/IIBA/",Descripcion:"Capítulo Latinoamericano del International Institute of Business Analysis (IIBA), que se enfoca en la gestión y mejora de procesos de negocio."},
    {Nombre:"Facultad de Ingeniera Universidad Panamericana",Contacto:"Claudia Arias Portela",Url:"mailto:cyarias@up.edu.mx ",Descripcion:"Profesora investigadora"},
]

const institutions = [
    {Nombre:"ISO (Organización Internacional de Normalización): Es una organización internacional que desarrolla y publica normas reconocidas a nivel mundial. La norma ISO 9001 se enfoca en la gestión de la calidad y establece requisitos para un sistema de gestión de calidad efectivo que puede ayudar a mejorar los procesos empresariales.",Url:"https://www.ioe-emp.org/es/organizaciones-internacionales/organizacion-internacional-para-la-normalizacion"}
]

const books = [
    {Autor:"Gómez, J.C. P.",Titulo:"Administración de procesos. Guía para el aprendizaje.",Subtitulo:"Pearson HispanoAmerica Contenido.",Url:"https://up.vitalsource.com/books/9786073240086"},
    {Autor:"Arango, C.A.B.T.H.D. S.",Titulo:"Proceso administrativo para las organizaciones del siglo XXI (3rd ed.). ",Subtitulo:"Pearson HispanoAmerica Contenido.",Url:"https://up.vitalsource.com/books/9789586994057"},
    {Autor:"Krajewski, L. J.",Titulo:"Administración de operaciones (10th ed.).",Subtitulo:"Pearson HispanoAmerica Contenido. ",Url:"https://up.vitalsource.com/books/9786073221221"},
]

const websites = [
    {Nombre:"ABPMP (Asociación de Profesionales de Procesos de Negocio)",Url:"https://www.abpmp.org/",Resumen:"El sitio web de ABPMP ofrece recursos, plantillas y guías relacionadas con la gestión de procesos de negocio. También puedes encontrar información sobre estándares y mejores prácticas en la disciplina."},
    {Nombre:"APQC (American Productivity & Quality Center)",Url:"https://www.apqc.org/",Resumen:"APQC es una organización sin fines de lucro que se enfoca en la mejora del rendimiento organizacional. En su sitio web, encontrarás herramientas, investigaciones y benchmarking relacionados con la gestión de procesos de negocio."},
    {Nombre:"BPM-LATAM",Url:"https://www.bpm-latam.org/",Resumen:"Es una comunidad en línea que busca conectar a profesionales y expertos en gestión de procesos de negocio en América Latina. El sitio web ofrece foros de discusión, recursos y eventos relacionados con BPM."},
    {Nombre:"IIBA (International Institute of Business Analysis)",Url:"https://www.iiba.org/",Resumen:"El sitio web de IIBA ofrece recursos y herramientas relacionadas con la gestión y análisis de negocios. Puedes encontrar información relevante para el estudio de procesos de negocio y la mejora de la eficiencia."},
    {Nombre:"BPM",Url:"https://www.bpm.com/",Resumen:"Es un sitio web enfocado en la gestión de procesos de negocio y ofrece artículos, noticias, casos de estudio y herramientas relacionadas con BPM. Puedes encontrar información útil para tu estudio de procesos."},
]


