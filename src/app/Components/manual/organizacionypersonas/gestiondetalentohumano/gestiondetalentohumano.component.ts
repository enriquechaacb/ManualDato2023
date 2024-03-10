import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

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
    public Experts: any;
    public Institutions: any;
    public Words: any;
    public Books: any;
    public Websites: any;
    public Breadcrumbs: any = [
        { Nombre: "BiblioSmart", Url: "../../../" },
        { Nombre: this.subtitle, Url: "../../" },
        { Nombre: this.title, Url: "../Introduccion" }
    ];

    constructor(
        public _thisroute: ActivatedRoute,
        public _globalService: GlobalService
    ) {
        this.Seccion = "Introduccion";
        this.Secciones = NavSections;
        this.setCatalogs();
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            this.Seccion = params['section'];
        });
    }
    setCatalogs() {
        const palabras = [98, 99, 100, 101, 102, 103, 104];
        const expertos = [8, 9, 10];
        const instituciones = [12, 2, 14, 15, 5, 17, 18, 19];
        const literatura = [55, 56, 57, 58];
        const websites = [22, 23, 24, 25];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "1.1. Introducción a la gestión del talento humano en la era digital", Recurso: "Video 1", Url: "https://youtu.be/c7XBh6uuiD4", Descripcion: "Se presentan dos vídeos como parte de un ejercicio en el que el participante deberá reflexionar en torno a los cambios que se han presentado en las empresas y cómo estos cambios implican que la manera de dirigir grupos de trabajo  sea diferente." },
    { Tema: "1.1. Introducción a la gestión del talento humano en la era digital", Recurso: "Video 2", Url: "https://youtu.be/myaCbs2ScLw", Descripcion: "Video vinculado a una actividad" },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Gráfica de Gantt para organizar el proceso de cambio.", Url: "../../../../assets/downloads/organizacionypersonas/Plantilla_Gantt_proyecto.xlsx", Descripcion: "Se presenta una herramienta en Excel que servirá para generar un proceso organizado y planificado de cambio en las empresas." },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Caso de implementación de un ERP, y cómo se logró una gestión del cambio efectiva.", Url: "", Descripcion: "Se muestra un caso en el que una empresa pretende implementar un ERP y enfrenta una serie de retos que debe resolver. " },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Video descriptivo de la fase de gestión del cambio y los roles.", Url: "", Descripcion: "Muestra de manera breve y fácilmente explicada los pasos que se siguen en los procesos de gestión del cambio." },
    { Tema: "1.2. Innovación y gestión del cambio en la era digital", Recurso: "Video informativo acerca de las etapas que cada persona en el proceso de cambio.", Url: "https://www.youtube.com/watch?v=zXw8rYM9Jcg", Descripcion: "El video permite identificar las distintas etapas que las personas vivirán en los procesos de cambio." },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Formato de calificación postulantes", Url: "", Descripcion: "Formato que brinda apoyo en la selección de candidatos a un puesto de trabajo" },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Formato para contenido del puesto", Url: "", Descripcion: "Formato que orienta a las empresas en la definición de puestos de trabajo" },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Formato de diagnóstico de necesidades de capacitación", Url: "", Descripcion: "Formato que permite articular los retos de la empresa con las necesidades de capacitación del personal" },
    { Tema: "1.3. Los procesos de la gestión del talento humano", Recurso: "Video acerca de algunos conceptos relacionados con la gestión del talento", Url: "https://www.youtube.com/watch?v=4AbnB0BiXHk", Descripcion: "Vídeo que aporta una revisión de los conceptos vistos en el curso, acerca de gestión del talento humano." }
]
