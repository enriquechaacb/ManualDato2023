import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologiasyherramientas.component.html',
  styleUrls: ['../habilidadesdigitales.component.scss'],
  animations: [sectionsAnimation]
})
export class TecnologiasComponent {
  public title: string = 'Tecnologías digitales y herramientas habilitadoras';
  public subtitle: string = 'Tecnologías y habilidades digitales';
  public Seccion: string;
    public Secciones: Array<any>;
    public Beneficios: any = beneficios;
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
        const palabras = [178,179,138,139,135,113,134,54];
        const expertos = [21,45];
        const instituciones = [30,31,32,33];
        const literatura = [103,104,105];
        const websites = [76,73,74,75];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }

}
const tools = [
    { Tema: "ITEC - Educación en tiempo real", Recurso: "Curso de Ofimática profesional", Url: "https://www.youtube.com/watch?v=3jVo_ZTaPCY&t=2396s", Descripcion: "Presenta varias sesiones para aprender la ofimática de una manera profesional." },
    { Tema: "Google", Recurso: "Herramientas de Google para Pymes", Url: "https://www.youtube.com/watch?v=zIB8UbjUV8g", Descripcion: "Ministerio de Economía Gobierno de Chile" },
    { Tema: "Impresora 3D", Recurso: "¿Es para todos? fácil ¿si o no?", Url: "https://www.youtube.com/watch?v=kIkXU_vU-mI", Descripcion: "Suricatamike explica los usos de la impresión 3D" },
    { Tema: "Tinkercad", Recurso: "Dando volumen a las ideas", Url: "https://intef.es/observatorio_tecno/tinkercad-dando-volumen-a-las-ideas/", Descripcion: "Óscar Costa del INTEF, explica en su colaboración con el Observatorio de tecnología educativa, algunos usos de la herramienta Tinkercad, que permite crear modelos tridimensionales sin mucha complicación." },
    { Tema: "Google", Recurso: "Curso de Google Analytics para principiantes", Url: "https://analytics.google.com/analytics/academy/course/6?hl=es-419", Descripcion: "El curso de Google Analytics para principiantes enseña a los nuevos usuarios a crear una cuenta, implementar un código de seguimiento y configurar filtros de datos." },
    { Tema: "Scribus", Recurso: "Maquetando con software libre", Url: "https://intef.es/observatorio_tecno/scribus-maquetando-con-software-libre/", Descripcion: "Stella Carrera Cuadrado, autora de este artículo publicado por el Observatorio de tecnología educativa presenta en este espacio los usos y aplicaciones de la herramienta." },
    { Tema: "Blockchain", Recurso: "Usos poco conocidos", Url: "https://www.youtube.com/watch?v=9wbnhwR0bR0", Descripcion: "El video presenta cómo funciona la cadena de bloques conocida como Blockchain y los usos poco conocidos en Latinoamérica." },
    { Tema: "Blockchain", Recurso: "Aplicaciones y uso del Blockchain en la cadena de suministros", Url: "https://www.youtube.com/watch?v=LudgJlHg7Zw", Descripcion: "Rankia. En la conferencia de Carlos Callejo de Blockimpulse muestra una de las aplicaciones que se está desarrollando en España con blockchain. ¿Qué es blockchain en cadena de suministro? ¿Cómo se utiliza el blockchain en la logística? ¿Qué función cumple cadena de suministro? ¿Qué empresas tienen cadena de suministro?" },
    { Tema: "Matemáticas y algoritmos", Recurso: "Charla del Observatorio Vodafone de la Empresa con Efim Zelmanov", Url: "https://www.youtube.com/watch?v=5hlAOaCH3Yw", Descripcion: "Más allá de los algoritmos, las matemáticas están presentes en el ámbito empresarial de múltiples maneras: criptografía y ciberseguridad o analítica de datos y Big Data son algunos de ellos. " },
    { Tema: "IoT", Recurso: "Ep. 16 Internet de las cosas o IoT", Url: "https://www.youtube.com/watch?v=gEHLhr8r0y0", Descripcion: "Agenda Prospectiva. En el Podcast se habla del internet de las cosas o IoT" },
    { Tema: "Big Data", Recurso: "7 ejemplos reales y casos de éxito de Big Data", Url: "https://www.youtube.com/watch?v=59b0rINnBuU", Descripcion: "Cyberclick ofrece 7 ejemplos de marcas que ya están usando el big data" },
    { Tema: "Platzi", Recurso: "Platzi", Url: "https://platzi.com/", Descripcion: "Una plataforma de cursos en línea (no gratuitos) pero ofrece un catálogo muy amplio y variado en temáticas útiles a las pymes." },

]

const beneficios = [
    {titulo:'Reducción de costos', texto:'Ahorro en tiempo y recursos gracias a la automatización. Disminución de gastos en papelería, impresión y otros materiales. Optimización de la gestión de inventario y logística.'},
    {titulo:'Mejora en la atención al cliente', texto:'Comunicación más rápida y efectiva con los clientes. Personalización de la experiencia del cliente. Oportunidad de ofrecer nuevos canales de atención (chatbots, redes sociales).'},
    {titulo:'Expansión del mercado', texto:'Acceso a nuevos clientes a través de internet y redes sociales. Posibilidad de vender productos o servicios a nivel nacional e internacional. Mayor visibilidad y alcance de la marca.'},
    {titulo:'Generación de nuevas oportunidades', texto:'Desarrollo de nuevos productos y servicios digitales. Implementación de estrategias de marketing digital. Participación en plataformas de comercio electrónico.'}
]

















