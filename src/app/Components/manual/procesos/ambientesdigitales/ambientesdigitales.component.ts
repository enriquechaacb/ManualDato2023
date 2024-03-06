import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-ambientesdigitales',
    templateUrl: './ambientesdigitales.component.html',
    styleUrls: ['./../procesos.component.scss'],
    animations: [sectionsAnimation]
})
export class AmbientesdigitalesComponent {
    public title: string = 'Desarrollo de ambientes digitales';
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
        const palabras = [113,114];
        const expertos = [18,19,21,20,22,5,4];
        const instituciones = [8,5,2,11];
        const literatura = [61,62,63];
        const websites = [33,34,35,36,37,38];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }
}

const tools = [
    { Tema: "Definición de modelo de negocio", Recurso: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Url: "https://www.youtube.com/watch?v=sdnin-z_Rdg", Descripcion: "Vídeo acerca de cómo Netflix derrotó a Blockbuster.", Observaciones: "Video vinculado a una actividad" },
    { Tema: "Diseño de una propuesta de valor", Recurso: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Url: "https://www.youtube.com/watch?v=ZCJC1hI6qWQ", Descripcion: "Video que explica la manera de elaborar una propuesta de valor utilizando el lienzo canvas", Observaciones: "Video explicativo de la propuesta de valor " },
    { Tema: "Ejemplo para gestión del cambio Modelo de 8 pasos de Kotter.", Recurso: "https://www.consuunt.es/modelo-de-8-pasos-de-kotter/", Url: "https://www.consuunt.es/modelo-de-8-pasos-de-kotter/", Descripcion: "Sitio web en el que se presenta el modelo de 8 pasos de Kotter, explicado y con ejemplos ", Observaciones: "Recurso útil para el tema de Gestión del Cambio" },
    { Tema: "Video reflexión para cambio en las personas ", Recurso: "https://www.youtube.com/watch?v=x0iRj8_9KhA", Url: "https://www.youtube.com/watch?v=x0iRj8_9KhA", Descripcion: "Video que habla sobre los obstáculos de hacer cambios en las personas", Observaciones: "Video útil para el tema de Gestión del Cambio" },
    { Tema: "Artículo de revista científica EFIM", Recurso: "Hoyos-Estrada, S., & Sastoque-Gómez, J. (2020). Marketing Digital como oportunidad de digitalización de las PYMES en Colombia en tiempo del Covid – 19. Revista Científica Anfibios, 3(1), 39-46. ", Url: "https://doi.org/10.37979/afb.2020v3n1.60", Descripcion: "El artículo expone los beneficios del uso de estrategias de marketing digital para la exploración de los mercados digitales, con el fin de salvaguardar la economía de Colombia, durante y después de la pandemia COVID-19.", Observaciones: "Texto que permite visualizar diversas soluciones digitales" },
    { Tema: "Artículo científico sobre modelos de madurez digital", Recurso: "Zorro Galindo, E. (2020). Modelos de madurez digital en pymes - Caso de estudio de una pyme de telecomunicaciones de Colombia.", Url: "https://repositorio.unal.edu.co/handle/unal/77419", Descripcion: "Artículo científico que expone diferentes modelos de madurez digital, estudio de caso en Colombia. ", Observaciones: "Texto útil para identificar áreas y procesos digitales " },
    { Tema: "Blog sobre cómo la empresa puede beneficiarse de la revolución digital", Recurso: "https://blog.wearedrew.co/como-puede-tu-empresa-beneficiarse-con-la-revolucion-digital", Url: "https://blog.wearedrew.co/como-puede-tu-empresa-beneficiarse-con-la-revolucion-digital", Descripcion: "El blog ofrece información relativa a cómo la digitalización permite a las empresas mejorar su desempeño, aumentar su productividad y acceder a nuevos mercados.", Observaciones: "Ofrece datos sobre la transformación digital y cómo una empresa puede beneficiarse con ello " },
    { Tema: "Texto de sitio web “Digitalización avanzada: ¿qué necesitas para alcanzarla?”", Recurso: "https://www.concur.co/blog/article/digitalizacion-avanzada", Url: "https://www.concur.co/blog/article/digitalizacion-avanzada", Descripcion: "Diferencias entre la transformación digital y la digitalización avanzada", Observaciones: "Información útil para el diseño de soluciones digitales" },
    { Tema: "Libro La Meta: un proceso de mejora continua por Eliyahu M. Goldratt", Recurso: "https://imagourbis.unq.edu.ar/uq_jaga/img/pdf/La_Meta.pdf", Url: "https://imagourbis.unq.edu.ar/uq_jaga/img/pdf/La_Meta.pdf", Descripcion: "El libro pretende mostrar y explicar un amplio espectro de fenómenos industriales. ", Observaciones: "Texto-novela importante para el tema de Gestión e implementación del Cambio" }
]
