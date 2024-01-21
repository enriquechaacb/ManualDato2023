import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';

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
        public _thisroute: ActivatedRoute
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

const words = [
    { Palabra: "Dato", Significado: "Es la representación de una variable que puede ser cuantitativa o cualitativa que indica un valor que se le asigna a un objeto y se representa a través de una secuencia de símbolos, números o letras. Los datos describen hechos empíricos, sucesos y entidades", Fuente: "(Dato - Qué es, concepto, ejemplos y tipos de datos, 2023)." },
    { Palabra: "Ciencia de datos", Significado: "Es un campo interdisciplinario que combina técnicas, métodos y enfoques de estadísticas, matemáticas, informática y dominios específicos para analizar, comprender y extraer conocimiento significativo a partir de conjuntos de datos. El objetivo principal de la ciencia de datos es revelar patrones, tendencias, relaciones y conocimientos ocultos en los datos con el fin de tomar decisiones informadas y mejorar la toma de decisiones", Fuente: "(¿Qué es la ciencia de datos? | IBM, 2023)." },
    { Palabra: "Clasificación", Significado: "Se refiere al entrenamiento de un modelo en un conjunto de datos etiquetados para asignar puntos de datos a clases o para clasificar nuevos puntos de datos. La clasificación es un método de modelado predictivo que se utiliza para predecir la clase a la que pertenece un punto de datos", Fuente: "(The Black Box Lab, 2022)." },
    { Palabra: "Analítica de datos", Significado: "Es una disciplina que estudia de dónde proviene una determinada base de información. Asimismo, analiza cómo pueden interpretarse y representarse dichos recursos para darles un uso productivo", Fuente: "(Pozas, 2022)." },
    { Palabra: "Predicción", Significado: "Es una parte importante de la analítica de datos. La predicción se refiere a la capacidad de predecir eventos futuros basados en patrones históricos y tendencias actuales. La predicción se utiliza en muchos campos, como la meteorología, la economía, la medicina y el marketing. En el campo del marketing, la predicción se utiliza para predecir el comportamiento del consumidor y para identificar oportunidades de venta cruzada y venta adicional", Fuente: "(What is predictive Analytics?, IBM, 2022)." },
    { Palabra: "Clustering", Significado: "Es una técnica de análisis de datos que agrupa objetos similares en grupos, llamados clústeres, basándose en la similitud entre ellos. El objetivo principal del clustering es identificar patrones y estructuras en los datos que no son evidentes a simple vista", Fuente: "(«¿Qué es el agrupamiento en clústeres?», 2023)." }
]
const tools = [
    { Tema: "Implementación de herramientas de analítica de datos.", Recurso: "Casos exitosos de Empresas que usaron Analítica de Datos - DataKnow", Url: "https://www.dataknow.io/casos-exitosos-analitica-datos/", Descripcion: "Solución al problema de procesos y sistemas rudimentarios para el análisis de incidentes o siniestros, duplicidad de registros, elevados tiempos de procesamiento.", Observaciones: "Analítica de datos en una empresa aseguradora en Perú." },
    { Tema: "Implementación de la analítica de datos en las organizaciones en Latinoamérica.", Recurso: "La analítica y la Inteligencia Artificial, catalizadores de los negocios en la región (estrategiaynegocios.net)", Url: "https://www.estrategiaynegocios.net/tecnologia-cultura-digital/la-analitica-y-la-inteligencia-artificial-catalizadores-de-los-negocios-en-la-region-IF10625872", Descripcion: "La analítica puede seguir el comportamiento de los consumidores en las tiendas físicas y en línea.", Observaciones: "El análisis del comportamiento del consumidor permite diseñar campañas de Marketing con mayor nivel de personalización y conversión." },
    { Tema: "Caso de aplicación de la tecnología en servicios bancarios.", Recurso: "Caso de éxito Banorte | LexisNexis Risk Solutions", Url: "https://risk.lexisnexis.es/insights-resources/case-study/banorte-financial-crime-compliance", Descripcion: "Caso de aplicación de analítica de datos frente al combate a crímenes financieros.", Observaciones: "Este es un caso que aplica la Automatización y depuración inicial y el monitoreo continuo de los datos." },
    { Tema: "Caso de transformación digital en Grupo Bimbo", Recurso: "“Analítica de datos”: La clave para la transformación digital de Grupo Bimbo (expansion.mx)", Url: "https://expansion.mx/tecnologia/2023/01/26/analitica-de-datos-la-clave-para-la-transformacion-digital-de-grupo-bimbo", Descripcion: "“Analítica de datos”: La clave para la transformación digital de Grupo Bimbo", Observaciones: "Bimbo ha logrado mejor control de datos y optimizar con Microsoft Azure, Power BI y Azure Synapse Analytics." },
    { Tema: "Casos reales de analítica avanzada por sectores", Recurso: "www.sdggroup.com/es-ES/analitica-avanzada-de-la-ia-la-z", Url: "https://www.sdggroup.com/es-ES/analitica-avanzada-de-la-ia-la-z?__hstc=258840533.b9a0c603f3484beeb24481ae96cc0801.1611070782046.1613486431865.1613639604974.15&__hssc=258840533.4.1613639604974&__hsfp=1577037732&hsCtaTracking=acb8b699-4389-4c80-ab29-21675432daf0%7C1dd5ecba-53d0-468c-b25a-59d8b235470d", Descripcion: "eBook sobre Analítica Avanzada. ", Observaciones: "Algunos de los casos de uso reales más relevantes según el modelo analítico empleado." },
    { Tema: "Creación de experiencias inteligentes con Inteligencia artificial en Coca Cola", Recurso: "Coca Cola se apoya en el Big Data para impulsar aún más su éxito - Big Data Magazine", Url: "https://bigdatamagazine.es/coca-cola-se-apoya-en-el-big-data-para-impulsar-aun-mas-su-exito", Descripcion: "Artículo que describe cómo Coca Cola se apoya en el Big Data para impulsar aún más su éxito", Observaciones: "Coca Cola busca seguir el liderazgo de los gigantes de la tecnología al desarrollar su asistente virtual en máquinas expendedoras para mayor personalización." },
    { Tema: "El Big Data y su valor", Recurso: "https://youtu.be/w4vsFKMO7XA", Url: "https://youtu.be/w4vsFKMO7XA", Descripcion: "Video que explica el Big data en 3 minutos y sus posibles aplicaciones.", Observaciones: "Explicación sencilla conceptos como Big Data y Analítica de datos." },
    { Tema: "Ciencia de datos aplicada en los negocios", Recurso: "https://youtu.be/1NrA-Nv4Uf0", Url: "https://youtu.be/1NrA-Nv4Uf0", Descripcion: "Video que explica casos de aplicación de analítica de datos en LA.", Observaciones: "Muestra aplicaciones a estrategias de ventas, marketing y publicidad." },
    { Tema: "Ejemplos de uso de Data Analytics", Recurso: "https://youtu.be/mm1bTZbaTH8", Url: "https://youtu.be/mm1bTZbaTH8", Descripcion: "Video que documenta el primer viaje de Uber en Paraguay.", Observaciones: "Muestra las bondades de la aplicación de analítica de datos en Uber." },
    { Tema: "Modelos predictivos exitosos ", Recurso: "https://youtu.be/ieTh3iM0zcY", Url: "https://youtu.be/ieTh3iM0zcY", Descripcion: "Video que muestra el uso de análisis predictivo para optimizar estrategias comerciales.", Observaciones: "Webinar que presenta casos de empresas que han aplicado análisis de predicción con éxito." }
]

const experts = [
    { Nombre: "ABPMP (Asociación de Profesionales de Estrategia y transformación digital de Negocio)", Contacto: "abpmp.org.mx", Url: "http://abpmp.org.mx/", Descripcion: "Es una organización que busca promover y desarrollar la disciplina de gestión de procesos de negocio en América Latina." },
    { Nombre: "DATA, UC", Contacto: "Alexis Alvear Leyton", Url: "mailto:aalvearl@uc.cl", Descripcion: "Director ejecutivo de DATA UC, la unidad de estudios estadísticos y del Diplomado en Data Science de la Pontificia Universidad Católica de Chile" },
    { Nombre: "DATA IQ Ciudad de México", Contacto: "Empresa consultora", Url: "https://dataiq.mx/", Descripcion: "DATA IQ es una empresa consultora que reúne expertos en analítica de datos" },
    { Nombre: "Universidad Panamericana Ciudad de México, México", Contacto: "Antonieta Martínez-Velasco", Url: "mailto:amarvel.am@gmail.com", Descripcion: "Profesora investigadora " },
]

const institutions = [
    { Nombre: "Consejo Nacional de Política Económica y Social, CONPES", Url: "https://2022.dnp.gov.co/CONPES" },
    { Nombre: "Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Ministerio de Economía de El Salvador", Url: "https://www.economia.gob.sv/" },
    { Nombre: "ANDE - Agencia Nacional de Desarrollo", Url: "https://www.ande.org.uy" },
]

const books = [
    { Autor: "Díaz González, H. H., López García, A. C., & Escobedo Portillo, A. (2023).", Titulo: "The competitiveness of SMEs in the environmental industry in the State of Chihuahua.", Subtitulo: "Human Review. International Humanities Review / Revista Internacional de Humanidades, 17(3), 1–8.", Url: "https://doi.org/10.37467/revhuman.v12.4731 " },
    { Autor: "Del Carmen Romero, M., Álvarez, M. B., & Álvarez, L.", Titulo: "Análisis Exploratorio de la Literatura sobre el Uso de Datos en las pymes.", Subtitulo: "27º Reunión Anual Red pymes Mercosur, 683. ", Url: "https://redpymes.org.ar/wp-content/uploads/2022/11/Libro-Resumen-27%C2%B0-Reuni%C3%B3n-Anual-Red-Pymes-Mercosur-3.pdf#page=683" },
    { Autor: "Vásquez Erazo, Edwin Joselito, Álvarez Gavilanes, Juan Edmundo, Murillo Párraga, Dayana Yasmin, & Erazo Álvarez, Juan Carlos. (2023).", Titulo: "Educación e identidad social del emprendimiento: factores de sostenibilidad de las Pymes en Ecuador.", Subtitulo: "Conrado, 19(91), 280-285. Epub 30 de abril de 2023. Recuperado", Url: "https://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442023000200280&lng=es&tlng=es" },
    { Autor: "Zambrano Silva, D. H., Navas Espín, W. R., & Pincay Bohórquez, F. S. (2023).", Titulo: "Aplicación de redes WSN en la transformación digital de fábricas Pymes tradicionales.", Subtitulo: "RECIAMUC, 7(2), 266-272.", Url: "https://doi.org/10.26820/reciamuc/7.(2).abril.2023.266-272" }
]

const websites = [
    { Nombre: "BID (2023). Blog del BID. 6 pasos para el buen análisis de datos.", Url: "https://blogs.iadb.org/conocimiento-abierto/es/6-pasos-para-el-buen-analisis-de-datos/" },
    { Nombre: "Data Analytics: Qué es y cómo aplicarla en tu StartUP, Data Analytics: Qué es y Cómo Aplicarla en tu Startup | Startupeable", Url: "https://startupeable.com/data-analytics-startup/" },
    { Nombre: "Lagos de datos y análisis gratuitos en AWs, Servicios de análisis gratuitos - Lagos de datos gratuitos - AWS (amazon.com)", Url: "https://aws.amazon.com/es/free/analytics/" },
    { Nombre: "20 aplicaciones de Data Analytics para transformar el mundo de los negocios", Url: "https://ieec.edu.ar/20-aplicaciones-de-data-analytics-para-transformar-el-mundo-de-los-negocios/" },
    { Nombre: "3 ideas para crear un emprendimiento vinculado a Data Analytics o Data Science", Url: "https://www.digitalhouse.com/blog/3-ideas-para-crear-un-emprendimiento-vinculado-a-data-analytics-o-data-science/" },
]

