import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';
import { NavSections, Glossary, Experts, Institutions, Books, Websites } from '../../../../Models/sitedata';

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
        const palabras = [82,83,84,85];
        const expertos = [8,5,10];
        const instituciones = [12,2,14,15,5,17,18,19];
        const literatura = [47,48,49,50,51,52,53];
        const websites = [22,23,24,25];
        this.Words = Glossary.filter((x: any) => palabras.includes(x.IdPalabra));
        this.Experts = Experts.filter((x: any) => expertos.includes(x.IdExperto));
        this.Institutions = Institutions.filter((x: any) => instituciones.includes(x.IdInstitucion));
        this.Books = Books.filter((x: any) => literatura.includes(x.IdLiteratura));
        this.Websites = Websites.filter((x: any) => websites.includes(x.IdSitio));
    }

}


const tools = [
    { Tema: "1.1. Definición de cultura organizacional y diagnóstico en la pyme", Recurso: "Lectura", Url: "https://www.linkedin.com/pulse/30-preguntas-poderosas-para-evaluar-la-cultura-patricia-l%C3%B3pez/?originalSubdomain=es ", Descripcion: "Diagnóstico de 30 preguntas que abarca ambiente laboral, desempeño, crecimiento y desarrollo, generado por GITH ASESORES Fortaleciendo al Talento Empresarial", Observaciones: "Profundizar en el pre-diagnóstico de la pyme" },
    { Tema: "1.2. Importancia de la cultura organizacional en la pyme", Recurso: "", Url: "https://www.youtube.com/watch?v=g2GbtM0RfWY", Descripcion: "Video que explica la cultura organizacional y profundiza en su importancia", Observaciones: "Consolidar conceptos del apartadiok" },
    { Tema: "1.3. Elementos principales en la cultura organizacional", Recurso: "", Url: "https://www.youtube.com/watch?v=JCXZup4SD6I", Descripcion: "Video que aborda los elementos de la cultura organizacional y analiza el caso Walrmart", Observaciones: "Reflexión sobre los apartados enunciados" },
    { Tema: "1.4. Diseño de una cultura organizacional para tu pyme enfocada en los beneficios", Recurso: "", Url: "https://www.youtube.com/watch?v=v9Jk0fyVDOM", Descripcion: "Video que explica la cultura organizacional y rentabilidad", Observaciones: "Como aplicar los conceptos aprendidos de forma práctica" }
]

