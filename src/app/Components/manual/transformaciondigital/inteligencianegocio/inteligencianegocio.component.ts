import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-inteligencianegocio',
    templateUrl: './inteligencianegocio.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class InteligencianegocioComponent {
    public title: string = 'Inteligencia de negocio';
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
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=Pfi1kE2tYBs", Descripcion: "Tutorial de ayuda para construir un cuadro de control utilizando Excel", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=7UgU4Y_TWAU&t=612s", Descripcion: "Tutorial de ayuda para construir un cuadro de control utilizando Tableau", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=FQuojsVM5dM", Descripcion: "Tutorial de ayuda para construir un cuadro de control Power BI", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=XHIoVC-cUO0", Descripcion: "Tutorial de ayuda para construir un cuadro de control Data Studio", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Diseñar paneles y reportes", Recurso: "YouTube", Url: "https://www.youtube.com/watch?v=9afSH2-hTOc", Descripcion: "Tutorial de ayuda para construir un cuadro de control Smart sheet", Observaciones: "Caso práctico para creación de dashboard" },
    { Tema: "Selección de la herramienta de inteligencia de negocio adecuada", Recurso: "repository.upb.edu.co", Url: "https://repository.upb.edu.co/handle/20.500.11912/7695", Descripcion: "Documento donde se presentan elementos a considerar para la mejor selección de una plataforma de inteligencia de negocios", Observaciones: "Herramienta para toma de decisiones" },
    { Tema: "1.5 Pasos para implementar la Inteligencia de Negocio", Recurso: "www.itson.mx", Url: "https://www.itson.mx/oferta/mtin/SiteAssets/Paginas/productividad/Libro%20BI.pdf", Descripcion: "Casos prácticos para la implementación de herramientas de negocio en Pymes", Observaciones: "Referencias para la puesta implementar soluciones de inteligencia de negocio" },
    { Tema: "Paneles de control", Recurso: "Ejemplos de contenidos de paneles de control", Url: "", Descripcion: "Documento de consulta donde se sugieren algunos elementos para diferentes tópicos de cuadros de control", Observaciones: "Archivo anexo" },
    { Tema: "Estrategias y objetivos", Recurso: "Ejemplos de estrategias con objetivos y KPI’s definidos", Url: "", Descripcion: "Documento donde se sugieren estrategias con objetivos y KPIs", Observaciones: "Archivo anexo" }
]

const experts = [
    { Nombre: "BI LATAM", Contacto: "", Url: "https://www.bilatam.org/", Descripcion: "Es una comunidad que apoya a los interesados en aprender a explotar sus datos" },
    { Nombre: "Tableau", Contacto: "", Url: "https://www.tableau.com/es-es", Descripcion: "Es líder en la oferta de software de inteligencia de negocio" },
    { Nombre: "Modo digital ", Contacto: "", Url: "https://mododigital.uy", Descripcion: "Una plataforma apoyada por el BID que integra recursos y herramientas útiles para la transformación digital de las pymes. " },
    { Nombre: "Incubadora de empresas GERMINA", Contacto: "", Url: "https://onlineuniversity.ufg.edu.sv/i.germina.html", Descripcion: "Incubadora de empresas enfocadas en prestar servicios de TIC, tiene apoyo del Banco Mundial " },
    { Nombre: "Fundación Da Vinci Uruguay", Contacto: "", Url: "https://davinci.lat/", Descripcion: "Esta incubadora está dirigida a emprendimientos en etapas tempranas de desarrollo con soluciones validadas y que cuenten o con mérito innovador o valor diferencial." },
    { Nombre: "Incubar Colombia", Contacto: "", Url: "https://incubarcolombia.org.co/", Descripcion: "Incubar Colombia es una incubadora de empresas innovadoras de base tecnológica, especializada en proveer servicios integrales de emprendimiento y creación de empresa a nivel nacional, mediante el apoyo de iniciativas empresariales en fase de pre- incubación, incubación y fortalecimiento empresarial." },
]

const institutions = [
    { Nombre: "Antel Data Center", Descripcion: "Antel, la empresa estatal de telecomunicaciones de Uruguay, opera un Data Center que ofrece servicios de alojamiento, almacenamiento de datos y soluciones de tecnología que pueden ser relevantes para la analítica de datos.", Url: "https://portal.datacenterantel.uy/" },
    { Nombre: "Asociación CONEXIÓN al Desarrollo El Salvador", Descripcion: "Es una organización sin fines de lucro que promueve el buen uso y aplicación de las Tecnologías de la Información y Comunicación (TIC), contribuyendo a la reducción de la pobreza y facilitando el desarrollo empresarial.", Url: "https://www.conexion.sv/" },
    { Nombre: "Ministerio de Tecnologías de la Información y Comunicaciones de Colombia", Descripcion: "está encargado de las tecnologías de la información y la comunicación.", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Ministerio de Comercio, Industria y Turismo de Colombia", Descripcion: "encargado de las relaciones comerciales dentro del país.", Url: "https://www.mincit.gov.co/" },
    { Nombre: "Ministerio de Economía y Finanzas de la República Oriental del Uruguay", Descripcion: "Secretaría de estado encargada de la administración y fortalecimiento del comercio del Uruguay.", Url: "https://www.gub.uy/ministerio-economia-finanzas/" },
    { Nombre: "Dirección Nacional de Innovación, Ciencia y Tecnología Uruguay", Descripcion: "instancia de articulación y vinculación para el desarrollo de la ciencia y la tecnología de Uruguay", Url: "https://www.gub.uy/ministerio-educacion-cultura/direccion-innovacion-ciencia-tecnologia" },
    { Nombre: "Ministerio de Economía de El Salvador", Descripcion: "es la entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.", Url: "https://www.economia.gob.sv/" },
    { Nombre: "Ministerio de Educación, Ciencia y Tecnología de El Salvador", Descripcion: "encargado de elaborar Políticas orientadas al desarrollo tecnológico del país.", Url: "https://www.mined.gob.sv/" }
]

const words = [
    { Palabra: "Paneles o tableros de Control (Dashboard)", Significado: "Un tablero de control es una interfaz gráfica que muestra información clave de manera visual para facilitar la monitorización y toma de decisiones.", Fuente: "(Few, 2006)" },
    { Palabra: "Análisis de Datos", Significado: "En la Inteligencia de Negocio el análisis de datos implica examinar y evaluar conjuntos de datos para descubrir patrones, tendencias y relaciones que pueden ser útiles en la toma de decisiones.", Fuente: "(Hair, 2019)" },
    { Palabra: "Almacén de Datos (Data Warehouse)", Significado: "Un almacén de datos es una base de datos centralizada que guarda los datos de una organización para su posterior análisis y generación de informes.", Fuente: "(Inmon, 2003)" },
    { Palabra: "Minería de Datos (Data Mining)", Significado: "Se refiere al proceso de descubrir patrones ocultos y conocimiento útil en grandes conjuntos de datos.", Fuente: "(Han, 2011)" },
    { Palabra: "ETL (Extracción, Transformación y Carga)", Significado: "Se refiere al proceso de recopilación de datos desde múltiples fuentes, su transformación en un formato utilizable y su carga en un almacén de datos.", Fuente: "" },
    { Palabra: "Data mart", Significado: "Es un subconjunto de un almacén de datos (Data Warehouse) que se centra en un área específica de una organización, lo que facilita el acceso a datos relevantes para un grupo particular de usuarios. Los Data mart suelen estar diseñados para satisfacer las necesidades de un departamento o equipo específico.", Fuente: "(Kimball, 2008)" }

]

const books = [
    { Autor: "Haro Sarango, A., Carranza Guerrero, M.N., Pico Lescano, J.C., Naranjo Lozada, S.G. y Nuela Sevilla, R.M. (2023).", Titulo: "Inteligencia de negocios en las Pymes.", Subtitulo: "Casa Editora Del Polo." },
    { Autor: "Turban, E., Sharda, R., & Delen, D. (2019).", Titulo: "Business Intelligence: A Managerial Perspective on Analytics.", Subtitulo: "Pearson." },
    { Autor: "Davenport, T. H., Harris, J., & Shapiro, J. (2010).", Titulo: "Competing on Analytics: The New Science of Winning.", Subtitulo: "Harvard Business Press." },
    { Autor: "Vercellis, C. (2009).", Titulo: "Business Intelligence: Data Mining and Optimization for Decision Making.", Subtitulo: "Wiley." },
    { Autor: "Laudon, K. C., & Laudon, J. P. (2020).", Titulo: "Management Information Systems: Managing the Digital Firm.", Subtitulo: "Pearson." },
    { Autor: "Wixom, B. H., & Watson, H. J. (2010).", Titulo: "The BI-based organization.", Subtitulo: "International Journal of Business Intelligence Research, 1(1), 1-28." },
    { Autor: "Loshin, D. (2011).", Titulo: "Master Data Management.", Subtitulo: "Morgan Kaufmann." },
    { Autor: "Davenport, T. H. (2013).", Titulo: "Process innovation: Reengineering work through information technology.", Subtitulo: "Harvard Business Press." },
    { Autor: "Chen, H., Chiang, R. H. L., & Storey, V. C. (2012).", Titulo: "Business Intelligence and Analytics: From Big Data to Big Impact.", Subtitulo: "MIS Quarterly, 36(4), 1165-1188." },
    { Autor: "Alter, S. (2006).", Titulo: "The work system method: Connecting people, processes, and IT for business results.", Subtitulo: "Larkspur, CA: Work System Press." }

]

const websites = [
    { Nombre: "Cognodata (2023). Procesos ETL: cómo obtener valor de los datos", Descripcion:"", Url: "https://www.cognodata.com/blog/procesos-etl/" },
    { Nombre: "Comparativo práctico entre Tableau y Power BI de manera sencilla", Descripcion:"", Url: "https://www.youtube.com/watch?v=ePHMhLB6KGk" },
    { Nombre: "Galiana, P. (2022). 10 herramientas de Business Intelligence imprescindibles", Descripcion:"Publicado por IEBS Digital School." },
    { Nombre: "Kikabi Business. (2019). Caso de éxito Walmart aplicando la Inteligencia de Negocio.", Descripcion:"Youtube.", Url: "https://www.youtube.com/watch?v=KG8-OODKpuo" },
    { Nombre: "On data. (2021). ¿Se puede aplicar Business Intelligence en pymes?", Descripcion:"LinkedIn.", Url: "https://www.linkedin.com/pulse/se-puede-aplicar-business-intelligence-en-pymes-ondata-group/?originalSubdomain=es" }
]

