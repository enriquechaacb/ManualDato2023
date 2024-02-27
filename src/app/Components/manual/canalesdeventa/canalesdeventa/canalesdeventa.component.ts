import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
  selector: 'app-canalesdeventa',
  templateUrl: './canalesdeventa.component.html',
  styleUrls: ['../canalesdeventa.component.scss'],
  animations: [sectionsAnimation]
})
export class CanalesdeventaComponent {
  public title: string = 'Canales de venta';
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
    {Palabra:"Carrito abandonado", Significado:"Cuando un usuario añade un producto al carrito de compras en línea de un comercio electrónico, pero no continúa con el proceso de compra ni la concluye.", Fuente:"(Mailchimp, s. f.)."},
    {Palabra:"Demanda", Significado:"Establece el volumen o la cantidad que está dispuesto a comprar un grupo de clientes, dentro de un periodo de tiempo, en un área geográfica y en un ambiente definido", Fuente:"(Quiroa, 2022)."},
    {Palabra:"Intermediarios", Significado:"Agente que vincula o comunica a dos o más partes interesadas en hacer una transacción o negociación", Fuente:"(Roldán, 2022)."},
    {Palabra:"Landing page o página de aterrizaje", Significado:"Es una página dentro de un sitio web, desarrollada con el único objetivo de convertir los visitantes en prospectos de ventas por medio de una oferta determinada", Fuente:"(Blanco, 2023)."},
    {Palabra:"Mayorista", Significado:"Agente intermediario entre fabricantes o productores y empresas minoristas, cuya actividad económica se basa en la compra y venta de productos al por mayor a otras empresas mayoristas y minoristas", Fuente:"(Galán, 2022)."},
    {Palabra:"Minorista", Significado:"Aquel que transfiere bienes, o presta servicios, a los consumidores finales", Fuente:"(Morales, 2022)."},
    {Palabra:"Modelo de negocio", Significado:"Es un instrumento que permite tener claridad en el modo por el cual se ofrece una solución a una necesidad del mercado", Fuente:"(Clavijo, 2023)."}
]

const tools = [
    { Tema: "Sitios web", Recurso: "Tutorial WIX 2023 | Crea tu página Web PERSONALIZADA en WIX ", Url: "https://youtu.be/4q97uMfhAbk", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wix." },
    { Tema: "Sitios web", Recurso: "Como CREAR UNA PAGINA WEB EN WORDPRESS DESDE CERO 2023 TUTORIAL  ", Url: "https://youtu.be/FACbOhT3QNg", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un sitio web a través de la plataforma Wordpress." },
    { Tema: "Sitios web", Recurso: "DONDE comprar mi dominio y hosting BARATOS en 2023 [PASO A PASO]", Url: "https://youtu.be/ewtdrMUjYKs", Descripcion: "Tutorial en video sobre la compra de dominio y hospedaje web a través de la plataforma Godday, empresa internacionalmente reconocida como una de las principales para adquirir un dominio." },
    { Tema: "Social commerce", Recurso: "Cómo CREAR una Tienda o Catálogo en Facebook e Instagram - ACTUALIZADO 2022", Url: "https://youtu.be/AnmI-XSQijs", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de tienda dentro de Facebook e Instagram." },
    { Tema: "Social commerce", Recurso: "Artículo", Url: "https://help.pinterest.com/es/business/article/link-your-shopify-and-pinterest-accounts ", Descripcion: "Artículo con explicación para hacer la vinculación entre la red social Pinterest y una tienda en Shopify, con la intención de vender a través de la red social." },
    { Tema: "Marketplaces", Recurso: "Curso GRATIS De Amazon FBA | Cómo Vender En Amazon FBA y Ganar Dinero Siendo Principiante En 2023", Url: "https://youtu.be/9j0lezwNxfQ", Descripcion: "Curso completo para vender productos en Amazon de toda Latinoamérica." },
    { Tema: "Aplicaciones móviles", Recurso: "", Url: "https://cynoteck.com/es/blog-post/complete-mobile-app-development-checklist-for-small-business/", Descripcion: "Artículo que incluye una lista de Verificación para realizar antes de lanzar una aplicación que se compartirá con clientes." },
    { Tema: "Programas de afiliados", Recurso: "Hotmart: Cómo COMENZAR desde CERO en Marketing de Afiliados (Paso a Paso Completo) ", Url: "https://youtu.be/XT1IDHyxsoI", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un programa de afiliados utilizando la plataforma de Hotmart." },
    { Tema: "Programas de afiliados", Recurso: "Tutorial Completo de Marketing de Afiliados de Amazon para Principiantes 2021", Url: "https://youtu.be/xQNqY9C8smY", Descripcion: "Tutorial en video con explicación sencilla sobre la elaboración de un programa de afiliados utilizando la plataforma de Amazon." },
    { Tema: "Programas de afiliados", Recurso: "", Url: "https://hotmart.com/es/blog/abril-150-guia-completa-programa-de-afiliados", Descripcion: "Artículo que incluye guía para la creación de un programa de afiliados para empresa. " },
    { Tema: "Programas de afiliados", Recurso: "Estrategias para Evitar Carritos Abandonados", Url: "https://youtu.be/ApOXhEXpCfs", Descripcion: "En el siguiente video se muestran estrategias para disminuir los carritos abandonados dentro de las tiendas en línea." },
    { Tema: "Programas de afiliados", Recurso: "Artículo explicativo ", Url: "https://www.zendesk.com.mx/blog/intermediarios-comerciales/", Descripcion: "En este artículo se explica el ejemplo de intermediarios minoristas." }
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
    {Autor:"Espinosa-Vélez, M. P., & Armijos-Buitrón, V. (2022).",Titulo:"La transformación digital y su incidencia en el e-commerce en Ecuador.",Subtitulo:"In Memorias de la Décima Segunda Conferencia Iberoamericana de Complejidad, Informática y Cibernética: CICIC 2022 (pp. 169-174).",Url:"https://www.iiis.org/CDs2022/CD2022Spring/papers/CB055NZ.pdf"},
    {Autor:"Lopera Mora, E. D. (2018).",Titulo:"Expansión de mercado por medio de las plataformas virtuales.",Subtitulo:"",Url:"https://dspace.tdea.edu.co/handle/tda/380"},
    {Autor:"Sampedro Guamán, C. R., Palma Rivera, D. P., Machuca Vivar, S. A., & Arrobo Lapo, E. V. (2021).",Titulo:"Transformación digital de la comercialización en las pequeñas y medianas empresas a través de redes sociales.",Subtitulo:"Revista Universidad y Sociedad, 13(3), 484-490.",Url:"http://scielo.sld.cu/scielo.php?pid=S2218-36202021000300484&script=sci_arttext"}
]

const websites = [
    { Nombre: "La plataforma de Wix tiene un gran repertorio de información en temas de diseño web, fotografía, eCommerce, Google y SEO, redes sociales, entre otros. Recursos útiles para implementar dentro de una empresa.", Url: "https://es.wix.com/blog" },
    { Nombre: "La plataforma de Hootsuite ofrece gran cantidad de información para implementar y destacar en redes sociales. ", Url: "https://blog.hootsuite.com/es/" },
    { Nombre: "La plataforma de Hubspot tiene un gran repertorio en temas de comunicación, marketing, ventas y servicio al cliente. ", Url: "https://blog.hubspot.es/" }
]
