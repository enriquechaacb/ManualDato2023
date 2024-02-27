import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-ambientesdigitales',
    templateUrl: './ambientesdigitales.component.html',
    styleUrls: ['./../procesos.component.scss'],
    animations: [sectionsAnimation]
})
export class AmbientesdigitalesComponent {
    public title: string = 'Desarrollo de ambientes digitales';
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
    {Palabra:"Inteligencia Artificial", Significado:"La inteligencia artificial (IA) se refiere a la simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos. La IA permite a las máquinas aprender de la experiencia y realizar tareas que normalmente requerirían habilidades humanas, como el reconocimiento de voz, el aprendizaje automático y la toma de decisiones.", Fuente:""},
    {Palabra:"Big Data", Significado:"Definición: Big Data se refiere al gran volumen de datos que se generan y recopilan a gran velocidad de diferentes fuentes. Estos datos son complejos y masivos, lo que dificulta su análisis con herramientas tradicionales.", Fuente:""}
]
const tools = [
    { Tema: "Definición de modelo de negocio", Recurso: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Url: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Descripcion: "Vídeo acerca de cómo Netflix derrotó a Blockbuster.", Observaciones: "Video vinculado a una actividad" },
    { Tema: "Diseño de una propuesta de valor", Recurso: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Url: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Descripcion: "Video que explica la manera de elaborar una propuesta de valor utilizando el lienzo canvas", Observaciones: "Video explicativo de la propuesta de valor " },
    { Tema: "Ejemplo para gestión del cambio Modelo de 8 pasos de Kotter.", Recurso: "https://www.consuunt.es/modelo-de-8-pasos-de-kotter/", Url: "https://www.consuunt.es/modelo-de-8-pasos-de-kotter/", Descripcion: "Sitio web en el que se presenta el modelo de 8 pasos de Kotter, explicado y con ejemplos ", Observaciones: "Recurso útil para el tema de Gestión del Cambio" },
    { Tema: "Video reflexión para cambio en las personas ", Recurso: "https://www.youtube.com/watch?v=x0iRj8_9KhA", Url: "https://www.youtube.com/watch?v=x0iRj8_9KhA", Descripcion: "Video que habla sobre los obstáculos de hacer cambios en las personas", Observaciones: "Video útil para el tema de Gestión del Cambio" },
    { Tema: "Artículo de revista científica EFIM", Recurso: "Hoyos-Estrada, S., & Sastoque-Gómez, J. (2020). Marketing Digital como oportunidad de digitalización de las PYMES en Colombia en tiempo del Covid – 19. Revista Científica Anfibios, 3(1), 39-46. ", Url: "https://doi.org/10.37979/afb.2020v3n1.60", Descripcion: "El artículo expone los beneficios del uso de estrategias de marketing digital para la exploración de los mercados digitales, con el fin de salvaguardar la economía de Colombia, durante y después de la pandemia COVID-19.", Observaciones: "Texto que permite visualizar diversas soluciones digitales" },
    { Tema: "Artículo científico sobre modelos de madurez digital", Recurso: "Zorro Galindo, E. (2020). Modelos de madurez digital en pymes - Caso de estudio de una pyme de telecomunicaciones de Colombia.", Url: "https://repositorio.unal.edu.co/handle/unal/77419", Descripcion: "Artículo científico que expone diferentes modelos de madurez digital, estudio de caso en Colombia. ", Observaciones: "Texto útil para identificar áreas y procesos digitales " },
    { Tema: "Blog sobre cómo la empresa puede beneficiarse de la revolución digital", Recurso: "https://blog.wearedrew.co/como-puede-tu-empresa-beneficiarse-con-la-revolucion-digital", Url: "https://blog.wearedrew.co/como-puede-tu-empresa-beneficiarse-con-la-revolucion-digital", Descripcion: "El blog ofrece información relativa a cómo la digitalización permite a las empresas mejorar su desempeño, aumentar su productividad y acceder a nuevos mercados.", Observaciones: "Ofrece datos sobre la transformación digital y cómo una empresa puede beneficiarse con ello " },
    { Tema: "Texto de sitio web “Digitalización avanzada: ¿qué necesitas para alcanzarla?”", Recurso: "https://www.concur.co/blog/article/digitalizacion-avanzada", Url: "https://www.concur.co/blog/article/digitalizacion-avanzada", Descripcion: "Diferencias entre la transformación digital y la digitalización avanzada", Observaciones: "Información útil para el diseño de soluciones digitales" },
    { Tema: "Libro La Meta: un proceso de mejora continua por Eliyahu M. Goldratt", Recurso: "https://imagourbis.unq.edu.ar/uq_jaga/img/pdf/La_Meta.pdf", Url: "https://imagourbis.unq.edu.ar/uq_jaga/img/pdf/La_Meta.pdf", Descripcion: "El libro pretende mostrar y explicar un amplio espectro de fenómenos industriales. ", Observaciones: "Texto-novela importante para el tema de Gestión e implementación del Cambio" }
]

const experts = [
    {Nombre:"Andrés Silva Arancibia",Contacto:"https://andressilvaarancibia.com/",Url:"https://andressilvaarancibia.com/",Descripcion:"Experto en transformación digital y tecnologías emergentes en Latinoamérica."},
    {Nombre:"Silvina Moschini",Contacto:"https://silvinamoschini.com/es/",Url:"https://silvinamoschini.com/es/",Descripcion:"Referente en liderazgo y cambio organizacional en el ámbito digital. Gestión del Cambio y Capacitación"},
    {Nombre:"Claudia Arias Portela. Facultad de Ingeniera Universidad Panamericana",Contacto:"cyarias@up.edu.mx",Url:"mailto:cyarias@up.edu.mx",Descripcion:"Jefe de Academia del área de operaciones. Profesora Investigadora"},
    {Nombre:"Alexis Alvear Leyton",Contacto:"aalvearl@uc.cl",Url:"mailto:aalvearl@uc.cl",Descripcion:"Director ejecutivo de DATA UC Pontificia Universidad Católica de Chile"},
    {Nombre:"ABPMP (Asociación de Profesionales de Procesos de Negocio",Contacto:"http://abpmp.org.mx/",Url:"http://abpmp.org.mx/",Descripcion:"Es una organización que busca promover y desarrollar la disciplina de gestión de procesos de negocio en América Latina."},
    {Nombre:"Modo digital un programa de la ANDE apoyado por el BID",Contacto:"https://mododigital.uy/que-es-modo-digital/",Url:"https://mododigital.uy/que-es-modo-digital/",Descripcion:"Una plataforma que reúne información relevante para apoyar a las pymes de Uruguay y que tiene contacto con especialistas en diversidad de temáticas "},
    {Nombre:"Modo digital un programa de la ANDE apoyado por el BID",Contacto:"transformaciondigital@ande.org.uy",Url:"mailto:transformaciondigital@ande.org.uy",Descripcion:"Una plataforma que reúne información relevante para apoyar a las pymes de Uruguay y que tiene contacto con especialistas en diversidad de temáticas "}
]

const institutions = [
    {Nombre:"Consejo Nacional de Política Económica y Social, CONPES",Url:"https://2022.dnp.gov.co/CONPES"},
    {Nombre:"Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia",Url:"https://www.mintic.gov.co/portal/inicio/"},
    {Nombre:"Ministerio de Economía de El Salvador",Url:"https://www.economia.gob.sv/"},
    {Nombre:"ANDE - Agencia Nacional de Desarrollo",Url:"https://www.ande.org.uy"},
]

const books = [
    {Autor:"Herbert, L. (2017).",Titulo:"Digital transformation: Build Your Organization’s Future for the Innovation Age.",Subtitulo:"Bloomsbury Publishing.",Url:""},
    {Autor:"Van Der Pijl, P., Lokitz, J., & Solomon, L. K. (2016).",Titulo:"Design a better business: New Tools, Skills, and Mindset for Strategy and Innovation. ",Subtitulo:"John Wiley & Sons.",Url:""},
    {Autor:"The Fourth Industrial Revolution, by Klaus Schwab. (s. f.).",Titulo:"World Economic Forum.",Subtitulo:"",Url:"https://www.weforum.org/about/the-fourth-industrial-revolution-by-klaus-schwab"}
]

const websites = [
    {Nombre:"Harvard Business Review",Url:"https://hbr.org/",Resumen:"Harvard Business Review es una prestigiosa revista académica que ofrece artículos y casos de estudio sobre temas de negocios, incluida la transformación digital. En su sitio web, puedes encontrar contenido relacionado con los conceptos básicos de la transformación digital, las tendencias actuales y el impacto en las organizaciones."},
    {Nombre:"MindTools",Url:"https://www.mindtools.com/",Resumen:"MindTools es una plataforma en línea que proporciona herramientas y recursos para el desarrollo personal y profesional. En su sitio web, puedes encontrar información sobre cómo identificar necesidades, definir objetivos claros y alinear los procesos digitales con los objetivos estratégicos de la organización."},
    {Nombre:"Gartner",Url:"https://www.gartner.com/",Resumen:"Gartner es una firma de investigación y asesoramiento tecnológico conocida por su análisis y cuadrantes mágicos. En su sitio web, encontrarás informes y evaluaciones de tecnologías digitales, herramientas de automatización y soluciones para la gestión de ambientes digitales."},
    {Nombre:"McKinsey & Company",Url:"https://www.mckinsey.com/",Resumen:"McKinsey & Company es una firma de consultoría global que proporciona investigaciones y análisis sobre diversos temas empresariales. En su sitio web, puedes encontrar artículos y estudios de casos relacionados con la identificación de áreas y procesos digitales en el negocio."},
    {Nombre:"Forbes",Url:"https://www.forbes.com/",Resumen:"Forbes es una revista y sitio web de negocios y finanzas que cubre una amplia gama de temas empresariales, incluida la transformación digital. En su sitio web, encontrarás contenido sobre la planificación estratégica para la transformación digital y ejemplos de soluciones digitales exitosas."},
    {Nombre:"CIO Magazine",Url:"https://www.cio.com/",Resumen:"CIO Magazine es una revista y sitio web dirigido a líderes de tecnología y negocios. En su sitio web, encontrarás artículos y recursos relacionados con estrategias de implementación de ambientes digitales, gestión del cambio y medición del impacto de la transformación digital."}
]

