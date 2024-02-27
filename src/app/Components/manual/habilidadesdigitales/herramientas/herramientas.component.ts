import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { sectionsAnimation } from '../../../../Services/animations.service';
import { GlobalService } from '../../../../Services/global.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['../habilidadesdigitales.component.scss'],
  animations: [sectionsAnimation]
})
export class HerramientasComponent {
  public title: string = 'Herramientas';
  public subtitle: string = 'Tecnologías y habilidades digitales';
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
  {Palabra:"", Significado:"", Fuente:""}
]
const tools = [
  { Tema: "", Recurso: "", Url: "", Descripcion: "" }
]

const experts = [
  {Nombre:"",Contacto:"",Url:"",Descripcion:""},
]

const institutions = [
  {Nombre:"",Url:""},
]

const books = [
  {Autor:"",Titulo:"",Subtitulo:"",Url:""}
]

const websites = [
  {Nombre:"",Url:""},
]




