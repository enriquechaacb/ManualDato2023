import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-logistica',
    templateUrl: './logistica.component.html',
    styleUrls: ['./../procesos.component.scss'],
    animations: [sectionsAnimation]
})
export class LogisticaComponent {
    public title: string = 'Logística';
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


const words = [
    {Palabra:"WMS (Warehouse Management System)", Significado:"Es un Sistema de Gestión de Almacenes, el software permite administrar y controlar de manera eficiente las operaciones dentro de un almacén o centro de distribución. Facilita el seguimiento y la optimización de los flujos de inventario, los pedidos, la recepción y el despacho de mercancías.", Fuente:""},
    {Palabra:"Sostenibilidad", Significado:"Se refiere a la capacidad de una empresa o industria para satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades. Implica equilibrar el crecimiento económico con la protección del medio ambiente y el bienestar social.", Fuente:""},
    {Palabra:"Industria 4.0", Significado:"Alude a la integración de tecnologías digitales avanzadas en los procesos de producción y logística para mejorar la eficiencia y la automatización. Incluye tecnologías como el Internet de las cosas (IoT), la inteligencia artificial (IA), la robótica y el análisis de datos.", Fuente:""},
    {Palabra:"IoT (Internet de las cosas)", Significado:"Hace alusión a una red de objetos físicos interconectados que recopilan y comparten datos a través de internet. En logística, se utilizan sensores y dispositivos IoT para monitorear el movimiento de mercancías, las condiciones de almacenamiento y el rendimiento de los vehículos de transporte y tiempos de entrega de los productos.", Fuente:""}, 
    {Palabra:"IA (Inteligencia Artificial)", Significado:"Alude a los procesos simulación de la inteligencia humana por parte de máquinas, especialmente sistemas de computadoras. En logística, la IA se utiliza para predecir la demanda, optimizar rutas de entrega, mejorar la toma de decisiones y automatizar tareas complejas.", Fuente:""},
    {Palabra:"Robótica", Significado:" Se refiere a la tecnología que permite el diseño, construcción y operación de robots. En logística, los robots pueden ser utilizados para la automatización de tareas como el picking, empaquetado y transporte de mercancías.", Fuente:""},
    {Palabra:"Blockchain", Significado:"Es una tecnología de registro de datos distribuido que permite la creación de registros inmutables y transparentes. En logística, se utiliza para garantizar la trazabilidad y autenticidad de las transacciones en la cadena de suministro.", Fuente:""},
    {Palabra:"Socios Logísticos", Significado:"Los socios logísticos son empresas o proveedores externos que colaboran con una organización para llevar a cabo actividades logísticas específicas. Pueden ser empresas de transporte, almacenes externos, empresas de distribución, entre otros.", Fuente:""},
    {Palabra:"Modelos Push", Significado:"En logística es un enfoque de producción y distribución en el que los productos son fabricados y enviados a los puntos de venta o almacenes con base en proyecciones de demanda y estimaciones de inventario.", Fuente:""},
    {Palabra:"Modelos Pull", Significado:"En logística se refiere a un enfoque de producción y distribución en el que los productos son fabricados o enviados en función de la demanda real. Es decir, los productos son producidos o enviados solo cuando se realiza una orden específica.", Fuente:""},
    {Palabra:"RFID (Identificación por Radiofrecuencia)", Significado:"RFID es una tecnología que utiliza señales de radiofrecuencia para identificar y rastrear objetos mediante etiquetas RFID. Estas etiquetas contienen información que se puede leer o modificar sin necesidad de contacto físico.", Fuente:""},
    {Palabra:"ERP (Planificación de Recursos Empresariales)", Significado:"Un sistema ERP es un software que integra y gestiona la mayoría de los procesos de una empresa, incluidos los relacionados con logística, finanzas, recursos humanos, ventas, compras, entre otros.", Fuente:""},
    {Palabra:"On Premise", Significado:"Se refiere a la instalación y ejecución de software o aplicaciones en servidores físicos ubicados dentro de las instalaciones de una empresa. Es decir, el software se implementa en servidores internos y se administra por el propio personal de TI de la empresa.", Fuente:""},
    {Palabra:"SaaS (Software como Servicio)", Significado:"Es un modelo de distribución de software en el que el proveedor de servicios aloja y mantiene la aplicación en sus servidores y la ofrece a los usuarios a través de internet. Los usuarios pueden acceder al software mediante un navegador web sin necesidad de instalarlo en sus propios dispositivos.", Fuente:""},
    {Palabra:"Picking", Significado:"Es el proceso de recolección y selección de productos individuales de un almacén o inventario para cumplir con un pedido específico. Es una parte fundamental de las operaciones de logística y distribución.", Fuente:""},
    {Palabra:"Realidad Aumentada", Significado:" Es una tecnología que superpone información digital, imágenes o elementos virtuales en el entorno físico del usuario a través de un dispositivo, como un smartphone o gafas especiales para aumentar el tamaño de los objetos, visualizarlos mejor o facilitar la ubicación de los productos. ", Fuente:""},
    {Palabra:"Cobots (Robots Colaborativos)", Significado:"Son robots diseñados para trabajar de manera segura y colaborativa con los seres humanos en el mismo espacio de trabajo. Son capaces de realizar tareas repetitivas y pesadas, lo que mejora la eficiencia y reduce la carga de trabajo para los empleados.", Fuente:""},
    {Palabra:"EPIs (Equipos de Protección Individual)", Significado:"Los EPIs son elementos de seguridad y protección que los trabajadores deben utilizar para minimizar el riesgo de accidentes o lesiones en el lugar de trabajo. Incluyen cascos, guantes, gafas de seguridad, entre otros.", Fuente:""},
    {Palabra:"Geocodificación", Significado:"Es el proceso de asignar coordenadas geográficas (latitud y longitud) a una dirección o ubicación específica. Permite identificar la posición exacta de un lugar en un mapa o sistema de navegación.", Fuente:""}
]

const tools = [
    { Tema: "2.1 Introducción a la logística ", Recurso: "Video de TEDxAlcoi. No es Magia, es Logística.", Url: "https://www.youtube.com/watch?v=dtOqiwLalAk", Descripcion: "Vídeo explicativo de la logística.",Observaciones:"Video que ejemplifica un caso de éxito" },
    { Tema: "3.1 Introducción a la cadena de suministro", Recurso: "Platzi. Video ejemplo de la estrategia que cambió la industria del entretenimiento", Url: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Descripcion: "Vídeo que narra cómo Netflix derrotó al gigante de la renta de películas Blockbuster.",Observaciones:"Video que ejemplifica un caso de éxito " },
    { Tema: "3.2 Introducción a la logística en el comercio electrónico", Recurso: "Formato de estrategia para Satisfacer las Necesidades del Cliente - PYME de Ventas en Línea (adjunto)", Url: "", Descripcion: "Formato que permite definir una estrategia comercial habiendo definido las necesidades de los clientes",Observaciones:"Formato para descarga" },
    { Tema: "3.3 Cadena de valor y cadena de suministro", Recurso: "Euge Oller presenta y explica la propuesta de valor. ", Url: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Descripcion: "Video que explica la manera de elaborar una propuesta de valor utilizando el lienzo Canvas",Observaciones:"Video explicativo del modelo " },
    { Tema: "3.3. Cadena de valor y cadena de suministro", Recurso: "EAE (2018). Cadena logística VS cadena de suministro, no las confundas", Url: "https://retos-operaciones-logistica.eae.es/cadena-logistica-vs-cadena-de-suministro-no-las-confundas/", Descripcion: "Sitio web de EAE Business School Barcelona que explica las definiciones y características de la logística y la cadena de suministro. ",Observaciones:"Sitio web que aborda el tema" },
    { Tema: "3.4 Modelos de logística push y pull", Recurso: "DATATEC organización que agrupa a consultores expertos en el tema", Url: "https://www.datadec.es/blog/5-tecnologias-para-almacenes-que-debes-aplicar", Descripcion: "Sitio web donde se explican cinco tecnologías para utilizar en almacenes",Observaciones:"Sitio web explicativo del tema" },
    { Tema: "3.4 Modelos de logística push y pull", Recurso: "Cyberclick Marketing digital (2022). Marketing Push & Pull ¿Qué es y cuál escoger?", Url: "https://www.youtube.com/watch?v=m1n3df0ykY0  ", Descripcion: "Video que explica la manera de escoger uno de los dos modelos",Observaciones:"Video vinculado al tema" },
    { Tema: "3.4 Modelos de logística push y pull", Recurso: "Mira cómo se hace. ¿Qué diferencias hay entre el sistema Push y Pull en el control de inventarios por incrementos (2022)?", Url: "https://www.youtube.com/watch?v=_hufTGem8iY", Descripcion: "Video explicativo de las diferencias entre Puss y Pull en el control de inventarios",Observaciones:"Video vinculado al tema " },
    { Tema: "3.5 Sistemas de gestión de almacenes", Recurso: "Soluciones Logísticas y Aduanas. ", Url: "https://www.youtube.com/watch?v=gxz_S2W6VFo ", Descripcion: "Video explicativo de la dinámica, consejos y herramientas útiles de los tipos de sistemas de gestión de almacenes",Observaciones:"Video vinculado al tema " },
    { Tema: "3.6 Gestión de inventarios", Recurso: "Control de almacenes", Url: "https://www.youtube.com/watch?v=d7TMj6UiYXo", Descripcion: "Video que ofrece los pasos para controlar un almacén desde cero",Observaciones:"Video explicativo del tema" },
    { Tema: "3.6 Gestión de inventarios", Recurso: "El Inge Francisco. Cómo crear un control de inventario dinámico con entradas, salidas y stock", Url: "https://www.youtube.com/watch?v=xPgY1sVAajw ", Descripcion: "Video que explica la manera de crear un control de inventario dinámico con entradas, salidas y stock",Observaciones:"Video vinculado al tema" },
    { Tema: "3.7 Gestión de órdenes de compra, recepción y despacho de productos", Recurso: "Luis Torres. Orden de compra en Excel VBA.", Url: "https://www.youtube.com/watch?v=iHrYRvyL4I0", Descripcion: "Video que explica la manera de crear una orden de compra en Excel",Observaciones:"Video vinculado al tema" },
    { Tema: "3.7 Gestión de órdenes de compra, recepción y despacho de productos", Recurso: "Yornandy Alonso Martínez Pérez. Control y solicitud de mercancías. Gestión de Compras ", Url: "https://www.youtube.com/watch?v=Z9QSA9nVdIc", Descripcion: "Video que explica la manera de crear un control y solicitud de mercancías y gestión de compras",Observaciones:"Video vinculado al tema" },
    { Tema: "3.8  Optimización de rutas", Recurso: "Distribución y planificación de rutas ", Url: "https://www.youtube.com/watch?v=FBDN7mUvdjo", Descripcion: "Video que explica la manera de hacer la distribución y planificación de rutas con tips y herramientas clásicas",Observaciones:"Video vinculado al tema" },
    { Tema: "3.8  Optimización de rutas", Recurso: "Programación de rutas en Excel ", Url: "https://www.youtube.com/watch?v=vJ3IV3lOz0c", Descripcion: "Video tutorial explicativo de la manera de hacer la distribución de rutas con Excel ",Observaciones:"Video vinculado al tema" },
    { Tema: "3.9 Herramientas de logística y envío en el comercio electrónico", Recurso: "ESAN Graduate School of Business", Url: "https://www.youtube.com/watch?v=P2a2t9LuXc8", Descripcion: "Video explicativo de la manera de entender Logística tradicional versus la logística para e-commerce.",Observaciones:"Video vinculado al tema" },
    { Tema: "3.9 Herramientas de logística y envío en el comercio electrónico", Recurso: "Juan Merodio explica tres herramientas para comercio electrónico", Url: "https://www.youtube.com/watch?v=mXCotdzihZ0", Descripcion: "Video que explica 3 Herramientas Gratuitas para tu Comercio Electrónico",Observaciones:"Video vinculado al tema" }
]




const experts = [
    {Nombre:"Tecnológico de Monterrey y Universidad Panamericana en México",Contacto:"Mtro. Leobardo Ramírez Ramírez",Url:"",Descripcion:"Profesor y especialista"},
    {Nombre:"Universidad Panamericana México",Contacto:"Mtro. Moises Cielak ",Url:"",Descripcion:"Consultor y profesor"},
    {Nombre:"Facultad de Ingeniera Universidad Panamericana",Contacto:"Mtra. Claudia Arias Portela",Url:"mailto:cyarias@up.edu.mx ",Descripcion:"Jefe de Academia del área de operaciones. Profesora investigadora"},
]

const institutions = [
    {Nombre:"Organización Mundial del Comercio (OMC)",Resumen:"La OMC establece reglas internacionales para el comercio entre países, lo cual puede afectar las operaciones de la cadena de suministro en términos de aranceles, barreras y acuerdos comerciales internacionales.",Url:"https://www.wto.org/indexsp.htm"},
    {Nombre:"Organización de las Naciones Unidas (ONU)",Resumen:"La ONU puede promover normativas y estándares globales en áreas como el transporte, medio ambiente y derechos humanos, que pueden influir en la cadena de suministro de las empresas.",Url:"https://www.un.org/es/about-us"},
    {Nombre:"Organización Internacional de Normalización (ISO)",Resumen:"La ISO desarrolla estándares internacionales en diversas áreas, como calidad, seguridad y gestión ambiental, que pueden ser aplicables a la cadena de suministro.",Url:"https://www.ioe-emp.org/es/organizaciones-internacionales/organizacion-internacional-para-la-normalizacion"},
    {Nombre:"Administración de Alimentos y Medicamentos (FDA) (Estados Unidos)",Resumen:"En el caso de la industria alimentaria y farmacéutica, la FDA establece regulaciones específicas para asegurar la calidad y seguridad de los productos.",Url:"https://www.fda.gov/"},
    {Nombre:"Agencias gubernamentales de comercio y aduanas",Resumen:"A nivel nacional, las agencias gubernamentales de comercio y aduanas establecen regulaciones relacionadas con la importación y exportación de mercancías, lo cual puede afectar los procesos de la cadena de suministro en el ámbito local.",Url:""},
    {Nombre:"Cámaras de comercio",Resumen:"Las cámaras de comercio locales pueden brindar información sobre las regulaciones y normativas específicas del país o región donde opera una empresa y pueden servir como recursos para resolver problemas y obtener asesoría.",Url:""},
    {Nombre:"Asociaciones y gremios industriales",Resumen:"Las asociaciones y gremios relacionados con la industria específica en la que opera una empresa pueden tener conocimientos especializados sobre regulaciones y normativas específicas que afectan la cadena de suministro de esa industria.",Url:""}
]

const books = [
    {Autor:"Quintero, J., & Sánchez, J. (2006).",Titulo:"La cadena de valor: Una herramienta del pensamiento estratégico.",Subtitulo:"Telos, 8(3), 377-389.",Url:""},
    {Autor:"John, C., John, L., Robert, N., & Brian, G. (2017).",Titulo:"Administración de la Cadena de Suministro (10th ed.).",Subtitulo:"Cengage Learning Editores SA de CV.",Url:"https://up.vitalsource.com/books/9786075265254"},
    {Autor:"Murphy, P. R. y Knemeyer, A. M. (2015).",Titulo:"Logística contemporánea (11a. ed.) (Trad. J. E. Murrieta Murrieta).",Subtitulo:"México: Pearson Educación.",Url:"https://up.vitalsource.com/books"},
    {Autor:"Canto, J. V. (2013).",Titulo:"La cadena de valor como herramienta de gestión para una empresa de servicios.",Subtitulo:"Industrial Data, 16(1), 17-28.",Url:""},
    {Autor:"Ag, K. (2023, May 23).",Titulo:"Diferencia entre cadena de valor y cadena de suministro | KNAPP.",Subtitulo:"KNAPP.",Url:"https://www.knapp.com/es/saber/blog/diferencia-cadena-de-valor-vs-cadena-de-suministro/"},
    {Autor:"Escudero, R. S. (2020).",Titulo:"Gestión logística internacional (1st ed.). ",Subtitulo:"ECOE Ediciones. (Original work published 2020) Retrieved from ",Url:"https://www.perlego.com/book/3780367/gestin-logstica-internacional-pdf"}
]

const websites = [
    {Nombre:"Supply Chain Digital",Resumen:"Este sitio web ofrece noticias, análisis y artículos sobre las últimas tendencias y desarrollos en la cadena de suministro a nivel global. También cubre temas como logística, transporte, tecnología y sostenibilidad. Es una fuente valiosa de información para mantenerse actualizado sobre la industria.",Url:"https://www.supplychaindigital.com/"},
    {Nombre:"Logística 360",Resumen:"Este portal ofrece una amplia gama de recursos y contenido relacionado con logística y cadena de suministro. Incluye artículos, estudios de caso, entrevistas a expertos y noticias del sector. Además, cuenta con una sección de eventos y webinars para quienes deseen profundizar en temas específicos.",Url:"https://www.logistica360.pe/"},
    {Nombre:"Supply Chain Management Review",Resumen:"Este sitio web se enfoca en ofrecer información estratégica y perspectivas en el campo de la gestión de la cadena de suministro. Los artículos y análisis publicados en el sitio abarcan temas como planificación, distribución, tecnología, sostenibilidad y mejores prácticas.",Url:"https://www.scmr.com/"},
    {Nombre:"World Economic Forum - Supply Chain & Transport",Resumen:"Este recurso del Foro Económico Mundial proporciona investigaciones, informes y análisis sobre la logística y el transporte, con un enfoque particular en la sostenibilidad y la innovación en la cadena de suministro global.",Url:"https://www.weforum.org/reports/supply-chain-and-transportation"},
    {Nombre:"Cerasis Blog",Resumen:"ste blog se centra en la logística y la gestión de la cadena de suministro, brindando consejos prácticos, mejores prácticas y análisis sobre temas relevantes para profesionales del sector. Es una fuente útil para aquellos que buscan información práctica y aplicable a su negocio.",Url:"https://cerasis.com/blog/"},
    {Nombre:"Logística y Transporte",Resumen:"Este sitio web se dedica a informar sobre noticias y novedades relacionadas con la logística y el transporte en América Latina. Además de noticias y análisis, también ofrece recursos educativos y entrevistas con líderes de la industria.",Url:"https://www.logisticaytransporte.es/"}
]

