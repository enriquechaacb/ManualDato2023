import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-canalesdigitales',
    templateUrl: './canalesdigitales.component.html',
    styleUrls: ['../canalesdeventa.component.scss'],
    animations: [sectionsAnimation]
})
export class CanalesdigitalesComponent {
    public title: string = 'Canales digitales de comunicación';
    public subtitle: string = 'Comunicación y canales de venta';
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
    { Palabra: "Administrador del sitio", Significado: "Los administradores de sitios web son los responsables de cada sitio web de una empresa o negocio. Se aseguran de que la información del sitio web es correcta, segura y está actualizada", Fuente: "(Educaweb, s. f.)." },
    { Palabra: "Algoritmo", Significado: "Conjunto de operaciones y decisiones que, a partir de unas reglas determinadas, da como resultado un producto", Fuente: "(Llamas, 2022). " },
    { Palabra: "Almacenamiento en caché:", Significado: "Capa de almacenamiento de datos de alta velocidad que almacena un subconjunto de datos, normalmente transitorios, de modo que las solicitudes futuras de dichos datos se atienden con mayor rapidez las búsquedas o visitas, desde la ubicación de almacenamiento principal", Fuente: "Amazon, s. f.). " },
    { Palabra: "Audiencia", Significado: "Número de individuos a quienes se envían los mensajes a través de un medio de comunicación y que, en ocasiones, se puede tener interacción con ellos", Fuente: "(MarketingDirecto, 2022). " },
    { Palabra: "Código HTML", Significado: "Es el lenguaje con el que se define el contenido de las páginas web. Se trata de un conjunto de etiquetas que sirven para definir el texto y otros elementos que compondrán una página web, como imágenes, listas, vídeos, etc.", Fuente: "(De Souza, 2022). " },
    { Palabra: "Comprimir en Gzip", Significado: "Gzip, es la abreviatura de GNU Zip, es el método de compresión de datos sin pérdidas más popular de la web. Permite reducir el tamaño de las páginas HTML, hojas de estilo y scripts de un sitio web. Además de ser un algoritmo de compresión de datos, el GZIP es también una extensión de archivo (.gz) y un software utilizado para la compresión/descompresión de archivos.", Fuente: "" },
    { Palabra: "Contenido", Significado: "Información digitalizada cuyo sistema de distribución es a través de Internet y su formato es muy amplio, ya que estos contenidos pueden transmitirse mediante imágenes, videos, audios, entre otros.", Fuente: "" },
    { Palabra: "Demanda", Significado: "Establece el volumen o la cantidad que está dispuesto a comprar un grupo de clientes, dentro de un periodo de tiempo, en un área geográfica y en un ambiente definido.", Fuente: "" },
    { Palabra: "Emojis", Significado: "Pequeña imagen o icono digital que se usa en las comunicaciones electrónicas para representar una emoción, un objeto, una idea, etc.", Fuente: "(RAE, s. f.)." },
    { Palabra: "Enlaces", Significado: "Un enlace, link o hipervínculo, es un elemento que conecta una información con otra, localizada en la misma o en otra página web. El enlace puede ser texto, imagen, una dirección web, entre otros. ", Fuente: "" },
    { Palabra: "Hashtags", Significado: "Término asociado a asuntos o discusiones que desean ser indexadas en redes sociales, insertando el símbolo de numeral (#) antes de la palabra, frase o expresión", Fuente: "(Blanco, 2023). " },
    { Palabra: "Indexación", Significado: "Registrar ordenadamente datos e informaciones para elaborar su índice", Fuente: "(Botey, 2022). " },
    { Palabra: "Java Script", Significado: "Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, utilizado principalmente en el desarrollo web, pensado para agregar potencial de interacción y dinamismo a las páginas web", Fuente: "(Coppola, 2023). " },
    { Palabra: "Métrica", Significado: "Se refiere a indicadores que pueden mostrar si las estrategias están contribuyendo o no a los resultados de la empresa ", Fuente: "(Blanco, 2023)." },
    { Palabra: "Motores de búsqueda", Significado: "Sistemas informáticos que recopilan toda la información que está almacenada en los servidores web, y generan resultados en forma de enlaces que den respuesta a las búsquedas", Fuente: "(Cardona, 2021). " },
    { Palabra: "Palabra clave", Significado: "Son palabras y frases que los usuarios escriben en los buscadores para encontrar información sobre un tema concreto", Fuente: "(Harsel, 2023). " },
    { Palabra: "Rastreador de Google", Significado: "El rastreador principal de Google es el robot de Google, un programa que se utiliza para encontrar y analizar automáticamente sitios web siguiendo enlaces entre páginas web", Fuente: "(Google for Developers, s. f.). " },
    { Palabra: "Webinars", Significado: "Contenido de carácter formativo en formato vídeo que se imparte y transmite a través de Internet.", Fuente: "" }
]
const tools = [
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "Tutorial WIX 2023 | Crea tu página Web personalizada en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "Como crear una pagina web en wordpress desde cero 2023 tutorial ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "¿Qué hace un administrador Web? ", Url: "https://youtu.be/vDPOfs_H5WY", Descripcion: "El video explica la importancia del administrador web dentro de las empresas." },
    { Tema: "Sitio web administrador de contenidos hosting", Recurso: "Dónde comprar mi dominio y hosting baratos en 2023 [paso a paso] ", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godaddy, empresa internacionalmente reconocida para adquirir un dominio." },
    { Tema: "Blogs", Recurso: "Google Trends 2.0 | Herramienta potenciada [2023] 🚀 Cómo usar ", Url: "", Descripcion: "Explicación para utilizar la plataforma de Google Trends en la búsqueda de tendencias y temas de interés para realizar contenido, principalmente para un blog." },
    { Tema: "Blogs", Recurso: "Convierte tu blog en una máquina de generación de contenido de calidad.", Url: "https://offers.hubspot.es/calendario-editorial ", Descripcion: "Plantilla para elaborar un calendario editorial de un blog empresarial, ideal para mantenerse organizado." },
    { Tema: "Redes sociales", Recurso: "Crea post para Instagram con Canva (animaciones, música, videos y más)", Url: "https://youtu.be/nsapNssgqVo", Descripcion: "Tutorial en video para la creación de contenido atractivo en la herramienta gratuita Canva." },
    { Tema: "Redes sociales", Recurso: "9 plantillas de redes sociales que te ahorrarán horas de trabajo", Url: "https://blog.hootsuite.com/es/seis-plantillas-de-redes-sociales/", Descripcion: "Plantillas para redes sociales en las que se incluyen:  auditoría de redes sociales, calendario editorial, informe de análisis y resultados y tamaño de imágenes. " },
    { Tema: "Redes sociales", Recurso: "Los 21 mejores gestores de redes sociales para 2024", Url: "https://blog.hubspot.es/marketing/mejores-gestores-redes-sociales", Descripcion: "Lista de herramientas para gestionar redes sociales y tener mayor organización durante la labor. " },
    { Tema: "Mensajería instantánea y chatbots", Recurso: "Chatbot para Facebook con ManyChat - Curso para Principiantes [2022]", Url: "https://youtu.be/dGgcWoclr4U", Descripcion: "Tutorial en video sobre la implementación de Chatbot para Facebook con ManyChat." },
    { Tema: "Mensajería instantánea y chatbots", Recurso: "Whatsapp para empresas: la guía para mercadólogos y emprendedores", Url: "https://blog.hootsuite.com/es/whatsapp-para-empresas/", Descripcion: "Artículo explicativo sobre la implementación de WhatsApp Business para empresas adicional de herramientas y ejemplos de uso." },
    { Tema: "Optimización para motores de búsqueda (SEO)", Recurso: "Tutorial | Planificador de palabras clave de Google ", Url: "https://youtu.be/n2vpYp3umxQ", Descripcion: "Tutorial en video sobre la utilización de la herramienta gratuita del Planificador de Palabras calves de Google. " },
    { Tema: "Email marketing", Recurso: "Plantillas de Email", Url: "https://www.canva.com/es_es/plantillas/s/email/", Descripcion: "Plantillas editables para la elaboración y envío de email marketing a través de la plataforma gratuita con opciones de pago, Canva. " },
    { Tema: "Email marketing", Recurso: "Mailchimp tutorial 2022 (Principiantes) - Paso a paso Guía Email Marketing ", Url: "https://youtu.be/Ro_U77MBBFU", Descripcion: "Tutorial en video para la implementación de herramienta de email marketing Mailchimp." },
]

const experts = [
    { Nombre: "Sarah Vercheval. Directora de Marketing en InboundCycle", Contacto: "https://www.inboundcycle.com/", Url: "https://www.inboundcycle.com/", Descripcion: "Empresa especializada en Inbound marketing" },
    { Nombre: "Vilma Nuñez", Contacto: "https://vilmanunez.com/", Url: "https://vilmanunez.com/", Descripcion: "Ceo del Grupo Convierte Más " },
    { Nombre: "José Facchin", Contacto: "https://josefacchin.com/", Url: "https://josefacchin.com/", Descripcion: "Creador de contenido en comunicación digital" }
]

const institutions = [
    { Nombre: "Cámara de Comercio e Industria de El Salvador: Promueve y defendiendo permanentemente el sistema de libre iniciativa, impulsando la unidad nacional, y el desarrollo empresarial con responsabilidad social, liderando acciones y facilitando servicios que fomenten la competitividad y la innovación de nuestros asociados, protegiendo sus derechos.", Url: "https://connectamericas.com/" },
    { Nombre: "Ministerio de Economía de El Salvador: entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.", Url: "https://www.economia.gob.sv/" },
    { Nombre: "La Agencia de Gobierno Electrónico y Sociedad de la Información y del Conocimiento (AGESIC): Tiene la misión de liderar la estrategia de implementación del Gobierno Electrónico del país e impulsar la Sociedad de la Información y del Conocimiento como una nueva forma de ciudadanía, promoviendo la inclusión y la apropiación a través del buen uso de las tecnologías de la información y de las comunicaciones.", Url: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/ " },
    { Nombre: "Cámara Nacional de Comercio y Servicios del Uruguay: Entidad gremial empresarial que tiene por objetivo velar por el interés general del comercio y de todo el sector privado de la economía nacional.", Url: "https://www.cncs.com.uy/" },
    { Nombre: "Ministerio de Tecnologías de la Información y las Comunicaciones: Entidad que se encarga de diseñar, adoptar y promover las políticas, planes, programas y proyectos del sector de las Tecnologías de la Información y las Comunicaciones.", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Cámara de Comercio de Bogotá: Entidad privada con más de un siglo de historia, que promueve la prosperidad regional y contribuye a mejorar la calidad de vida y el clima de negocios.", Url: "https://www.ccb.org.co/" },
    { Nombre: "Superintendencia de Industria y Comercio: Es la autoridad nacional de protección de la competencia, los datos personales y la metrología legal, protege los derechos de los consumidores y administra el Sistema Nacional de Propiedad Industrial, a través del ejercicio de sus funciones administrativas y jurisdiccionales.", Url: "https://www.sic.gov.co/" }
]

const books = [
    { Autor: "Garcés, L. A., Nieto, M. T. G., & González, G. C. R. (2020).", Titulo: "La comunicación digital en las micro y pequeñas empresas.", Subtitulo: "Revista de la SEECI, (52), 149-169. *Nota: dar clic en PDF para leerlo.", Url: "https://dialnet.unirioja.es/servlet/articulo?codigo=7504221" },
    { Autor: "Henao, A. E. P. (2020).", Titulo: "La comunicación organizacional en la gestión empresarial: retos y oportunidades en el escenario digital.", Subtitulo: "Revista GEON: Gestión-Organización-Negocios., 7(1), 9-25.", Url: "https://dialnet.unirioja.es/servlet/articulo?codigo=7828548" },
    { Autor: "Romero-Rodríguez, L. M., & Rivera-Rongel, D. (2019).", Titulo: "La comunicación en el escenario digital. Actualidad, retos y prospectivas.", Subtitulo: "Lima: Pearson Educación de Perú.", Url: "https://goo.su/8aTbbA " }
]

const websites = [
    { Nombre: "La plataforma de Wix tiene un gran repertorio de información en temas de diseño web, fotografía, eCommerce, Google y SEO, redes sociales, entre otros. Recursos útiles para implementar dentro de una empresa.", Url: "https://es.wix.com/blog" },
    { Nombre: "La plataforma de Hootsuite ofrece gran cantidad de información para implementar y destacar en redes sociales. ", Url: "https://blog.hootsuite.com/es/" },
    { Nombre: "La plataforma de Hubspot tiene un gran repertorio en temas de comunicación, marketing, ventas y servicio al cliente. ", Url: "https://blog.hubspot.es/" }
]
