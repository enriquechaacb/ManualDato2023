import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService, VariablesService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

@Component({
    selector: 'app-infraestructura',
    templateUrl: './infraestructurayciberseguridad.component.html',
    styleUrls: ['../habilidadesdigitales.component.scss'],
    animations: [sectionsAnimation]
})
export class InfraestructuraComponent {
    public title: string = 'Infraestructura y ciberseguridad';
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
        public _globalService: GlobalService,
        private _vardata: VariablesService
    ) {
        this.Seccion = "Introduccion";
        this.Secciones = NavSections;
        this.setCatalogs();
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            this.Seccion = params['section'];
        });
        //this.Seccion = this._variablesService.url;
        //this._vardata.url.subscribe(x => this.Seccion=x);
    }
    setCatalogs() {
        const palabras = [161,162,163,164,149,165,166,167,168,169,170,171];
        const expertos = [46,47,48,49,50,51];
        const instituciones = [30,31,32,33];
        const literatura = [103,104,105];
        const websites = [71,72,77,78,79];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }

}
const tools = [
    { Tema: "Video de Vodafone Empresas", Recurso: "¿Quién dijo que una pyme del turismo no puede explotar su 'big data'? | Sara Pastor", Url: "https://www.youtube.com/watch?v=DlJDYE99Wvw&t=5s", Descripcion: "El video versa sobre la importancia del Big data en una pyme" },
    { Tema: "Video en vivo", Recurso: "Trabajo remoto y ciberseguridad para pyme", Url: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=1321529298219064", Descripcion: "Transmisión en vivo por Facebooklive en la que participan expertas que abordan los temas relacionados con la seguridad de la información." },
    { Tema: "Video", Recurso: "Las pymes y el uso de la nube para la transformación digital", Url: "https://www.youtube.com/watch?v=NdhzdkWMp9M&t=2s", Descripcion: "El video expone la importancia de la computación en la nube para pyme" },
    { Tema: "Video", Recurso: "El modelo de capas. Aprendiendo ciberseguridad paso a paso - charla 2.", Url: "https://www.youtube.com/watch?v=UISsrxV99sU", Descripcion: "En esta charla a cargo de Alejandro Corletti Estrada, se expone el modelo de capas para la ciberseguridad." },
    { Tema: "Video", Recurso: "Serie de normas ISO 27000", Url: "https://www.youtube.com/watch?v=RCFKT0XptyM", Descripcion: "Un video explicativo sobre el Sistema de normas ISO 27000. Aborda la protección de datos personales y la implementación de un sistema de gestión de protección de datos personales. " },
    { Tema: "Video", Recurso: "Guía de ciberseguridad para pyme. ", Url: "https://www.youtube.com/watch?v=UWpKuAAHpT8", Descripcion: "Se presenta una guía de ciberseguridad dirigida a pymes para proteger al negocio de amenazas digitales." },
    { Tema: "Video", Recurso: "Ciberseguridad en la pyme, ¿por dónde empiezo?", Url: "https://www.youtube.com/watch?v=ee-GeNbo0ns&t=2s", Descripcion: "El video presentado por Telefónica Empresas aborda el tema de la ciberseguridad en una pyme. Ofrece una explicación de puntos clave para proteger el negocio. " },
    { Tema: "Glosario de ciberseguridad", Recurso: "Glosario de términos de ciberseguridad. Una guía de aproximación para el empresario.", Url: "https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia_glosario_ciberseguridad_2021.pdf", Descripcion: "El Instituto Nacional de Ciberseguridad es una institución española reconocida en el campo de la ciberseguridad, ha diseñado un glosario de este tema, ampliamente recomendado." },
    { Tema: "Glosario de transformación digital", Recurso: "Glosario de transformación digital_ de la A a la VR ", Url: "https://blog.talentgarden.com/es/blog/business-innovation/glosario-transformacion-digital-vr", Descripcion: "El glosario a cargo de Talent Garden presenta términos relacionados con la transformación digital, de útil consulta para las pymes" },
    { Tema: "Libro de DarFe Learning & Consulting S.L", Recurso: "Seguridad por Niveles", Url: "https://darfe.es/es/descarga-nuestros-libros/seguridad-por-niveles", Descripcion: "Cuatro libros gratuitos" },
    { Tema: "Libro de DarFe Learning & Consulting S.L", Recurso: "Seguridad en Redes", Url: "https://darfe.es/es/descarga-nuestros-libros/seguridad-en-redes", Descripcion: "Cuatro libros gratuitos" },
    { Tema: "Libro de DarFe Learning & Consulting S.L", Recurso: "Ciberseguridad", Url: "https://darfe.es/es/descarga-nuestros-libros/ciberseguridad", Descripcion: "Cuatro libros gratuitos" },
    { Tema: "Libro de DarFe Learning & Consulting S.L", Recurso: "Manual de la Resiliencia", Url: "https://darfe.es/es/descarga-nuestros-libros/prueba1", Descripcion: "Cuatro libros gratuitos" },
    { Tema: "Guía de Ciberseguridad para Pequeñas y Medianas Empresas", Recurso: "Guía publicada por la Agencia de Desarrollo Internacional de los Estados Unidos (USAID, por sus siglas en inglés)", Url: "https://pdf.usaid.gov/pdf_docs/PA00ZKCQ.pdf", Descripcion: "" },
    { Tema: "Guía para la Ciberseguridad en las PYMES", Recurso: "Guía de ciberseguridad auspiciada por Huawei", Url: "https://www.huawei.com/-/media/corporate/local-site/es/pdf/guia-de-ciberseguridad-para-pymes-huawei.pdf?la=es", Descripcion: "" },
    { Tema: "SAFE presenta el documento de buenas prácticas para la ciberseguridad empresarial - CCIT - Cámara Colombiana de Informática y Telecomunicaciones", Recurso: "Documento de buenas prácticas de ciberseguridad, presentada por SAFE", Url: "https://www.ccit.org.co/estudios/safe-presenta-el-documento-de-buenas-practicas-para-la-ciberseguridad-empresarial/", Descripcion: "" }
]





