import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-modelosdenegocio',
    templateUrl: './modelosdenegocio.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class ModelosdenegocioComponent {
    public title: string = 'Modelos de negocio';
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
    { Nombre: "Literatura sugerida", Valor: "Literatura", Activo: true },
    { Nombre: "Sitios web", Valor: "WebSites", Activo: true },
    { Nombre: "Casos de éxito", Valor: "Casos", Activo: false },
    { Nombre: "E-book", Valor: "analitica_de_datos", Activo: true, EsExterno: true }
]

const tools = [
    { Tema: "1.1. Definición de modelo de negocio", Recurso: "", Url: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Descripcion: "Video acerca de cómo Netflix derrotó a Blockbuster.", Observaciones: "Video vinculado a una actividad" },
    { Tema: "1.2 Las necesidades de los clientes", Recurso: "", Url: "https://www.youtube.com/watch?v=BgiRwlyXnxQ", Descripcion: "Vídeo acerca de las necesidades de los clientes y cómo se diseñan estrategias a partir de identificar dichas necesidades", Observaciones: "Video vinculado a una actividad" },
    { Tema: "1.2 Las necesidades de los clientes", Recurso: "Formato para definir una estrategia de acuerdo con las necesidades del cliente.docx", Url: "", Descripcion: "Formato que permite definir una estrategia comercial habiendo definido las necesidades de los clientes", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.3. Diseño de una propuesta de valor", Recurso: "", Url: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Descripcion: "Video que explica la manera de elaborar una propuesta de valor utilizando el lienzo Canvas", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.3. Diseño de una propuesta de valor", Recurso: "Formato para comparar con el mercado.docx", Url: "", Descripcion: "Formato que permite identificar las características comunes y diferencias entre los productos o servicios de los competidores y los de la empresa.", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.3. Diseño de una propuesta de valor", Recurso: "Formato para definir propuesta de valor.docx", Url: "", Descripcion: "Formato que permite construir una propuesta de valor consistente con las necesidades del cliente.", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.4 Diseño del modelo de negocio", Recurso: "Formato para definir un modelo de negocio", Url: "", Descripcion: "Formato que facilita el diseño de un modelo de negocio.", Observaciones: "Formato para caja de herramientas" },
    { Tema: "1.4 Diseño del modelo de negocio", Recurso: "", Url: "https://www.youtube.com/watch?v=1TGDFWptFM0", Descripcion: "Vídeo que permite ver la manera en la que el modelo de negocio se articula con la propuesta de valor.", Observaciones: "Video informativo." },
    { Tema: "1.4 Diseño del modelo de negocio", Recurso: "", Url: "https://www.youtube.com/watch?v=OnvW8vbM02U", Descripcion: "Video que explica el uso de la metodología canvas para un modelo de negocio.", Observaciones: "Video vinculado a una actividad" },
    { Tema: "1.5 Tipos de modelo de negocio", Recurso: "Podcast tipos de modelo de negocio", Url: "", Descripcion: "Audio en el que se explica de manera detallada los tipos de modelos de negocio que existen en Internet", Observaciones: "Audio informativo" }
]

const experts = [
    { Nombre: "Centro de Innovación y Desarrollo Emprendedor (CIDE) de la Pontificia Universidad Católica del Perú", Contacto: "", Url: "https://cide.pucp.edu.pe/", Descripcion: "Desde el 1995, el Centro de Innovación y Desarrollo Emprendedor (CIDE) de la Pontificia Universidad Católica del Perú (PUCP) transforma emprendedores en empresarios y promueve una cultura emprendedora dentro y fuera de su comunidad universitaria" },
    { Nombre: "Ingenio Uruguay", Contacto: "", Url: "https://ingenio.org.uy/", Descripcion: "Es la incubadora de empresas del LATU (Laboratorio Tecnológico del Uruguay), ubicada dentro de su Parque Tecnológico y de Eventos. Fundada en el año 2001, es la primera incubadora del país. Apoya a emprendedores con proyectos de base tecnológica, para que al finalizar el proceso de incubación sean empresas innovadoras, rentables y escalables." },
    { Nombre: "Fundación Da Vinci Uruguay", Contacto: "", Url: "https://davinci.lat/", Descripcion: "Esta incubadora está dirigida a emprendimientos en etapas tempranas de desarrollo con soluciones validadas y que cuenten o con mérito innovador o valor diferencial." },
    { Nombre: "Incubar Colombia", Contacto: "", Url: "https://incubarcolombia.org.co/", Descripcion: "Incubar Colombia es una Incubadora de Empresas innovadoras de Base Tecnológica, especializada en proveer servicios integrales de Emprendimiento y creación de empresa a nivel nacional, mediante el apoyo de iniciativas empresariales en fase de PRE- INCUBACIÓN, INCUBACIÓN y Fortalecimiento Empresarial." },
    { Nombre: "InQlab Colombia", Contacto: "Paula Barrientos Managing partner", Url: "mailto:pbarrientos@inqlab.co", Descripcion: "InQlab se funda en el 2013 como una incubadora que apoya e invierte en proyectos de empresas disruptivas." }
]

const institutions = [
    { Nombre: "Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Cámara de Comercio de Cali, en Colombia ", Url: "https://www.ccc.org.co" },
    { Nombre: "Ministerio de Economía de El Salvador ", Url: "https://www.economia.gob.sv/" },
    { Nombre: "SNBX. Primer Hub de Innovación de El Salvador ", Url: "https://snbx.sv" },
    { Nombre: "ANDE - Agencia Nacional de Desarrollo ", Url: "https://www.ande.org.uy" },
    { Nombre: "Modo Digital, programa de impulso a las pymes en Uruguay", Url: "https://mododigital.uy" }
]

const words = [
    { Palabra: "Modelo de negocio", Significado: "es la definición de negocio que describe las bases sobre las que una empresa crea, proporciona y capta valor", Fuente: "(Osterwalder & Pigneur, Generación de modelos de negocio: Un manual para visionarios, revolucionarios y retadores, 2010)." },
    { Palabra: "Propuesta de valor", Significado: "Factor que hace que un cliente se decante por una u otra empresa; su finalidad es solucionar un problema o satisfacer una necesidad del cliente. Las propuestas de valor son un conjunto de productos o servicios que satisfacen los requisitos de un segmento de mercado determinado.", Fuente: "(Osterwalder & Pigneur, Generación de modelos de negocio: Un manual para visionarios, revolucionarios y retadores, 2010)." },
    { Palabra: "Segmento de mercado", Significado: "Es el grupo de personas o entidades a los que se dirigen los esfuerzos comerciales o de negocio de una empresa", Fuente: "(Osterwalder & Pigneur, Generación de modelos de negocio: Un manual para visionarios, revolucionarios y retadores, 2010)." },
    { Palabra: "Aliados clave", Significado: "Es la red de proveedores y socios que contribuyen al funcionamiento de un modelo de negocio ", Fuente: "(Osterwalder & Pigneur, Generación de modelos de negocio: Un manual para visionarios, revolucionarios y retadores, 2010)." },
    { Palabra: "Costos", Significado: "El costo es un concepto esencialmente monetario; expresa y mide en dinero la gestión desarrollada por el empresario para producir una unidad de cierto bien o servicio. Se refiere al consumo de recursos utilizados para generar un producto o servicio", Fuente: " (Corporación Nacional Forestal, 2015)." },
    { Palabra: "Monetización", Significado: "La monetización es el proceso de convertir algo en dinero o moneda legal. Puede referirse a vender un producto por dinero en efectivo, cobrar por un artículo que previamente ha sido gratuito, aumentar la rentabilidad de un artículo o vender un bono para obtener efectivo ", Fuente: "(Spiegato, 2023)." },
    { Palabra: "Canvas", Significado: "Herramienta gráfica que permite y contribuye al diseño e incorporación de todos los elementos que debe tener un modelo de negocio para su lectura y comprensión."}
]

const books = [
    { Autor: "Dosdoce.com. (2014).", Titulo: "Nuevos modelos de negocio en la era digital.", Subtitulo: "España: CEDRO.", Url: "http://www.dosdoce.com/upload/ficheros/noticias/201409/modelos_de_negocio_pdf.pdf" },
    { Autor: "Maslow, A. (1954).", Titulo: "Motivación y personalidad.", Subtitulo: "Madrid: Ediciones Díaz de Santos, S. A.", Url: "https://batalloso.com/wp-content/uploads/2021/09/Maslow-Abraham-Motivacion-Y-Personalidad.pdf" },
    { Autor: "Osterwalder, A., & Pigneur, Y. (2010).", Titulo: "Generación de modelos de negocio: Un manual para visionarios, revolucionarios y retadores.", Subtitulo: "Barcelona: Deusto.", Url: "" },
    { Autor: "Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A. (2014).", Titulo: "Diseñando la propuesta de valor: Cómo crear los productos y servicios que tus clientes están esperando.", Subtitulo: "Deusto.", Url: "" }
]

const websites = [
    { Nombre: "Barno, S. y. (02 de marzo de 2014). Canvas para arquitectos.", Url: "https://stepienybarno.es/blog/2014/03/02/canvas-para-arquitectos/" },
    { Nombre: "Evans, P. (2014). De la deconstrucción a los big data: cómo la tecnología está transformando las empresas. En BBVA, Reinventar la empresa en la era digital.", Url: "https://www.bbvaopenmind.com/wp-content/uploads/2015/01/BBVA-OpenMind-libro-Reinventar-la-Empresa-en-la-Era-Digital-empresa-innovacion1-1.pdf" },
    { Nombre: "Saez H., J. (2021). ¿Cuáles son los modelos de negocios digitales más utilizados? Obtenido de IEBS Business School", Url: "https://www.iebschool.com/blog/modelos-negocios-digitales-mas-utilizados-digital-business/" }
]