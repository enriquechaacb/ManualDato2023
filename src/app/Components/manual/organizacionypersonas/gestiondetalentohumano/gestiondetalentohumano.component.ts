import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
  selector: 'app-gestiondetalentohumano',
  templateUrl: './gestiondetalentohumano.component.html',
  styleUrls: ['../organizacionypersonas.component.scss'],
  animations: [sectionsAnimation]
})
export class GestiondetalentohumanoComponent {
  public title: string = 'Gestión del talento humano en la era digital';
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
    {Palabra:"Gestión del talento", Significado:"Se refiere al conjunto integrado de procesos que cuida al capital humano de las organizaciones, con el propósito de atraer, retener y desarrollar a los empleados y colaboradores en un mundo cada vez más digitalizado. Implica el uso de tecnología y estrategias digitales para mejorar la eficiencia y la efectividad de la organización sin descuidar el bienestar de los empleados.", Fuente:""},
    {Palabra:"Talento", Significado:"Alude a la capacidad natural o habilidad adquirida de una persona para desempeñar una actividad o tarea con destreza. En el ámbito laboral el talento se refiere a las competencias y habilidades que aportan los trabajadores y colaboradores a una empresa con el fin de generar valor agregado a la organización. ", Fuente:""},
    {Palabra:"Recursos humanos", Significado:"Lo conforman cada una de las personas que forman parte de una organización. También se denomina así al área dedicada a la gestión administrativa de los empleados como el reclutamiento, selección, contratación, nómina, capacitación y evaluación del desempeño.", Fuente:""},
    {Palabra:"Era digital", Significado:"Se refiere al periodo que ha marcado el cambio de la tecnología analógica a la digital, caracterizado por la adopción masiva de tecnologías de información y comunicación que han transformado todos los aspectos de la vida cotidiana como la economía y la sociedad. Se caracteriza por la omnipresencia de dispositivos conectados a internet, digitalización de la información, comunicación instantánea y acceso a la información.", Fuente:""},
    {Palabra:"Cultura organizacional", Significado:"La cultura organizacional se refiere al sistema de creencias y valores compartidos a lo largo y ancho de una organización, en todos los niveles, desde la gerencia hasta el personal administrativo, incluyendo su relación con proveedores, clientes e incluso procesos de reclutamiento. Este sistema orienta los comportamientos diarios y, principalmente, define la visión que tiene de sí misma y del entorno", Fuente:"(Raffaele, 2021)"},
    {Palabra:"Transformación digital", Significado:"Consiste en instrumentar cambios sustanciales en los sistemas y procesos del negocio, tiene como eje central el uso de herramientas digitales con una visión integral encaminada a la generación de valor para la organización.", Fuente:""},
    {Palabra:"Filosofía empresarial", Significado:"Conjunto de principios y creencias que guían las acciones de una empresa. Es un elemento intangible que guía la toma de decisiones que involucran a trabajadores, directivos, socios y clientes. Regularmente se encuentra plasmada en la misión, visión y valores de la empresa. ", Fuente:""}
]

const tools = [
    { Tema: "1.1. Introducción a la gestión del talento humano en la era digital", Recurso: "Video 1", Url: "https://youtu.be/c7XBh6uuiD4", Descripcion: "Se presentan dos vídeos como parte de un ejercicio en el que el participante deberá reflexionar en torno a los cambios que se han presentado en las empresas y cómo estos cambios implican que la manera de dirigir grupos de trabajo  sea diferente." },
    { Tema: "1.1. Introducción a la gestión del talento humano en la era digital", Recurso: "Video 2", Url: "https://youtu.be/myaCbs2ScLw", Descripcion: "Video vinculado a una actividad" },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Gráfica de Gantt para organizar el proceso de cambio.", Url: "", Descripcion: "Se presenta una herramienta en Excel que servirá para generar un proceso organizado y planificado de cambio en las empresas." },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Caso de implementación de un ERP, y cómo se logró una gestión del cambio efectiva.", Url: "", Descripcion: "Se muestra un caso en el que una empresa pretende implementar un ERP y enfrenta una serie de retos que debe resolver. " },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Video descriptivo de la fase de gestión del cambio y los roles.", Url: "", Descripcion: "Muestra de manera breve y fácilmente explicada los pasos que se siguen en los procesos de gestión del cambio." },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Video informativo acerca de las etapas que cada persona en el proceso de cambio.", Url: "https://www.youtube.com/watch?v=zXw8rYM9Jcg", Descripcion: "El video permite identificar las distintas etapas que las personas vivirán en los procesos de cambio." },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Formato de calificación postulantes", Url: "", Descripcion: "Formato que brinda apoyo en la selección de candidatos a un puesto de trabajo" },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Formato para contenido del puesto", Url: "", Descripcion: "Formato que orienta a las empresas en la definición de puestos de trabajo" },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Formato de diagnóstico de necesidades de capacitación", Url: "", Descripcion: "Formato que permite articular los retos de la empresa con las necesidades de capacitación del personal" },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Video acerca de algunos conceptos relacionados con la gestión del talento", Url: "https://www.youtube.com/watch?v=4AbnB0BiXHk", Descripcion: "Vídeo que aporta una revisión de los conceptos vistos en el curso, acerca de gestión del talento humano." }
]

const experts = [
    {Nombre:"Rocío Morales",Contacto:"rocioms08@hotmail.com",Url:"mailto:rocioms08@hotmail.com",Descripcion:"Especialista en fortalecer equipos de trabajo"},
    {Nombre:"Alfredo Tejeda",Contacto:"jatejeda69@gmail.com",Url:"mailto:jatejeda69@gmail.com",Descripcion:"Coach especialista en potenciar las capacidades del talento humano"},
    {Nombre:"Alma Lucero Sosa Blancas",Contacto:"lsosa@fca.unam.mx",Url:"mailto:lsosa@fca.unam.mx",Descripcion:"Responsable del programa de Talento humano de la Facultad de Contaduría y Administración de la UNAM"}
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
    {Autor:"Chiavenato, I. (2009).",Titulo:"Gestión del talento humano (3a ed.).",Subtitulo:" México: McGraw Hill.",Url:""},
  {Autor:"Kubler-Ross, E., & Kessler, D. (2006).",Titulo:"Sobre el duelo y el dolor. ",Subtitulo:"Barcelona: Ediciones Luciérnaga.",Url:"https://proassets.planetadelibros.com/usuaris/libros_contenido/arxius/32/31277_Sobre_el_duelo_y_el_dolor.pdf"},
  {Autor:"OIT. (2020).",Titulo:"Panorama Laboral América Latina y el Caribe.",Subtitulo:"Perú.",Url:"ttps://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/documents/publication/wcms_764630.pdf"},
  {Autor:"Ruiz Mercader, J., Ruiz Mercader, C., Martínez de León, I., & Peláez Ibarrondo, J. (1999).",Titulo:"Modelo para la gestión del cambio organizacional en las Pymes.",Subtitulo:"Burgos: Congreso Nacional de la Asociación Científica de Economía y Dirección de la Empresa (ACEDE).",Url:"https://www.upct.es/~economia/PUBLI-INO/MODELO%20PARA%20LA%20GESTION%20DEL%20CAMBIO.pdf"},

]

const websites = [
    {Nombre:"Herramientas de gestión del talento humano: Sitio web en el que encontrará distintas herramientas de gestión del talento humano, como software en modo freemium y manuales descargables",Url:"https://www.crehana.com/blog/gestion-talento/herramientas-gestion-talento-humano/"},
    {Nombre:"Formatos de recursos humanos: Sitio en el que encontrará formatos de distintos tipos para apoyar la gestión de talento humano",Url:"https://www.rrhh-web.com/formularios.html"},
    {Nombre:"Recursos Humanos inclusivos: Sitio en el que encontrará herramientas para promover un sistema de gestión del talento humano inclusivo",Url:"https://unsdg.un.org/es/resources/recursos-y-documentos-complementarios-sobre-gestion-inclusiva-del-talento-rrhh-estrategia"},
    {Nombre:"Manual de gestión de talento: Manual desarrollado por USAID para apoyar a las pymes en la gestión del talento",Url:"https://pdf.usaid.gov/pdf_docs/Pnadj637.pdf"}
]



