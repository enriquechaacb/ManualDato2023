import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
    selector: 'app-indicadores',
    templateUrl: './indicadores.component.html',
    styleUrls: ['../organizacionypersonas.component.scss'],
    animations: [sectionsAnimation]
})
export class IndicadoresComponent {
    public title: string = 'Indicadores y métricas en entornos digitales';
    public subtitle: string = 'Organización y personas';
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
    { Palabra: "Indicador", Significado: "Es un conjunto de datos que ayudan a medir objetivamente la evolución de un proceso o de una actividad.", Fuente: "(AENOR Asociación española de Normalización y Certificación, 2003)." },
    { Palabra: "KPI", Significado: "(Key performance indicator, por sus siglas en inglés) son indicadores que permiten medir los objetivos organizacionales, son relevantes para la comunidad de negocios porque ayudan a impulsar mejoras y a enfocar los esfuerzos y recursos en lo que es importante, ya que se basan en los objetivos y metas que tienen trazadas las organizaciones.", Fuente: "" },
    { Palabra: "Métricas digitales", Significado: "Son medidas cuantitativas y cualitativas utilizadas para evaluar y analizar el desempeño de las actividades en entornos digitales. Estas métricas se obtienen a través del seguimiento y análisis de los datos generados por las interacciones y transacciones en línea, como el tráfico web, las redes sociales, las conversiones, entre otros.", Fuente: "" },
    { Palabra: "Tasa de Conversión", Significado: "Mide el porcentaje de visitantes de un sitio web o plataforma digital que realiza una acción deseada, como realizar una compra, llenar un formulario de contacto o suscribirse a una lista de correo. Esta métrica es crucial para medir la efectividad de su sitio web o página de destino en convertir visitantes en clientes.", Fuente: "" },
    { Palabra: "Tasa de Rebote", Significado: "Se refiere al porcentaje de visitantes que abandonan un sitio web o una página después de ver solo una página. Una alta tasa de rebote generalmente indica que los visitantes no están encontrando lo que buscaban o no están interactuando con el contenido. Esta métrica es determinante para evaluar la calidad y relevancia del contenido de la empresa, ya que una tasa de rebote alta puede indicar que la página no cumple con las expectativas de los visitantes.", Fuente: "" },
    { Palabra: "Engagement", Significado: "por su acepción en inglés, se refiere al vínculo que se establece entre el comprador y vendedor. Se refiere a la medida en que los usuarios interactúan y se involucran con el contenido y las acciones en línea de la empresa. Puede medirse a través de likes, comentarios, publicaciones compartidas, tiempo de permanencia en el sitio, entre otros.", Fuente: "" },
    { Palabra: "Retención", Significado: "Mide la cantidad de usuarios que regresan a una plataforma o sitio web después de su primera visita. Puede ser medido a través de la tasa de retención o la frecuencia de visitas repetidas. Es importante para evaluar la satisfacción y el valor a largo plazo que el sitio o plataforma brinda a los usuarios.", Fuente: "" },
    { Palabra: "Experiencia del usuario (UX)", Significado: "La medición de UX (por sus siglas en inglés User Experience) se enfoca en evaluar la facilidad de uso, la eficiencia y la satisfacción general de los usuarios al interactuar con una plataforma digital. Su medición es crucial para asegurar que los usuarios tengan una experiencia positiva en línea.", Fuente: "" }
]
const tools = [
    { Tema: "Introducción a los indicadores y métricas para PYME", Recurso: "Curso en línea sobre conceptos fundamentales de Analítica Digital", Url: "https://www.udemy.com/course/define-tus-kpis-y-objetivos-en-el-entorno-digital/ ", Descripcion: "Define tus KPIs y objetivos en el entorno digital." },
    { Tema: "Selección e implementación de indicadores apropiados", Recurso: "Guía completa que acompaña con videos y ejercicios", Url: "https://www.ingenioempresa.com/indicadores-una-guia-incompleta/ ", Descripcion: "Publicación sobre indicadores de gestión: Definición, elaboración e interpretación con ejemplo práctico" },
    { Tema: "Métricas en un entorno digital y su importancia para la PYME", Recurso: "Programa intensivo, en formato de diplomado. ", Url: "https://www.techtitute.com/pa/escuela-de-negocios/diplomado/metricas-analiticas-marca-reputacion ", Descripcion: "Curso Universitario en Métricas y Analíticas de Marca y Reputación" },
    { Tema: "Métricas en un entorno digital y su importancia para la PYME", Recurso: "Las 15 métricas más importantes en Marketing digital. ", Url: "https://www.iebschool.com/blog/metricas-marketing-digital-marketing-digital/", Descripcion: "Un artículo que explica con detalle cada una de las métricas clave del marketing digital y cómo medirlas " },
    { Tema: "Guía de Kpis", Recurso: "Publicación de guía para conocer más sobre los conceptos vistos.", Url: "https://tudashboard.com/guia-de-kpis/ ", Descripcion: "Entender lo básico sobre los indicadores clave de rendimiento. " },
    { Tema: "Indicadores y métricas", Recurso: "5 indicadores para medir el impacto de la transformación digital", Url: "https://estrategia-td.com/5-indicadores-para-medir-el-impacto-de-la-transformacion-digital/", Descripcion: "Artículo de un blog especializado en transformación digital " }
]

const experts = [
    { Nombre: "Métrica Agencia SEO Tenerife", Contacto: "info@metricaseo.com", Url: "mailto:info@metricaseo.com", Descripcion: "Trabajan la visibilidad, presencia y reputación de la marca en internet. Teléfono 659 354 477" },
    { Nombre: "IEBS Scholl Escuela de Negocios de la Innovación y los Emprendedores", Contacto: "info@iebschool.com", Url: "mailto:info@iebschool.com", Descripcion: "Programas de formación que van desde cursos, diplomados, posgrados y masters enfocados en innovación. (+34) 919 058 055 - Madrid (+34) 931 833 199 - Barcelona (+59) 8 2711 6748 - Montevideo (+52) 55 1163 8927 - Ciudad de México" },
    { Nombre: "Life on Mars", Contacto: "Miguel Ángel Escobar Chávez", Url: "mailto:boris@lifeonmars.com.mx", Descripcion: "Agencia digital especializada en proyectos de innovación tecnológica con enfoque en pymes de Latinoamérica." },
    { Nombre: "Life on Mars", Contacto: "Sandra Nópal Rivera", Url: "mailto:san@lifeonmars.com.mx", Descripcion: "Agencia digital especializada en proyectos de innovación tecnológica con enfoque en pymes de Latinoamérica." }
]

const institutions = [
    { Nombre: "Ministerio de Trabajo y Previsión Social, Gobierno de El Salvador. Instancia rectora de velar por la armonía en las relaciones obrero-patronales. Responsable de formular, ejecutar y supervisar la política sociolaboral del país.", Url: "https://www.mtps.gob.sv/" },
    { Nombre: "Ministerio de Economía de El Salvador es la entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.", Url: "https://www.economia.gob.sv/" },
    { Nombre: "Ministerio de Educación, Ciencia y Tecnología de El Salvador, encargado de elaborar Políticas orientadas al desarrollo tecnológico del país.", Url: "https://www.mined.gob.sv/" },
    { Nombre: "Ministerio  del Trabajo en Colombia, responsable de promover el empleo digno, proteger los derechos de los colombianos en capacidad de trabajar, construir más y mejores empresas, fomentar la calidad del talento humano y convertir el trabajo como eje del desarrollo humano.", Url: "https://www.mintrabajo.gov.co/web/guest/inicio" },
    { Nombre: "Ministerio de Tecnologías de la Información y Comunicaciones de Colombia, está encargado de las tecnologías de la información y la comunicación.", Url: "https://www.mintic.gov.co/portal/inicio/" },
    { Nombre: "Ministerio de Trabajo y Seguridad Social en Uruguay. Institución rectora en el diseño, implementación y evaluación de las políticas de empleo, formación profesional, relaciones laborales y seguridad social a nivel nacional. Promueve el diálogo social, trabajo decente y la cultura del trabajo. ", Url: "https://www.gub.uy/ministerio-trabajo-seguridad-social/" },
    { Nombre: "Dirección Nacional de Innovación, Ciencia y Tecnología Uruguay, instancia de articulación y vinculación para el desarrollo de la ciencia y la tecnología de Uruguay", Url: "https://www.gub.uy/ministerio-educacion-cultura/direccion-innovacion-ciencia-tecnologia" },
    { Nombre: "Organización Internacional del Trabajo (OIT). Es la instancia tripartita de la ONU que reúne a gobiernos, empleadores y trabajadores para establecer normas de trabajo, formular políticas y elaborar programas promoviendo el trabajo de todos mujeres y hombres. ", Url: "https://www.ilo.org/global/lang--es/index.htm" },
]

const books = [
    { Autor: "Castro A., Virgen V. (2014).", Titulo: "Principales indicadores de crecimiento empresarial en las pequeñas y medianas empresas: Caso Santiago de Cali - Colombia.", Subtitulo: "Revista Internacional Administración & Finanzas, Universidad del Valle - Colombia 7- 6, pp27-43.", Url: "" },
    { Autor: "Gobierno de España (2021).", Titulo: "Plan de Digitalización de pymes 2021-2025. ", Subtitulo: "España Puede. Agenda 2030. ", Url: "https://portal.mineco.gob.es/RecursosArticulo/mineco/ministerio/ficheros/210127_plan_digitalizacion_pymes.pdf" }
]

const websites = [
    { Nombre: "estrategia-td.com", Url: "https://estrategia-td.com" },
    { Nombre: "www.jellyfish.com/es-es/blog/la-necesaria-evolucion-de-las-metricas-y-kpis-en-el-marketing-digital/", Url: "https://www.jellyfish.com/es-es/blog/la-necesaria-evolucion-de-las-metricas-y-kpis-en-el-marketing-digital/" },
]



