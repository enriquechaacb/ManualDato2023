import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-introduccion',
    templateUrl: './introduccion.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class IntroduccionComponent {
    public title: string = 'Introducción a la transformación digital';
    public subtitle: string = 'Estrategia y transformación digital';
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
    { Nombre: "Literatura sugerida y sitios web", Valor: "Literatura", Activo: true },
    { Nombre: "Sitios web", Valor: "WebSites", Activo: false },
    { Nombre: "Casos de éxito", Valor: "Casos", Activo: false },
    { Nombre: "E-book", Valor: "analitica_de_datos", Activo: true, EsExterno: true }
]

const tools = [
    { Tema: "1.2. Adoptando la transformación digital", Recurso: "", Url: "https://www.youtube.com/watch?v=wHRWJPvMdwA&list=RDLVSy-MaezAyEQ&index=2", Descripcion: "Vídeo descriptivo", Observaciones: "Amplia conceptos revisados en el texto" },
    { Tema: "1.2.1 Herramientas", Recurso: "", Url: "https://www.youtube.com/watch?v=drlT9DAtTHA", Descripcion: "Video donde se explica que es Big Data y cómo funciona", Observaciones: "Amplia conceptos revisados en el texto" },
    { Tema: "1.2.2 Estrategia y Herramientas", Recurso: "", Url: "https://resources.esmartia.com/blog/como-la-inteligencia-artificial-esta-transformando-el-marketing", Descripcion: "Blog como la inteligencia artificial está transformando el marketing", Observaciones: "Explicación complementaria" },
    { Tema: "1.2.2 Estrategia y Herramientas", Recurso: "", Url: "https://www.youtube.com/watch?v=EvHSoedDfUI", Descripcion: "Video que explica como utilizar ChatGPT para principiantes", Observaciones: "Explicación complementaria" },
    { Tema: "1.2.2 Estrategia y Herramientas", Recurso: "", Url: "https://www.chequeodigital.cl/", Descripcion: "Revisión del grado de madurez de la empresa", Observaciones: "Herramienta del BID" },
    { Tema: "", Recurso: "Formato anexo. Lista de comparación de elementos del software", Url: "", Descripcion: "Archivo de Excel que permite comparar herramientas de software a fin de elegir la que ofrezca mejores ventajas competitivas, considerando sus necesidades reales y el presupuesto disponible.", Observaciones: "Formato anexo " },
    { Tema: "", Recurso: "Formato para definir objetivos SMART", Url: "", Descripcion: "Plantilla de referencia para establecer objetivos SMART: Específico, medible, alcanzable, realista, temporalmente definido.", Observaciones: "Documento anexo" }
]

const experts = [
    { Nombre: "Modo digital", Contacto: "", Url: "https://mododigital.uy", Descripcion: "Una plataforma apoyada por el BID que integra recursos y herramientas útiles para la transformación digital de las pymes." },
{ Nombre: "Incubadora de empresas GERMINA", Contacto: "", Url: "https://onlineuniversity.ufg.edu.sv/i.germina.html", Descripcion: "Incubadora de empresas enfocadas en prestar servicios de TIC, tiene apoyo del Banco Mundial " },
{ Nombre: "Fundación Da Vinci Uruguay", Contacto: "", Url: "https://davinci.lat/", Descripcion: "Esta incubadora está dirigida a emprendimientos en etapas tempranas de desarrollo con soluciones validadas y que cuenten o con mérito innovador o valor diferencial." },
{ Nombre: "Incubar Colombia", Contacto: "", Url: "https://incubarcolombia.org.co/", Descripcion: "Incubar Colombia es una incubadora de empresas innovadoras de base tecnológica, especializada en proveer servicios integrales de emprendimiento y creación de empresa a nivel nacional, mediante el apoyo de iniciativas empresariales en fase de pre- incubación, incubación y fortalecimiento empresarial." },
{ Nombre: "InQlab Colombia", Contacto: "Paula Barrientos Managing partner", Url: "mailto:pbarrientos@inqlab.co", Descripcion: "InQlab se funda en el 2013 como una incubadora que apoya e invierte en proyectos de empresas disruptivas." }
]

const institutions = [
    { Nombre: "Ministerio de Tecnologías de la Información y Comunicaciones de Colombia, está encargado de las tecnologías de la información y la comunicación.", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Ministerio de Comercio, Industria y Turismo de Colombia, encargado de las relaciones comerciales dentro del país.", Url: "https://www.mincit.gov.co/" },
    { Nombre: "Ministerio de Economía y Finanzas de la República Oriental del Uruguay, Secretaría de estado encargada de la administración y fortalecimiento del comercio del Uruguay.", Url: "https://www.gub.uy/ministerio-economia-finanzas/" },
    { Nombre: "Dirección Nacional de Innovación, Ciencia y Tecnología Uruguay, instancia de articulación y vinculación para el desarrollo de la ciencia y la tecnología de Uruguay", Url: "https://www.gub.uy/ministerio-educacion-cultura/direccion-innovacion-ciencia-tecnologia" },
    { Nombre: "Ministerio de Economía de El Salvador es la entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.", Url: "https://www.economia.gob.sv/" },
    { Nombre: "Ministerio de Educación, Ciencia y Tecnología de El Salvador, encargado de elaborar Políticas orientadas al desarrollo tecnológico del país.", Url: "https://www.mined.gob.sv/" }
]

const words = [
    { Palabra: "Chatbot", Significado: "Conocidos también como bot de charla o bot conversacional hace referencia a aplicaciones de software que surgen en los años 60, y que simulan mantener una conversación con una persona al proveer respuestas automáticas.", Fuente: "" },
    { Palabra: "Código Abierto", Significado: "Es un modelo de desarrollo de software basado en la colaboración abierta. Se enfoca en los beneficios prácticos (acceso al código fuente) y en cuestiones éticas o de libertad que tanto se destacan en el software libre.", Fuente: "" },
    { Palabra: "Software libre", Significado: "Es un software cuyo código fuente puede ser estudiado, modificado, y utilizado libremente con cualquier finalidad y redistribuido con cambios o mejoras sobre él.", Fuente: "" },
    { Palabra: "Usabilidad", Significado: "Se refiere a la facilidad con que las personas pueden utilizar una herramienta particular o cualquier otro objeto fabricado por humanos con el fin de alcanzar un objetivo concreto. ", Fuente: "" },
]

const books = [
    { Autor: "Albert, T. (2016).", Titulo: "Medición de la madurez de la tecnología: aspectos teóricos.", Subtitulo: "Springer.", Url: "https://www.mincotur.gob.es/Publicaciones/Publicacionesperiodicas/EconomiaIndustrial/RevistaEconomiaIndustrial/393/NOTAS.pdf" },
    { Autor: "Woerner, S. L.; Weill, P., & Sebastian I. M. (2022).", Titulo: "Preparados para el futuro: los cuatro caminos para capturar valor digital.", Subtitulo: "Harvard Business Review Press." },
    { Autor: "Dini, M., Gligo, N. y Patiño, A. (2021).", Titulo: "Transformación digital de las mipymes: elementos para el diseño de políticas.", Subtitulo: "Documentos de Proyectos (LC/TS.2021/99), Santiago, Comisión Económica para América Latina y el Caribe (CEPAL).", Url: "https://repositorio.cepal.org/items/6692334e-4433-445e-ad2f-6fc5baa5b0d8" },
    { Autor: "Rogers, D. (2021).", Titulo: "Guía Estratégica para la Transformación Digital: Reinventa tu negocio para la era digital.", Subtitulo: "Urano." },
    { Autor: "Furr, N., Shipilov, A., Rouillard, D., & Hemon-Laurens, A. (2022).", Titulo: "The 4 Pillars of Successful Digital Transformations.", Subtitulo: "Harvard Business Review.", Url: "https://hbr.org/2022/01/the-4-pillars-of-successful-digital-transformations?ab=at_art_art_1x4_s01" },
    { Autor: "Suárez Blanco, M. (2020).", Titulo: "Las pequeñas y medianas empresas de la era digital.", Subtitulo: "Revista de Desarrollo Sustentable, Negocios, Emprendimiento y Educación RILCO DS.", Url: "https://www.eumed.net/rev/rilcoDS/07/era-digital-empresas.html" }
]

const websites = [
    { Nombre: "Infografía sobre el estado de la transformación tecnológica en las pymes de Uruguay", Url: "https://news.microsoft.com/wp-content/uploads/prod/sites/41/2023/03/SMB-STUDY-2023-UY-scaled.jpg" },
    { Nombre: "Estado de la transformación tecnológica en Colombia", Url: "https://blog.lemontech.com/transformacion-digital-colombia/" },
    { Nombre: "Transformación digital para El Salvador impulsadas por el Banco Mundial", Url: "https://www.bancomundial.org/es/news/video/2022/10/03/digital-transformation-in-latin-america-el-salvador" },
    { Nombre: "La importancia de la transformación digital, un reto para las empresas colombianas -El espectador-", Url: "https://www.youtube.com/watch?v=C7AfhpYcNVE" }
]