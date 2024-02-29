import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

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
    public Experts: any = experts;
    public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public Websites: any = websites;
    public Breadcrumbs: any = [
        { Nombre: "BiblioSmart", Url: "../../../" },
        { Nombre: this.subtitle, Url: "../../" },
        { Nombre: this.title, Url: "../Introduccion" }
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
    { Palabra: "Algoritmo", Significado: "Conjunto de operaciones y decisiones que, a partir de unas reglas determinadas, da como resultado un producto", Fuente: "(Llamas, 2022)." },
    { Palabra: "Cliente", Significado: "Hace referencia a una persona o entidad que adquiere bienes o servicios de una empresa. Pueden ser individuos (consumidores) o empresas (clientes corporativos) quienes se convierten en el centro de cualquier negocio al ser generadores de los ingresos que una empresa requiere para operar o crecer.", Fuente: "" },
    { Palabra: "Contenido", Significado: "Alude a información o mensajes diseñados previamente para el logro de objetivos de marketing, comunicación o publicidad, cuyo sistema de distribución está basado en Internet y su formato es muy amplio, ya que estos contenidos pueden transmitirse mediante imágenes, videos, audios, entre otros.", Fuente: "(DesarrolloWeb.com, s. f.)." },
    { Palabra: "Demanda", Significado: "Establece el volumen o la cantidad que está dispuesto a comprar un grupo de clientes, dentro de un periodo de tiempo, en un área geográfica y en un ambiente definido", Fuente: "(Quiroa, 2022)." },
    { Palabra: "Estrategia de negocios en la era digital", Significado: "Alude al diseño de un plan que define como una pyme aprovecha las oportunidades y resuelve los desafíos que se le presentan en el entorno digital, todo ello dirigido al logro de sus objetivos de crecimiento, competitividad y rentabilidad.", Fuente: "" },
    { Palabra: "Motores de búsqueda", Significado: "Sistemas informáticos que recopilan toda la información que está almacenada en los servidores web, y generan resultados en forma de enlaces que den respuesta a las búsquedas", Fuente: "(Cardona, 2021)." },
    { Palabra: "Nicho de mercado", Significado: "Se refiere a una porción específica y claramente definida del mercado que es única y diferenciada de segmentos del mercado más amplios. Al centrarse en un nicho de mercado las pymes pueden ofrecer productos o servicios especializados encaminados a satisfacer las necesidades particulares de ese grupo específico de consumidores.", Fuente: "" },
    { Palabra: "Palabra clave", Significado: "Son palabras y frases que los usuarios escriben en los buscadores para encontrar información sobre un tema concreto", Fuente: "(Harsel, 2023). " },
    { Palabra: "Rastreador de Google", Significado: "El rastreador principal de Google es el robot de Google, un programa que se utiliza para encontrar y analizar automáticamente sitios web siguiendo enlaces entre páginas web", Fuente: "(Google for Developers, s. f.)." },
    { Palabra: "Segmentar el mercado", Significado: "Alude a hacer pequeños grupos de clientes con características, necesidades, preferencias o comportamientos similares o comunes. La segmentación permite a las pymes enfocarse de manera más efectiva en las necesidades específicas de un grupo de consumidores. ", Fuente: "" },
    { Palabra: "SEO Search Engine Optimization", Significado: "(SEO por sus siglas en inglés), se refiere a las prácticas y técnicas utilizadas para mejorar la visibilidad y el posicionamiento de un sitio web en los resultados de búsqueda orgánica de motores como Google y Bing entre otros.", Fuente: "" },
    { Palabra: "Servicio al cliente", Significado: "Es el conjunto de acciones enfocadas en mejorar la experiencia de un cliente, con la cual se establece un proceso para resolver cualquier desafío, duda o problema del cliente de manera inmediata y efectiva", Fuente: "(Moreno, 2023)." }
]
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

const experts = [
    { Nombre: "Miguel Ángel Escobar Chávez", Contacto: "mailto:boris@lifeonmars.com.mx", Url: "mailto:boris@lifeonmars.com.mx", Descripcion: "https://www.linkedin.com/in/miguel-escobar-boris Especialista en marketing digital" },
    { Nombre: "Sandra Nópal Rivera", Contacto: "san@lifeonmars.com.mx", Url: "mailto:san@lifeonmars.com.mx", Descripcion: "https://www.linkedin.com/in/sangelle Especialista en el diseño de estrategias digitales" },
    { Nombre: "Felipe Stein", Contacto: "mailto:pipe@notable.com.uy ", Url: "mailto:pipe@notable.com.uy", Descripcion: "https://www.linkedin.com/in/pipe-stein-4b03a8169 Uno de los especialistas líderes en campañas de publicidad digital de Uruguay" }
]

const institutions = [
    {Nombre:"Ministerio de Trabajo y Previsión Social, Gobierno de El Salvador. Instancia rectora de velar por la armonía en las relaciones obrero-patronales. Responsable de formular, ejecutar y supervisar la política sociolaboral del país.",Url:"https://www.mtps.gob.sv/"},
    {Nombre:"Ministerio de Economía de El Salvador es la entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.",Url:"https://www.economia.gob.sv/"},
    {Nombre:"Ministerio de Educación, Ciencia y Tecnología de El Salvador, encargado de elaborar Políticas orientadas al desarrollo tecnológico del país.",Url:"https://www.mined.gob.sv/"},
    {Nombre:"Ministerio  del Trabajo en Colombia, responsable de promover el empleo digno, proteger los derechos de los colombianos en capacidad de trabajar, construir más y mejores empresas, fomentar la calidad del talento humano y convertir el trabajo como eje del desarrollo humano.",Url:"https://www.mintrabajo.gov.co/web/guest/inicio"},
    {Nombre:"Ministerio de Tecnologías de la Información y Comunicaciones de Colombia, está encargado de las tecnologías de la información y la comunicación.",Url:"https://www.mintic.gov.co/portal/inicio/"},
    {Nombre:"Ministerio de Trabajo y Seguridad Social en Uruguay. Institución rectora en el diseño, implementación y evaluación de las políticas de empleo, formación profesional, relaciones laborales y seguridad social a nivel nacional. Promueve el diálogo social, trabajo decente y la cultura del trabajo. ",Url:"https://www.gub.uy/ministerio-trabajo-seguridad-social/"},
    {Nombre:"Dirección Nacional de Innovación, Ciencia y Tecnología Uruguay, instancia de articulación y vinculación para el desarrollo de la ciencia y la tecnología de Uruguay",Url:"https://www.gub.uy/ministerio-educacion-cultura/direccion-innovacion-ciencia-tecnologia"},
    {Nombre:"Organización Internacional del Trabajo (OIT). Es la instancia tripartita de la ONU que reúne a gobiernos, empleadores y trabajadores para establecer normas de trabajo, formular políticas y elaborar programas promoviendo el trabajo de todos mujeres y hombres. ",Url:"https://www.ilo.org/global/lang--es/index.htm"},
]

const books = [
    { Autor: "Kotler, P., & Keller, K. (2012).", Titulo: "Dirección de Marketing.", Subtitulo: "(A. Mues Z., & M. Martínez G., Trads.) México: Pearson Educación.", Url: "https://www.montartuempresa.com/wp-content/uploads/2016/01/direccion-de-marketing-14edi-kotler1.pdf" }
]

const websites = [
    { Nombre: "WordPress: Es una herramienta gestora de contenidos, esto quiere decir que es una herramienta para administrar tu sitio web, y es probablemente la más usada y la mejor en el mercado, y hay planes para todos, des la versión gratis hasta versiones para grandes empresas.", Url: "https://wordpress.com/es/" },
    { Nombre: "Google analytics: Es la herramienta de Google que te permite monitorear la actividad de tus clientes en Internet. Permite analizar tus datos y predecir las acciones que los clientes pueden realizar.", Url: "https://marketingplatform.google.com/about/analytics/" },
    { Nombre: "PageSpeed Insights: ¿Quieres hacerle una auditoría de rendimiento a tu página web? PageSpeed Insights es la alternativa para ello, de manera sencilla, rápida y gratuita te informa aquellos aspectos de mejora para tu página web.", Url: "https://pagespeed.web.dev/" },
    { Nombre: "SEM Rush: Semrush es una herramienta de investigación de palabras clave, Google Trends, Moz, Hootsuite y SimilarWeb, todo en un solo lugar.", Url: "https://es.semrush.com/" },
    { Nombre: "Hubspot: El blog de Hubspot tiene muchos recursos disponibles relacionados con el marketing digital", Url: "https://blog.hubspot.es/marketing/tipos-de-promocion" }
]



