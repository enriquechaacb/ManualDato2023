import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
  selector: 'app-marketingdigital',
  templateUrl: './marketingdigital.component.html',
  styleUrls: ['../canalesdeventa.component.scss'],
  animations: [sectionsAnimation]
})
export class MarketingdigitalComponent {
  public title: string = 'Marketing digital';
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
  {Palabra:"Alcance", Significado:"Número de clientes que han visto un anuncio al menos una vez en una determinada plataforma web.", Fuente:"(Amazon Ads, 2022)."},
  {Palabra:"Contenido", Significado:"Alude a información o mensajes diseñados previamente para el logro de objetivos de marketing, comunicación o publicidad, cuyo sistema de distribución está basado en Internet y su formato es muy amplio, ya que estos contenidos pueden transmitirse mediante imágenes, videos, audios, entre otros. (DesarrolloWeb.com, s. f.).", Fuente:""},
  {Palabra:"Impresión", Significado:"Este dato permite saber la interacción de los usuarios y el número de visualizaciones que ha tenido un contenido en determinada plataforma web.", Fuente:"(Delmar, 2021)."}, 
  {Palabra:"Indicadores", Significado:"Es el referente que permite verificar si la campaña o estrategia cumple los objetivos. Sirve para medir la evolución de la campaña y tomar decisiones informadas.", Fuente:""},
  {Palabra:"Medios digitales", Significado:"es cualquier vehículo de comunicación que tiene como base el Interne", Fuente:"(Hotmart, 2023)."},
  {Palabra:"Métricas", Significado:"son una forma cuantificable de hacer un seguimiento del rendimiento y una herramienta importante para medir la efectividad de una campaña", Fuente:"(Amazon Ads, 2023)."},
  {Palabra:"Palabra clave", Significado:"Son palabras y frases que los usuarios escriben en los buscadores para encontrar información sobre un tema concreto", Fuente:"(Harsel, 2023)."},
  {Palabra:"Planificación estratégica", Significado:"es la herramienta utilizada por las empresas como un proceso sistemático que permite el desarrollo y la implementación de planes, con el propósito de alcanzar los objetivos que se han propuesto", Fuente:"(Quiroa, 2022)."},
  {Palabra:"Tecnologías de la información y comunicación", Significado:"son el resultado de poner en interacción la informática y las telecomunicaciones. Todo, con el fin de mejorar el procesamiento, almacenamiento y transmisión de la información", Fuente:"(Bermejo, 2022)."},
  {Palabra:"Tendencias del mercado", Significado:"Propensión o inclinación en las personas y en las cosas hacia determinados fines.", Fuente:""},
  {Palabra:"Tráfico", Significado:"Hace referencia a las personas que visitan un sitio.", Fuente:""},
  {Palabra:"Arquetipos de clientes", Significado:"Son descripciones generales de personas	que representan segmentos típicos de clientes (actuales o potenciales) dentro de un mercado. Pueden incluir características psicográficas y demográficas generales y se basa en patrones de comportamiento comunes y motivacionales. Los arquetipos son útiles para entender las necesidades y comportamientos de grupos más grandes de clientes.", Fuente:""}
]
const tools = [
    { Tema: "Definición del marketing digital", Recurso: "Todo lo que necesitas saber sobre #MarketingDigital parte I - #VilmaNúñez ", Url: "https://youtu.be/6ccvtd0x0Mw", Descripcion: "Curso completo en video de marketing digital para empresas. " },
    { Tema: "Definición del marketing digital", Recurso: "CURSO de Marketing Digital Completo (2023) ", Url: "https://youtu.be/v17EXDu3t0E", Descripcion: "Curso completo en video de marketing digital para empresas. " },
    { Tema: "Definición del marketing digital", Recurso: "Plantilla de checklist para diseñar una estrategia de marketing online que de verdad funciona", Url: "https://vilmanunez.com/estrategia-marketing-online-plantilla-checklist/ ", Descripcion: "Lista de verificación para diseñar una estrategia de marketing digital" },
    { Tema: "Sitios web", Recurso: "Tutorial WIX 2023 | Crea tu página Web PERSONALIZADA en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitios web", Recurso: "Como CREAR UNA PAGINA WEB EN WORDPRESS DESDE CERO 2023 TUTORIAL  ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitios web", Recurso: "DONDE comprar mi dominio y hosting BARATOS en 2023 [PASO A PASO]", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godday, empresa internacionalmente reconocida como una de las principales para adquirir un dominio." },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Tutorial | Planificador de Palabras Clave de Google ", Url: "https://youtu.be/n2vpYp3umxQ", Descripcion: "Tutorial en video sobre la utilización de la herramienta gratuita del Planificador de Palabras calves de Google. " },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Curso de SEO (2023): Completo y GRATIS", Url: "https://youtu.be/Usm9p_sewQ4", Descripcion: "Curso completo en video para elaborar una estrategia SEO" },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Cómo crear una campaña", Url: "https://support.google.com/google-ads/answer/6324971?hl=es-419", Descripcion: "Tutorial escrito por parte de Google Ads sobre como lanzar una campaña en su plataforma. " },
    { Tema: "Buscadores (SEO y SEM)", Recurso: "Tutorial de Semrush COMPLETO + 14 días GRATIS", Url: "https://youtu.be/DhsdyTsmsYE", Descripcion: "Tutorial en video para utilizar la herramienta de SEMRush para la búsqueda de palabras claves." },
    { Tema: "Email marketing", Recurso: "Plantillas de Email", Url: "https://www.canva.com/es_es/plantillas/s/email/", Descripcion: "Plantillas editables para la elaboración y envío de email marketing a través de la plataforma gratuita con opciones de pago, Canva. " },
    { Tema: "Email marketing", Recurso: "MAILCHIMP TUTORIAL 2022 (Principiantes) - Paso a Paso Guía Email Marketing ", Url: "https://youtu.be/Ro_U77MBBFU", Descripcion: "Tutorial en video para la implementación de herramienta de email marketing Mailchmp." },
    { Tema: "Gestión de redes sociales", Recurso: "CREA POST PARA INSTAGRAM CON CANVA⚡️ (ANIMACIONES, MÚSICA, VIDEOS Y MÁS)", Url: "https://youtu.be/nsapNssgqVo", Descripcion: "Tutorial en video para la creación de contenido atractivo en la herramienta gratuita Canva. " },
    { Tema: "Gestión de redes sociales", Recurso: "9 plantillas de redes sociales que te ahorrarán horas de trabajo", Url: "https://blog.hootsuite.com/es/seis-plantillas-de-redes-sociales/", Descripcion: "Plantillas para redes sociales en las que se incluyen:  auditoría de redes sociales, calendario editorial, informe de análisis y resultados y tamaño de imágenes. " },
    { Tema: "Gestión de redes sociales", Recurso: "Los 21 mejores gestores de redes sociales para 2024", Url: "https://blog.hubspot.es/marketing/mejores-gestores-redes-sociales", Descripcion: "Lista de herramientas para gestionar redes sociales y tener mayor organización durante la labor. " },
    { Tema: "Gestión de redes sociales", Recurso: "Haz esto para aumentar el alcance de tus publicaciones de Instagram [TUTORIAL] ", Url: "https://youtu.be/5kjixKGOECQ", Descripcion: "En este video se describe un tutorial para aumentar el alcance de las publicaciones en Instagram. " },
    { Tema: "Marketing de contenidos", Recurso: "Marketing de Contenidos - Crea tu Estrategia de Contenidos ", Url: "https://youtu.be/z8io3g6tmjs", Descripcion: "Tutorial en video para realizar una estrategia de marketing de contenidos. " },
    { Tema: "Marketing de contenidos", Recurso: "Las 7 mejores herramientas de marketing de contenidos para 2020", Url: "https://www.cyberclick.es/numerical-blog/las-mejores-herramientas-de-marketing-de-contenidos", Descripcion: "Lista de herramientas para ejecutar una estrategia de marketing de contenidos.  " },
    { Tema: "Marketing de contenidos", Recurso: "7 consejos para crear contenidos para redes sociales ", Url: "https://youtu.be/T1zvo2q3igo", Descripcion: "En este video se muestra la creación de contenido para redes sociales." },
    { Tema: "Marketing de contenidos", Recurso: "Curso Google Analytics 4 2023 (Paso a Paso)", Url: "https://youtu.be/oDIQWblkeII", Descripcion: "Curso de Google Analitycs para medir los resultados de un sitio web." },
    { Tema: "Implementación de estrategia de marketing digital", Recurso: "Qué es un análisis FODA y cómo se hace ", Url: "https://youtu.be/A77rrexPlAk", Descripcion: "Tutorial para hacer un análisis de FODA de una empresa y comprender la situación interna y externa de la empresa para hacer una estrategia de marketing digital." }
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
    {Autor:"Luque, F. V., Lozano, L. A. H., & Quiroz, A. F. B. (2018).",Titulo:"Importancia de las técnicas del marketing digital.",Subtitulo:"RECIMUNDO: Revista Científica de la Investigación y el Conocimiento, 2(1), 764-783. ",Url:"https://dialnet.unirioja.es/servlet/articulo?codigo=6732914"},
    {Autor:"Corrales, A. M. S., Coque, L. M. P., & Brazales, Y. P. B. (2017).",Titulo:"El marketing digital y su influencia en la administración empresarial.",Subtitulo:"Dominio de las Ciencias, 3(4), 1161-1171.",Url:"https://dialnet.unirioja.es/servlet/articulo?codigo=6325485"},
    {Autor:"Cudriz, E. C. N., & Corrales, J. M. (2020).",Titulo:"El marketing digital como un elemento de apoyo estratégico a las organizaciones.",Subtitulo:"Cuadernos Latinoamericanos de Administración, 16(30).",Url:"https://masd.unbosque.edu.co/index.php/cuaderlam/article/view/2915"}
]

const websites = [
    { Nombre: "La plataforma de Wix tiene un gran repertorio de información en temas de diseño web, fotografía, eCommerce, Google y SEO, redes sociales, entre otros. Recursos útiles para implementar dentro de una empresa.", Url: "https://es.wix.com/blog" },
    { Nombre: "La plataforma de Hootsuite ofrece gran cantidad de información para implementar y destacar en redes sociales. ", Url: "https://blog.hootsuite.com/es/" },
    { Nombre: "La plataforma de Hubspot tiene un gran repertorio en temas de comunicación, marketing, ventas y servicio al cliente. ", Url: "https://blog.hubspot.es/" }
]
