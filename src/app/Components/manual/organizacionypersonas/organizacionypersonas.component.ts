import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { slideAnimation } from '../../../Services/animations.service';

@Component({
    selector: 'app-organizacionypersonas',
    templateUrl: './organizacionypersonas.component.html',
    styleUrls: ['./organizacionypersonas.component.scss'],
    animations: [slideAnimation]
})
export class OrganizacionypersonasComponent {
    public Seccion: string = "";
    public SubSeccion: string = "";
    public linksList: Array<any>;
    public EjesTematicos:Array<any>;
    public Secciones:Array<any>;
    constructor(
        public _thisroute: ActivatedRoute
    ) {
        this.linksList = [
            { Url: "../inicio", Nombre: "Presentación" },
            { Url: "../definicion", Nombre: "Definición" },
            { Url: "../beneficios", Nombre: "Beneficios" },
            { Url: "../desarrollo", Nombre: "Desarrollo" },
            { Url: "../ejetematico", Nombre: "Eje temático" }
        ];
        this.EjesTematicos = [
            { Url: "../cultura", Nombre: "Cultura organizacional" },
            { Url: "../gestion", Nombre: "Gestión del talento humano en la era digital" },
            { Url: "../metricas", Nombre: "Indicadores y métricas en entornos digitales" },
            { Url: "../estrategia", Nombre: "Estrategia de negocios en la era digital" }
        ];
        this.Secciones = [
            {Nombre: "Introducción", Valor: "Introduccion"},
            {Nombre: "Beneficios", Valor: "Beneficios"},
            {Nombre: "Proceso", Valor: "Proceso"},
            {Nombre: "Objetivos", Valor: "Objetivos"},
            {Nombre: "Desarrollo de contenidos", Valor: "Contenidos", Temas: [
                {Nombre: "Tema 1", Valor: "Tema1"},
                {Nombre: "Tema 2", Valor: "Tema2"},
                {Nombre: "Tema 3", Valor: "Tema3"}
            ]},
            {Nombre: "Caja de herramientas", Valor: "Herramientas"},
            {Nombre: "Glosario", Valor: "Glosario"},
            {Nombre: "Directorio de expertos", Valor: "Expertos"},
            {Nombre: "Instituciones clave", Valor: "Instituciones"},
            {Nombre: "Casos de éxito", Valor: "Casos"},
            {Nombre: "Literatura sugerida", Valor: "Literatura"},
            {Nombre: "Sitios web de consulta", Valor: "Sitios"}
        ]
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            this.Seccion = params['section'];
        });
    }
    gotoSection(v:string,t?:any){
        if(t){
            console.log("Temas")
        }else{
            this.SubSeccion = v;
        }
        
    }
}
