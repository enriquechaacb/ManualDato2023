import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-competencias',
    templateUrl: './competencias.component.html',
    styleUrls: ['../habilidadesdigitales.component.scss'],
    animations: [sectionsAnimation]
})
export class CompetenciasComponent {
    public title: string = 'Competencias y habilidades digitales';
    public subtitle: string = 'Tecnologías y habilidades digitales';
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
        const palabras = [172,173,174,175,176,177,178];
        const expertos = [21,45];
        const instituciones = [30,31,32,33];
        const literatura = [103,104,105];
        const websites = [73,74,75];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }

}
const tools = [
    { Tema: "Formato para la evaluación de habilidades y competencias", Recurso: "Formato para la evaluación de habilidades y competencias", Url: "", Descripcion: "" },
    { Tema: "Coursera", Recurso: "Coursera", Url: "https://www.coursera.org/", Descripcion: "Colabora con más 300 universidades asociadas, 5800 cursos y más de un millón de estudiantes." },
    { Tema: "EdX", Recurso: "EdX", Url: "https://www.edx.org/es/school/mitx", Descripcion: "Plataforma del Massachusetts Institute of Technology (Instituto de Tecnología de Massachusetss) ofrece una diversidad de cursos en línea gratuitos y de diferentes temáticas. Tiene un buscador que permite realizar búsquedas de cursos en español." },
    { Tema: "Unimooc", Recurso: "Unimooc", Url: "http://iei.ua.es/mooc-emprendimiento/", Descripcion: "Plataforma con numerosos cursos en español, orientados especialmente hacia el emprendimiento. Es una plataforma de cursos para emprendedores. " },
    { Tema: "Unimooc", Recurso: "Unimooc", Url: "https://www.plataformasdecursos.gratis/unimooc/", Descripcion: "Plataforma con numerosos cursos en español, orientados especialmente hacia el emprendimiento. Es una plataforma de cursos para emprendedores. " },
    { Tema: "Platzi", Recurso: "Platzi", Url: "https://platzi.com/", Descripcion: "Una plataforma de cursos en línea (no gratuitos) pero ofrece un catálogo muy amplio y variado en temáticas útiles a las pymes." },
    { Tema: "Crehana", Recurso: "Crehana", Url: "https://www.crehana.com/", Descripcion: "Una plataforma fundada en Perú que ofrece soluciones de desarrollo, clima y desempeño en un solo lugar. Tiene un catálogo de cursos de capacitación en línea. También de paga, pero con un abanico de posibilidades. " },
    { Tema: "Futurelearn", Recurso: "Futurelearn", Url: "https://www.futurelearn.com/subjects", Descripcion: "Plataforma de origen inglés que ofrece diversidad de cursos en línea en diferentes temáticas. " },
    { Tema: "Biblioteca de la Universidad de Cantabria", Recurso: "Biblioteca de la Universidad de Cantabria", Url: "https://www.youtube.com/@bibliotecadelauniversidadd3563/videos", Descripcion: "El canal de la citada biblioteca ofrece una serie de cursos y recursos útiles para el desarrollo de competencias básicas." }
]




