import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-modelosmatematicos',
    templateUrl: './modelosmatematicos.component.html',
    styleUrls: ['../datosyanalitica.component.scss']
})
export class ModelosmatematicosComponent {
    public title: string = 'Modelos matemáticos';
    public subtitle: string = 'Datos y Analítica';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    public Experts: any = experts;
    public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public Websites: any = websites;
    public Breadcrumbs: any = breadcrumbs;

    constructor(
        public _thisroute: ActivatedRoute
    ) {
        this.Secciones = [
            {Nombre: "Introducción", Valor: "Introduccion"},
            // {Nombre: "Qué es la analítica de datos", Valor: "Definicion", Temas: [
            //     {Nombre: "Definición", Valor: "Definicion"},
            //     {Nombre: "El ciclo de vida de los datos", Valor: "Ciclodevida"},
            //     {Nombre: "Analítica de los datos", Valor: "Analitica"},
            //     {Nombre: "Conclusión", Valor: "Conclusion"}
            // ]},
            {Nombre: "Beneficios", Valor: "Beneficios"},
            {Nombre: "Proceso", Valor: "Proceso"},
            {Nombre: "Desarrollo", Valor: "Desarrollo"},
            {Nombre: "Herramientas", Valor: "Herramientas"},
            {Nombre: "Glosario", Valor: "Glosario"},
            {Nombre: "Directorio de expertos", Valor: "Expertos"},
            {Nombre: "Instituciones clave", Valor: "Instituciones"},
            {Nombre: "Casos de éxito",Valor:"Casos"},
            {Nombre: "Literatura sugerida", Valor: "Literatura"},
            {Nombre: "Sitios web", Valor: "WebSites"},
            {Nombre: "E-book", Valor: "analitica_de_datos", EsExterno: true}
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

const breadcrumbs = [
    {Nombre:"Manual",Url:"../../../"},
    {Nombre:"Datos y Analítica",Url:"../../"},
    {Nombre:"Modelos matemáticos",Url:"../Introduccion"}
]

const tools = [
    {Tema:"Modelos de Simulación",Recurso:"Artículo que describe la aplicación del modelado matemático aplicado al sector agrícola en Cuba.",Url:"http://scielo.sld.cu/scielo.php?pid=S2071-00542011000200008&script=sci_arttext",Observaciones:"En el documento se muestran las bondades del uso de modelos matemáticos de simulación en el sector agrícola, aplicable a otros sectores también."},
    {Tema:"Modelos de Simulación",Recurso:"Página Web que muestra cómo los modelos matemáticos de simulación son una alternativa viable para diseñar nuevos procesos en las empresas.",Url:"https://www.ainia.es/ainia-news/simulacion-procesos-modelos-matematicos-utilizas/#:~:text=La%20simulación%20de%20procesos%20con,un%20procedimiento%20útil%20y%20económico.",Observaciones:"Este caso es una aplicación en la industria alimenticia, aplicable a diversos sectores."},
    {Tema:"Modelos de proyección",Recurso:"Video que muestra la importancia de los modelos matemáticos para predecir o proyectar procesos. ",Url:"https://www.youtube.com/watch?v=5L3wJymM5NE",Observaciones:"En este video se explica cómo los modelos matemáticos responden objetivamente a los hechos reales."},
    {Tema:"Modelos de proyección",Recurso:"Artículo sobre la importancia de los modelos de proyección en la proyección financiera.",Url:"https://dialnet.unirioja.es/servlet/articulo?codigo=8679437",Observaciones:"Este es un caso de aplicación de modelos matemáticos a una empresa del sector de la construcción en México, parar determinar el estrés financiero de la misma y la sensibilidad a factores exógenos en las empresas."},
    {Tema:"Modelos de optimización",Recurso:"Libro digital en el que se aborda la metodología para formular y aplicar un modelo matemático de optimización.",Url:"http://repository.unipiloto.edu.co/handle/20.500.12277/6637",Observaciones:"En este documento se hacen análisis de casos que se resuelven por medio de modelado matemático."},
    {Tema:"Modelos de optimización",Recurso:"Video que describe la aplicación de modelos de optimización con ejemplos.",Url:"https://www.youtube.com/watch?v=lxln4J-GIGY",Observaciones:"Da una introducción general al tema y resuelve algunos ejemplos de aplicación."},
    {Tema:"Modelos de Redes y Grafos",Recurso:"Artículo introductorio a la teoría de grafos.",Url:"https://redined.educacion.gob.es/xmlui/bitstream/handle/11162/13526/011-026.pdf?sequence=1",Observaciones:"Describe la aplicación de la teoría de grafos en problemas de redes de comunicación y transporte."},
    {Tema:"Modelos de Redes y Grafos",Recurso:"Video introducción a Teoría de grafos como aplicación de problemas tales como redes sociales.",Url:"https://www.youtube.com/watch?v=F5Xjpg0-NhM",Observaciones:"Aborda los conceptos teóricos de la teoría de grafos explicados de manera accesible a todo público."}
]
const words = [
    {Palabra:"Grafos", Significado:"En matemáticas y ciencias de la computación, un grafo es un conjunto de objetos llamados vértices o nodos unidos por enlaces llamados aristas o arcos, que permiten representar relaciones binarias entre elementos de un conjunto.", Fuente:"(Gross & Yellen, 2003)"},
    {Palabra:"Modelo matemático", Significado:"Un modelo matemático describe teóricamente un objeto que existe fuera del campo de las matemáticas. Las previsiones del tiempo y los pronósticos económicos, por ejemplo, están basados en modelos matemáticos. Su éxito o fracaso depende de la precisión con la que se construya esta representación numérica, la fidelidad con la que se concreticen hechos y situaciones naturales en forma de variables relacionadas entre sí.", Fuente:"(Pérez G.,2008)"},
    {Palabra:"Predicción matemática", Significado:"El modelado predictivo utiliza métodos matemáticos y de cálculo para predecir un evento o un resultado. Los pronósticos o predicciones son una herramienta que permite a la gerencia tener una mejor base para planificar, al tomar en cuenta datos pasados y presentes para predecir eventos futuros que afectarán a la organización.", Fuente:"(Predicción o pronósticos en la administración de empresas, 2017)"}
]

const experts = [
    {Nombre:"ABPMP (Asociación de Profesionales de Procesos de Negocio",Contacto:"",Url:"http://abpmp.org.mx/",Descripcion:"Es una organización que busca promover y desarrollar la disciplina de gestión de procesos de negocio en América Latina."},
    {Nombre:"Universidad Panamericana",Contacto:"Antonieta Martínez-Velasco",Url:"mailto:amarvel.am@gmail.com",Descripcion:"Profesora investigadora"}
]

const institutions = [
    {Nombre:"Consejo Nacional de Política Económica y Social, CONPES",Url:"https://2022.dnp.gov.co/CONPES"},
    {Nombre:"Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia",Url:"https://www.mintic.gov.co/portal/inicio/"},
    {Nombre:"Ministerio de Economía de El Salvador ",Url:"https://www.economia.gob.sv/"},
    {Nombre:"ANDE - Agencia Nacional de Desarrollo ",Url:"https://www.ande.org.uy"}
]

const books = [
    {Autor:"González V., María G., Torres-Ovalle, S., Moreno H, V. y Hernández J., E. (2018).",Titulo:"Modelación matemática para la gestión de pymes. Compendio de Investigación Academia Journals Chetumal, Quintana Roo, México.",Subtitulo:"Recuperado de ",Url:"https://static1.squarespace.com/static/55564587e4b0d1d3fb1eda6b/t/6009dd45775971664c31f52b/1611259227313/Compendio+de+Investigación+Academia+Journals+Chetumal+2018+-+Tomo+17.pdf"},
    {Autor:"López, R. F., Alonso, J. A. V., Silverio, A. Q., & González, L. D. (2018).",Titulo:"La demanda turística en una cadena hotelera. series temporales para un modelo de predicción.",Subtitulo:"Visión de Futuro, 25(1), 109–134.",Url:"https://visiondefuturo.fce.unam.edu.ar/index.php/visiondefuturo/index"},
    {Autor:"Marulanda, C., López, M., & Mejía, M. (2017).",Titulo:"Minería de datos en gestión del conocimiento de pymes de Colombia.",Subtitulo:"Revista Virtual Universidad Católica Del Norte, 50, 224–237.",Url:"https://revistavirtual.ucn.edu.co/index.php/RevistaUCN/article/view/821/1339"},
    {Autor:"Quiroga Parra, D. (2003).",Titulo:"MODELO MATEMÁTICO PARA DETERMINAR LA COMPETITIVIDAD DE LAS PYME’S. ",Subtitulo:"Revista Docencia Universitaria, 4(1). Recuperado a partir de",Url:"https://revistas.uis.edu.co/index.php/revistadocencia/article/view/1364"},
    {Autor:"Predicción o pronósticos en la administración de empresas. (2017).",Titulo:"Deguate.com",Subtitulo:"",Url:"https://www.deguate.com/gestion-administracion/prediccion-pronosticos-administracion-empresas.shtml"}
]

const websites = [
    {Nombre:"Danalytics",Url:"https://www.danalyticspro.co"},
    {Nombre:"BMN Funciones elementales para construir modelos matemáticos",Url:"http://www.bnm.me.gov.ar/giga1/documentos/EL001843.pdf"}
]