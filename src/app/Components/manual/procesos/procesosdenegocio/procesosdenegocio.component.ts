import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-procesosdenegocio',
    templateUrl: './procesosdenegocio.component.html',
    styleUrls: ['./../procesos.component.scss'],
    animations: [sectionsAnimation]
})
export class ProcesosdenegocioComponent {
    public title: string = 'Procesos de negocio';
    public subtitle: string = 'Procesos';
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
        const palabras = [134,135,136,137,138,139];
        const expertos = [4,25,20];
        const instituciones = [22];
        const literatura = [70,71,72];
        const websites = [45,46,47,48,49];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "1.1. Qué son los procesos de negocio y su importancia en las organizaciones.", Recurso: "Película en Netflix Hambre de Poder", Url: "https://www.netflix.com/", Descripcion: "\"The Founder\" (Hambre de Poder) - Cuenta la historia de cómo Ray Kroc adquirió y transformó la cadena de restaurantes McDonald's en una empresa global, destacando los procesos de negocio y la expansión de la franquicia." },
    { Tema: "2.2 Mapeo y documentación de los procesos: diagramas de flujo ", Recurso: "Infografía de cómo hacer un diagrama de flujo.", Url: "https://asana.com/es/resources/what-is-a-flowchart", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "2.2 Mapeo y documentación de los procesos: SIPOC", Recurso: "Herramienta para elaborar un diagrama SIPOC", Url: "https://www.lucidchart.com/pages/es/plantillas/diagrama-sipoc", Descripcion: "Formato para caja de herramientas" },
    { Tema: "3.1 Buenas prácticas para el diseño de procesos eficientes y efectivos.", Recurso: "Video que explica la diferencia de la eficiencia y eficacia.", Url: "https://youtu.be/9KqpOStyV48", Descripcion: "Formato para caja de herramientas" },
    { Tema: "3.1 Buenas prácticas para el diseño de procesos eficientes y efectivos.", Recurso: "Video que muestra la importancia de KPI con ejemplos", Url: "https://youtu.be/dzh7faTkHCk", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "3.2 Estrategias para optimizar los procesos y reducir tiempos y costos.", Recurso: "Video que desarrolla el uso del tiempo estándar para reducir costos", Url: "https://youtu.be/d-d19ze6V-E", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "3.3 Automatización y digitalización de procesos para mejorar la productividad.", Recurso: "Blog para el uso KPIS en entorno digital", Url: "https://rockcontent.com/es/blog/kpis-de-ventas/#:~:text=Los%207%20principales%20KPIs%20de%20ventas%201%201.,concretados%20...%207%207.%20Ciclo%20de%20venta%20", Descripcion: "Formato para caja de herramientas" },
    { Tema: "4.2 Implementación de un sistema de gestión de procesos (BPM) en la empresa.", Recurso: "Video explicativo de como implementar un BMP", Url: "https://youtu.be/0fTWBDyZ4fI", Descripcion: "Vinculado a una actividad de lectura" },
    { Tema: "5.2 Cómo Aprovechar las Tecnologías Digitales para Innovar y Optimizar los Procesos", Recurso: "Video demostrativo del uso de la realidad virtual y aumentada.", Url: "https://youtu.be/PLpDCK3Zy7Q", Descripcion: "Vinculado a una actividad de lectura" },
]
