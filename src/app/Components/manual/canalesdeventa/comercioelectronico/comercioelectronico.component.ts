import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
  selector: 'app-comercioelectronico',
  templateUrl: './comercioelectronico.component.html',
  styleUrls: ['../canalesdeventa.component.scss'],
  animations: [sectionsAnimation]
})
export class ComercioelectronicoComponent {
  public title: string = 'Comercio electrónico';
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
    {Palabra:"Certificados de seguridad", Significado:"es un certificado digital que garantiza la autenticidad de un sitio web, lo que significa que dicho sitio se representa con veracidad y los visitantes encontrarán el contenido que esperan", Fuente:"(Mailchimp, s. f.)."},
    {Palabra:"Costos operativos", Significado:"aquellos en los que incurre una empresa por el hecho de realizar su principal actividad productiva. Estos son registrados contablemente", Fuente:"(Galán, 2022)."},
    {Palabra:"Demanda", Significado:"Establece el volumen o la cantidad que está dispuesto a comprar un grupo de clientes, dentro de un periodo de tiempo, en un área geográfica y en un ambiente definido", Fuente:"(Quiroa, 2022)."},
    {Palabra:"Estandarización", Significado:"Es el proceso mediante el cual una serie de actividades se ajustan o se adecúan a un estándar. En este sentido, adaptar los procesos a un modelo que se considera de referencia", Fuente:"(Morales, 2022)."},
    {Palabra:"Lluvia de ideas", Significado:"es una técnica no estructurada para grupos de trabajo, donde se buscan soluciones a diversas situaciones mediante la generación de ideas espontáneas, relajadas y horizontales", Fuente:"(Licari, 2023). "},
    {Palabra:"Políticas de privacidad", Significado:"es un documento que integra una serie de declaraciones que establece el negocio y que están directamente relacionadas con la información que se publica en un sitio web, donde se plasman las prácticas y procesos adoptados dentro de una página web para darle al usuario toda la transparencia en relación con los datos que usa.", Fuente:""},
    {Palabra:"Tecnología de cifrado", Significado:"es una forma de traducir datos de texto sin formato (sin cifrar) a ciphertext (cifrado). Los usuarios pueden acceder a los datos cifrados con una clave de cifrado y a los datos descifrados con una clave de descifrado", Fuente:"(IBM, s. f.)."}
]

const tools = [
    { Tema: "Identificación de la idea de negocio", Recurso: "Cómo idear y crear productos y servicios que se vendan.", Url: "https://www.youtube.com/watch?v=F8PrK3z5p1A", Descripcion: "En el tutorial se explica de forma sencilla cómo desarrollar nuevos productos y servicios. " },
    { Tema: "Identificación de la idea de negocio", Recurso: "Costos operativos", Url: "https://youtu.be/KaF1VO4WjnY", Descripcion: "Se observa cómo se realiza un Excel con los costos operativos de una empresa." },
    { Tema: "Identificación de la idea de negocio", Recurso: "Cómo hacer una análisis de la demanda en tu empresa", Url: "https://youtu.be/jQOsXZ3ND_k", Descripcion: "Presenta una explicación sobre cómo identificar y elaborar la demanda para una empresa." },
    { Tema: "Identificación de la idea de negocio", Recurso: "Técnicas de lluvia de ideas: Cómo innovar en grupo", Url: "https://youtu.be/YPTYQ3yrpHw", Descripcion: "Muestra cómo se puede utilizar una lluvia de ideas en un entorno empresarial." },
    { Tema: "Sitios web", Recurso: "Tutorial WIX 2023 | Crea tu página Web PERSONALIZADA en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitios web", Recurso: "Como CREAR UNA PAGINA WEB EN WORDPRESS DESDE CERO 2023 TUTORIAL  ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitios web", Recurso: "DONDE comprar mi dominio y hosting BARATOS en 2023 [PASO A PASO]", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godday, empresa internacionalmente reconocida como una de las principales para adquirir un dominio." },
    { Tema: "Selección de plataforma para sitio web", Recurso: "Curso explicativo de cómo vender en Amazon FBA", Url: "https://www.youtube.com/watch?v=9j0lezwNxfQ", Descripcion: "Curso completo que guía paso a paso el proceso para vender productos en Amazon de toda Latinoamérica" },
    { Tema: "Selección de plataforma para sitio web", Recurso: "Rockcontent comparte un tutorial explicativo del Woocommerce", Url: "https://rockcontent.com/es/blog/woocommerce/#:~:text=WooCommerce%20es%20un%20plugin%20de,WooCommerce%20para%20administrar%20su%20ecommerce", Descripcion: "Tutorial de Rockcontent que explica el WooCommerce: qué es y cómo funciona el plugin para crear una tienda virtual" },
    { Tema: "Certificados de seguridad para sitios web ", Recurso: "Qué y cómo funciona un certificado de seguridad SSL TLS", Url: "https://youtu.be/tHhFQaurGAg", Descripcion: "En este video se muestra cómo funcionan los certificados de seguridad y su importancia en los sitios webs." },
    { Tema: "Cifrado para la protección de datos", Recurso: "Cifrado de datos: qué es y cómo puede ayudarte a proteger tu información en Internet", Url: "https://youtu.be/wcJBmoz6Vlk", Descripcion: "En este video se muestra cómo se puede aplicar un cifrado para la protección de datos importantes para una empresa." },
    { Tema: "Diseño del canal de suministro y logístico", Recurso: "Curso completo de canal de suministro y logística", Url: "https://youtube.com/playlist?list=PLj7Cf_gfzmi8uMB_JWYg3v0zxnUhr1BHi", Descripcion: "" },
    { Tema: "Diseño del canal de suministro y logístico", Recurso: "Cómo Funciona una Tienda Online Logística para e-Commerce", Url: "https://www.youtube.com/watch?v=Fxz8Ka7ny3M", Descripcion: "Ejemplo de aplicación del canal de suministro para tiendas en línea" },
    { Tema: "", Recurso: "Cómo crear las POLÍTICAS DE PRIVACIDAD para tu PÁGINA WEB Tutorial 2020", Url: "https://youtu.be/9oZQbZz1Tco", Descripcion: "En este video se muestra cómo se pueden redactar las políticas de privacidad de un sitio web o comercio electrónico" },
    { Tema: "Plan de comunicación", Recurso: "Cyberclick ¿Cómo vender más? – 20 Estrategias de E-commerce?", Url: "https://www.youtube.com/watch?v=iNcx5W_3rsM", Descripcion: "Explicación en video de estrategias para implementar en una tienda en línea y aumentar las ventas" },
    { Tema: "Selección de plataforma para sitio web", Recurso: "Chat GPT para tu TIENDA EN LÍNEA Inteligencia Artificial para tu Ecommerce", Url: "https://www.youtube.com/watch?v=KO0W385koMQ", Descripcion: "Tutorial en video sobre la aplicación de la inteligencia artificial, Chat GPT, en una tienda en línea." }
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
    {Autor:"Perdigón Llanes, R., Viltres Sala, H., & Madrigal Leiva, I. R. (2018)",Titulo:"Estrategias de comercio electrónico y marketing digital para pequeñas y medianas empresas.",Subtitulo:"Revista Cubana de Ciencias Informáticas, 12(3), 192-208.",Url:"http://scielo.sld.cu/scielo.php?pid=s2227-18992018000300014&script=sci_arttext&tlng=en"},
    {Autor:"Suarez, S. J. L. (2020)",Titulo:"El comercio electrónico (e-commerce) un aliado estratégico para las empresas en Colombia.",Subtitulo:"Revista Ibérica de Sistemas e Tecnologias de informação, (E34), 235-251.",Url:"https://www.proquest.com/openview/f098bb520fa2b09c34ea661067855b94/1?pq-origsite=gscholar&cbl=1006393"},
    {Autor:"Herreros, S. (2019)",Titulo:"La regulación del comercio electrónico transfronterizo en los acuerdos comerciales: algunas implicaciones de política para América Latina y el Caribe.",Subtitulo:"",Url:"https://repositorio.cepal.org/handle/11362/44667"}
]

const websites = [
    {Nombre:"La plataforma de Wix tiene un gran repertorio de información en temas de diseño web, fotografía, eCommerce, Google y SEO, redes sociales, entre otros. Recursos útiles para implementar dentro de una empresa.",Url:"https://es.wix.com/blog"},
    {Nombre:"La plataforma de Hubspot tiene un gran repertorio en temas de comunicación, marketing, ventas y servicio al cliente. ",Url:"https://blog.hubspot.es/"},
    {Nombre:"La plataforma de Shopify brinda soluciones de comercios electrónicos alojadas en la nube. Sus planes incluyen desde sitio web, pagos, logística e integración con diversas plataformas y redes sociales. ",Url:"https://www.shopify.com"},
    {Nombre:"La plataforma de Amazon es una de las principales plataformas de Marketplace. Ofrece vender, logística y publicidad dentro de la plataforma.",Url:"https://vender.amazon.com.mx/vender"}
]






