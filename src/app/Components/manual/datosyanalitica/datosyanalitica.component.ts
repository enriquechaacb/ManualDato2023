import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-datosyanalitica',
    templateUrl: './datosyanalitica.component.html',
    styleUrls: ['./datosyanalitica.component.scss']
})
export class DatosyanaliticaComponent {
    public title: string = 'Datos y analítica';
    public subtitle: string = 'Ejes temáticos';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    public Experts: any = experts;
    public Institutions: any = institutions;

    constructor(
        public _thisroute: ActivatedRoute
    ) {
        this.Secciones = [
            {Nombre: "Introducción", Valor: "Introduccion"},
            {Nombre: "Qué es la analítica de datos", Valor: "Definicion", Temas: [
                {Nombre: "Definición", Valor: "Definicion"},
                {Nombre: "El ciclo de vida de los datos", Valor: "Ciclodevida"},
                {Nombre: "Analítica de los datos", Valor: "Analitica"},
                {Nombre: "Conclusión", Valor: "Conclusion"}
            ]},
            {Nombre: "Beneficios", Valor: "Beneficios"},
            {Nombre: "Proceso", Valor: "Proceso"},
            {Nombre: "Herramientas", Valor: "Herramientas"},
            {Nombre: "Glosario", Valor: "Glosario"},
            {Nombre: "Directorio de expertos", Valor: "Expertos"},
            {Nombre: "Instituciones clave", Valor: "Instituciones"},
            {Nombre: "Literatura sugerida", Valor: "Literatura"}
        ];
        this.Seccion = "Introduccion";
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            console.log(params)
            this.Seccion = params['section'];
        });
    }
    downloadEbook(url: string){
        const d = '../../../assets/downloads/'+url+'.pdf';
        window.open(d,'_blank');
    }
}

const tools = [
    {Tema:"Implementación de herramientas de analítica de datos.",Recurso:"Casos exitosos de Empresas que usaron Analítica de Datos - DataKnow",Url:"https://www.dataknow.io/casos-exitosos-analitica-datos/",Descripcion:"Solución al problema de procesos y sistemas rudimentarios para el análisis de incidentes o siniestros, duplicidad de registros, elevados tiempos de procesamiento.",Observaciones:"Analítica de datos en una empresa aseguradora en Perú."},
    {Tema:"Implementación de la analítica de datos en las organizaciones en Latinoamérica.",Recurso:"La analítica y la Inteligencia Artificial, catalizadores de los negocios en la región (estrategiaynegocios.net)",Url:"https://www.estrategiaynegocios.net/tecnologia-cultura-digital/la-analitica-y-la-inteligencia-artificial-catalizadores-de-los-negocios-en-la-region-IF10625872",Descripcion:"La analítica puede seguir el comportamiento de los consumidores en las tiendas físicas y en línea.",Observaciones:"El análisis del comportamiento del consumidor permite diseñar campañas de Marketing con mayor nivel de personalización y conversión."},
    {Tema:"Caso de aplicación de la tecnología en servicios bancarios.",Recurso:"Caso de éxito Banorte | LexisNexis Risk Solutions",Url:"https://risk.lexisnexis.es/insights-resources/case-study/banorte-financial-crime-compliance",Descripcion:"Caso de aplicación de analítica de datos frente al combate a crímenes financieros.",Observaciones:"Este es un caso que aplica la Automatización y depuración inicial y el monitoreo continuo de los datos."},
    {Tema:"Caso de transformación digital en Grupo Bimbo",Recurso:"“Analítica de datos”: La clave para la transformación digital de Grupo Bimbo (expansion.mx)",Url:"https://expansion.mx/tecnologia/2023/01/26/analitica-de-datos-la-clave-para-la-transformacion-digital-de-grupo-bimbo",Descripcion:"“Analítica de datos”: La clave para la transformación digital de Grupo Bimbo",Observaciones:"Bimbo ha logrado mejor control de datos y optimizar con Microsoft Azure, Power BI y Azure Synapse Analytics."},
    {Tema:"Casos reales de analítica avanzada por sectores",Recurso:"www.sdggroup.com/es-ES/analitica-avanzada-de-la-ia-la-z",Url:"https://www.sdggroup.com/es-ES/analitica-avanzada-de-la-ia-la-z?__hstc=258840533.b9a0c603f3484beeb24481ae96cc0801.1611070782046.1613486431865.1613639604974.15&__hssc=258840533.4.1613639604974&__hsfp=1577037732&hsCtaTracking=acb8b699-4389-4c80-ab29-21675432daf0%7C1dd5ecba-53d0-468c-b25a-59d8b235470d",Descripcion:"eBook sobre Analítica Avanzada. ",Observaciones:"Algunos de los casos de uso reales más relevantes según el modelo analítico empleado."},
    {Tema:"Creación de experiencias inteligentes con Inteligencia artificial en Coca Cola",Recurso:"Coca Cola se apoya en el Big Data para impulsar aún más su éxito - Big Data Magazine",Url:"https://bigdatamagazine.es/coca-cola-se-apoya-en-el-big-data-para-impulsar-aun-mas-su-exito",Descripcion:"Artículo que describe cómo Coca Cola se apoya en el Big Data para impulsar aún más su éxito",Observaciones:"Coca Cola busca seguir el liderazgo de los gigantes de la tecnología al desarrollar su asistente virtual en máquinas expendedoras para mayor personalización."},
    {Tema:"El Big Data y su valor",Recurso:"https://youtu.be/w4vsFKMO7XA",Url:"https://youtu.be/w4vsFKMO7XA",Descripcion:"Video que explica el Big data en 3 minutos y sus posibles aplicaciones.",Observaciones:"Explicación sencilla conceptos como Big Data y Analítica de datos."},
    {Tema:"Ciencia de datos aplicada en los negocios",Recurso:"https://youtu.be/1NrA-Nv4Uf0",Url:"https://youtu.be/1NrA-Nv4Uf0",Descripcion:"Video que explica casos de aplicación de analítica de datos en LA.",Observaciones:"Muestra aplicaciones a estrategias de ventas, marketing y publicidad."},
    {Tema:"Ejemplos de uso de Data Analytics",Recurso:"https://youtu.be/mm1bTZbaTH8",Url:"https://youtu.be/mm1bTZbaTH8",Descripcion:"Video que documenta el primer viaje de Uber en Paraguay.",Observaciones:"Muestra las bondades de la aplicación de analítica de datos en Uber."},
    {Tema:"Modelos predictivos exitosos ",Recurso:"https://youtu.be/ieTh3iM0zcY",Url:"https://youtu.be/ieTh3iM0zcY",Descripcion:"Video que muestra el uso de análisis predictivo para optimizar estrategias comerciales.",Observaciones:"Webinar que presenta casos de empresas que han aplicado análisis de predicción con éxito."}
]

const experts = [
    {Nombre:"ABPMP (Asociación de Profesionales de Procesos de Negocio",Contacto:"http://abpmp.org.mx/",Url:"http://abpmp.org.mx/",Descripcion:"Es una organización que busca promover y desarrollar la disciplina de gestión de procesos de negocio en América Latina."},
    {Nombre:"Universidad Panamericana ",Contacto:"Antonieta Martínez-Velasco",Url:"mailto:amarvel.am@gmail.com ",Descripcion:"Profesora investigadora "},
]

const institutions = [
    {Nombre:"Consejo Nacional de Política Económica y Social, CONPES",Url:"https://2022.dnp.gov.co/CONPES"},
    {Nombre:"Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia",Url:"https://www.mintic.gov.co/portal/inicio/"},
    {Nombre:"Ministerio de Economía de El Salvador ",Url:"https://www.economia.gob.sv/"},
    {Nombre:"ANDE – Agencia Nacional de Desarrollo ",Url:"https://www.ande.org.uy"},
]