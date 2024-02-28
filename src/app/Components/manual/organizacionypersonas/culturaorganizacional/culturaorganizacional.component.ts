import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
  selector: 'app-culturaorganizacional',
  templateUrl: './culturaorganizacional.component.html',
  styleUrls: ['../organizacionypersonas.component.scss'],
  animations: [sectionsAnimation]
})
export class CulturaorganizacionalComponent {
    public title: string = 'Cultura organizacional';
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
    {Palabra:"Cultura organizacional", Significado:"La cultura organizacional se refiere al sistema de creencias y valores compartidos a lo largo y ancho de una organización, en todos los niveles, desde la gerencia hasta el personal administrativo, incluyendo su relación con proveedores, clientes e incluso procesos de reclutamiento. Este sistema orienta los comportamientos diarios y, principalmente, define la visión que tiene de sí misma y del entorno", Fuente:"(Raffaele, 2021)"},
    {Palabra:"Gestión del talento humano en la era digital", Significado:"s la adopción de tecnologías digitales en favor de las necesidades del negocio, incrementar el valor para los clientes y potenciar las capacidades y competencias de los trabajadores y empleados. Implica formas de trabajo más flexibles y eficientes sin descuidar las necesidades del cliente.", Fuente:""},
    {Palabra:"Transformación digital", Significado:"Consiste en instrumentar cambios sustanciales en los sistemas y procesos del negocio, tiene como eje central el uso de herramientas digitales con una visión integral encaminada a la generación de valor para la organización.", Fuente:""},
    {Palabra:"Filosofía empresarial", Significado:"Conjunto de principios y creencias que guían las acciones de una empresa. Es un elemento intangible que guía la toma de decisiones que involucran a trabajadores, directivos, socios y clientes. Regularmente se encuentra plasmada en la misión, visión y valores de la empresa.", Fuente:""}
]
const tools = [
    { Tema: "1.1. Definición de cultura organizacional y diagnóstico en la pyme", Recurso: "Lectura", Url: "https://www.linkedin.com/pulse/30-preguntas-poderosas-para-evaluar-la-cultura-patricia-l%C3%B3pez/?originalSubdomain=es ", Descripcion: "Diagnóstico de 30 preguntas que abarca ambiente laboral, desempeño, crecimiento y desarrollo, generado por GITH ASESORES Fortaleciendo al Talento Empresarial", Observaciones: "Profundizar en el pre-diagnóstico de la pyme" },
    { Tema: "1.2. Importancia de la cultura organizacional en la pyme", Recurso: "", Url: "https://www.youtube.com/watch?v=g2GbtM0RfWY", Descripcion: "Video que explica la cultura organizacional y profundiza en su importancia", Observaciones: "Consolidar conceptos del apartadiok" },
    { Tema: "1.3. Elementos principales en la cultura organizacional", Recurso: "", Url: "https://www.youtube.com/watch?v=JCXZup4SD6I", Descripcion: "Video que aborda los elementos de la cultura organizacional y analiza el caso Walrmart", Observaciones: "Reflexión sobre los apartados enunciados" },
    { Tema: "1.4. Diseño de una cultura organizacional para tu pyme enfocada en los beneficios", Recurso: "", Url: "https://www.youtube.com/watch?v=v9Jk0fyVDOM", Descripcion: "Video que explica la cultura organizacional y rentabilidad", Observaciones: "Como aplicar los conceptos aprendidos de forma práctica" }
]

const experts = [
    {Nombre:"Rocío Morales",Contacto:"rocioms08@hotmail.com",Url:"mailto:rocioms08@hotmail.com",Descripcion:"Especialista en fortalecer equipos de trabajo"},
    {Nombre:"Alfredo Tejeda",Contacto:"jatejeda69@gmail.com",Url:"mailto:jatejeda69@gmail.com",Descripcion:"Coach especialista en potenciar las capacidades del talento humano"},
    {Nombre:"Alma Lucero Sosa Blancas",Contacto:"lsosa@fca.unam.mx",Url:"mailto:lsosa@fca.unam.mx",Descripcion:"Responsable del programa de talento humano de la Facultad de Contaduría y Administración de la UNAM"}
]

const institutions = [
    {Nombre:"Ministerio de Trabajo y Previsión Social, Gobierno de El Salvador. Instancia rectora de velar por la armonía en las relaciones obrero-patronales. Responsable de formular, ejecutar y supervisar la política sociolaboral del país.",Url:"https://www.mtps.gob.sv/"},
    {Nombre:"Ministerio de Economía de El Salvador es la entidad gubernamental encargada de la gestión y el desarrollo de la economía en el país.",Url:"https://www.economia.gob.sv/"},
    {Nombre:"Ministerio de Educación, Ciencia y Tecnología de El Salvador, encargado de elaborar Políticas orientadas al desarrollo tecnológico del país.",Url:"https://www.mined.gob.sv/"},
    {Nombre:"Ministerio  del Trabajo en Colombia, responsable de promover el empleo digno, proteger los derechos de los colombianos en capacidad de trabajar, construir más y mejores empresas, fomentar la calidad del talento humano y convertir el trabajo como eje del desarrollo humano.",Url:"https://www.mintrabajo.gov.co/web/guest/inicio"},
    {Nombre:"Ministerio de Tecnologías de la Información y Comunicaciones de Colombia, está encargado de las tecnologías de la información y la comunicación.",Url:"https://www.mintic.gov.co/portal/inicio/"},
    {Nombre:"Ministerio de Trabajo y Seguridad Social en Uruguay. Institución rectora en el diseño, implementación y evaluación de las políticas de empleo, formación profesional, relaciones laborales y seguridad social a nivel nacional. Promueve el diálogo social, trabajo decente y la cultura del trabajo. ",Url:"https://www.gub.uy/ministerio-trabajo-seguridad-social/"},
    {Nombre:"Dirección Nacional de Innovación, Ciencia y Tecnología Uruguay, instancia de articulación y vinculación para el desarrollo de la ciencia y la tecnología de Uruguay",Url:"https://www.gub.uy/ministerio-educacion-cultura/direccion-innovacion-ciencia-tecnologia"},
    {Nombre:"Organización Internacional del Trabajo (OIT). Es la instancia tripartita de la ONU que reúne a gobiernos, empleadores y trabajadores para establecer normas de trabajo, formular políticas y elaborar programas promoviendo el trabajo de todos mujeres y hombres. ",Url:"https://www.ilo.org/global/lang--es/index.htm"},
]

const books = [
    {Autor:"Chiavenato, I. (2009).",Titulo:"Gestión del talento humano (3a ed.).",Subtitulo:"México: McGraw Hill.",Url:""},
    {Autor:"Groce, I. (2023).",Titulo:"Capacitación y desarrollo de soft skill para el éxito organizacional.",Subtitulo:"Blog Buk.",Url:"https://www.buk.mx/blog/capacitacion-y-desarrollo-de-soft-skills-para-el-exito-organizacional"},
    {Autor:"Iberdrola (2023).",Titulo:"La cultura empresarial en la era digital.",Subtitulo:"",Url:"https://www.iberdrola.com/compromiso-social/transformacion-digital-cultura-empresarial"},
    {Autor:"Kubler-Ross, E., & Kessler, D. (2006).",Titulo:"Sobre el duelo y el dolor.",Subtitulo:"Barcelona: Ediciones Luciérnaga.",Url:"https://proassets.planetadelibros.com/usuaris/libros_contenido/arxius/32/31277_Sobre_el_duelo_y_el_dolor.pdf"},
    {Autor:"Mena Méndez, Dariel (2019).",Titulo:"La cultura organizacional, elementos generales, mediaciones e impacto en el desarrollo integral de las instituciones.",Subtitulo:"Pensamiento & Gestión, núm. 46, 2019, Fundación Universidad del Norte - Barranquilla, Colombia.",Url:"http://www.redalyc.org/articulo.oa?id=64664303002"},
    {Autor:"UNIR (2023).",Titulo:"La cultura organizacional de una empresa: concepto e importancia.",Subtitulo:"En UNIR, La universidad en Internet.",Url:"https://mexico.unir.net/economia/noticias/cultural-organizacional/"},
    {Autor:"Valderrama, B. (2020).",Titulo:"Gestión del talento en la era digital.",Subtitulo:"Editorial EOS Instituto de Orientación Psicológica Asociados. España. 286 p.",Url:""}
]

const websites = [
    {Nombre:"Herramientas de gestión del talento humano. Sitio web en el que se encontrarán distintas herramientas de gestión del talento humano, como software en modo freemium y manuales descargables",Url:"https://www.crehana.com/blog/gestion-talento/herramientas-gestion-talento-humano/"},
    {Nombre:"Formatos de recursos humanos. Sitio en el que se encontrarán formatos de distintos tipos para apoyar la gestión de talento humano",Url:"https://www.rrhh-web.com/formularios.html"},
    {Nombre:"Recursos humanos inclusivos. Sitio en el que se encontrarán herramientas para promover un sistema de gestión del talento humano inclusivo",Url:"https://unsdg.un.org/es/resources/recursos-y-documentos-complementarios-sobre-gestion-inclusiva-del-talento-rrhh-estrategia"},
    {Nombre:"Manual de gestión de talento. Manual desarrollado por USAID para apoyar a las pymes en la gestión del talento",Url:"https://pdf.usaid.gov/pdf_docs/Pnadj637.pdf"}
]


