import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-mediosdepago',
    templateUrl: './mediosdepago.component.html',
    styleUrls: ['../transformaciondigital.component.scss'],
    animations: [sectionsAnimation]
})
export class MediosdepagoComponent {
    public title: string = 'Medios de pago digitales';
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
    { Tema: "Plataformas de comercio digital", Recurso: "", Url: "https://platzi.com/clases/1986-fundamentos-ecommerce/30773-bienvenida-y-presentacion-del-proyecto/", Descripcion: "Clase introductoria al comercio digital", Observaciones: "Conocer elementos clave para una tienda de e-comerce" },
    { Tema: "Medios de pago", Recurso: "Guía para el cumplimiento de la normativa PCI", Url: "https://stripe.com/es/guides/pci-compliance", Descripcion: "Guía presentada por Stripe para cumplir con la Normativa de pagos", Observaciones: "Sitio web de apoyo" },
    { Tema: "Plataformas de comercio digital", Recurso: "", Url: "https://www.youtube.com/watch?v=L--YOAezLco", Descripcion: "Webinar donde se revisan temas relevantes de comercio electrónico para pyme en un proceso metodológica de Jtbd (Job to be done)", Observaciones: "Expone tips  para generar una lista de tareas personalizada para tener páginas web más eficientes en términos de comercio electrónico" },
    { Tema: "Tipos de transacciones", Recurso: "", Url: "https://www.youtube.com/watch?v=t1paD1e7obs", Descripcion: "Webinar que permite identificar cómo facilitar el proceso de pago para los clientes", Observaciones: "Se presenta información sobre diferentes medios de pago." }
]

const experts = [
    { Nombre: "Cámara Colombiana de Comercio Electrónico", Contacto: "", Url: "https://www.ccce.org.co/", Descripcion: "Es una entidad privada sin ánimo de lucro, de orden gremial, que tiene como propósito promover y fortalecer la industria eCommerce en Colombia" },
    { Nombre: "Agencia de Gobierno Electrónico y Sociedad de Información del Conocimiento", Contacto: "", Url: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/", Descripcion: "Instancia responsable de formular las políticas, los planes y estrategia electrónica de Uruguay" },
    { Nombre: "Colombia Fintech", Contacto: "", Url: "https://colombiafintech.co/", Descripcion: "Asociación de empresas Fintech de Colombia" },
    { Nombre: "FUSADES", Contacto: "", Url: "https://fusades.org/", Descripcion: "Organización en el Salvador que busca una mayor inclusión social e impulsa a las pequeñas empresas" }
]

const institutions = [
    { Nombre: "Ministerio de Tecnologías de la Información y Comunicaciones de Colombia", Descripcion: "está encargado de las tecnologías de la información y la comunicación.", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Ministerio de Comercio, Industria y Turismo de Colombia", Descripcion: "encargado de las relaciones comerciales dentro del país.", Url: "https://www.mincit.gov.co/" },
    { Nombre: "Ministerio de Economía y Finanzas de la República Oriental del Uruguay", Descripcion: "Secretaría de estado encargada de la administración y fortalecimiento del comercio del Uruguay.", Url: "https://www.gub.uy/ministerio-economia-finanzas/" },
    { Nombre: "Dirección Nacional de Innovación, Ciencia y Tecnología Uruguay", Descripcion: "instancia de articulación y vinculación para el desarrollo de la ciencia y la tecnología de Uruguay", Url: "https://www.gub.uy/ministerio-educacion-cultura/direccion-innovacion-ciencia-tecnologia" },
    { Nombre: "Ministerio de Economía de El Salvador", Descripcion: "es la entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.", Url: "https://www.economia.gob.sv/" },
    { Nombre: "Ministerio de Educación, Ciencia y Tecnología de El Salvador", Descripcion: "encargado de elaborar Políticas orientadas al desarrollo tecnológico del país.", Url: "https://www.mined.gob.sv/" }
]

const words = [
    { Palabra: "Blockchain", Significado: "“Cadena de bloques”, o blockchain en inglés, es una base de datos compartida o distribuida donde la información registrada está almacenada en bloques, ligados entre sí criptográficamente, y validada de una forma descentralizada a través de un protocolo común. En otras palabras, es una forma de almacenar información de forma segura, con mayor trazabilidad y accesibilidad.", Fuente: "(Santander, 2023)." },
    { Palabra: "Ciberseguridad", Significado: "La ciberseguridad es la práctica de proteger equipos, redes, aplicaciones de software, sistemas críticos y datos de posibles amenazas digitales. Las organizaciones tienen la responsabilidad de proteger los datos para mantener la confianza del cliente y cumplir la normativa. Utilizan medidas y herramientas de ciberseguridad para proteger los datos confidenciales del acceso no autorizado, así como para evitar interrupciones en las operaciones empresariales debido a una actividad de red no deseada. Las organizaciones implementan la ciberseguridad al optimizar la defensa digital entre las personas, los procesos y las tecnologías.", Fuente: "(AWS, 2023)." },
    { Palabra: "eCommerce", Significado: "Un método de compraventa que utiliza internet como medio para realizar transacciones y contactar con sus consumidores. No sólo mediante una página web, sino también a través de las redes sociales.", Fuente: "(Bello, 2022)" }

]

const books = [
    { Autor: "Tamayo, C., Malagón, J. (2017).", Titulo: "Ensayos sobre Inclusión Financiera en Colombia.", Subtitulo: "Asobancaria y BID.", Url: "https://publications.iadb.org/publications/spanish/viewer/Ensayos-sobre-inclusi%C3%B3n-financiera-en-Colombia.pdf" },
    { Autor: "Bernhardt, G. (2023).", Titulo: "Cyber Security and the Future of Digital Payments.", Subtitulo: "Libro electrónico. HarperCollins Publishers.", Url: "" },
    { Autor: "Pérez C., E., Titelman K. D. (2018).", Titulo: "La inclusión financiera para la inserción productiva y el papel de la banca de desarrollo.", Subtitulo: "Naciones Unidas, CEPAL.", Url: "https://www.cepal.org/es/publicaciones/44213-la-inclusion-financiera-la-insercion-productiva-papel-la-banca-desarrollo" },
    { Autor: "IBM (2023).", Titulo: "¿Qué es Blockchain?", Subtitulo: "", Url: "https://www.ibm.com/mx-es/topics/blockchain" },
    { Autor: "Santander (2023).", Titulo: "¿Qué es “blockchain”?", Subtitulo: "", Url: "https://www.santander.com/es/stories/blockchain-que-es" }
]

const websites = [
    { Nombre: "Conekta.", Descripcion: "Blog de recomendaciones para pagos digitales", Url: "https://www.conekta.com/" },
    { Nombre: "Deloitte. Medios de pago digitales. ", Descripcion: "Presentación de artículos del tema", Url: "https://www2.deloitte.com/mx/es/pages/consumer-business/articles/medios-de-pago-digitales-en-mexico.html" },
    { Nombre: "Mashal, M. y Kumar, H. (2023).", Descripcion: "Un sistema instantáneo de pagos digitales revoluciona el comercio en India", Url: "https://www.nytimes.com/es/2023/03/07/espanol/pago-digital-qr-codigo.html" },
    { Nombre: "Profesional, J. (s/f).", Descripcion: "Nueva Ley de Comercio Electrónico en El Salvador (2021). JRecinos Profesional.", Url: "https://www.youtube.com/watch?v=NnyHTQuEdVY" },
    { Nombre: "PCI Security Standards Council.", Descripcion: "Es un foro mundial abierto destinado a la formulación, la mejora, el almacenamiento, la difusión y la aplicación permanentes de las normas de seguridad para la protección de datos de cuentas. ", Url: "https://www.pcisecuritystandards.org/minisite/es-es/" },
    { Nombre: "Santander. Pagos digitales: ¿qué son y cuáles son los más usados?", Descripcion: "Información del tema ", Url: "https://www.santander.com/es/stories/pagos-digitales-que-son-y-cuales-son-los-mas-usados" }
]