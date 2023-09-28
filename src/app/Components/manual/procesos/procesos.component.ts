import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { slideAnimation } from '../../../Services/animations.service';

@Component({
    selector: 'app-procesos',
    templateUrl: './procesos.component.html',
    styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent {
    public Seccion: string = "";
    public SubSeccion: string = "tema1";
    public linksList: Array<any>;
    public EjesTematicos:Array<any>;
    //public Secciones:Array<any>;
    constructor(
        public _thisroute: ActivatedRoute
    ){
        this.linksList = [
            { Url: "../presentacion", Nombre: "Presentación" },
            { Url: "../definicion", Nombre: "Definición" },
            { Url: "../beneficios", Nombre: "Beneficios" },
            { Url: "../desarrollo", Nombre: "Desarrollo" },
            { Url: "../ejestematicos", Nombre: "Ejes temáticos" }
        ];
        this.EjesTematicos = [
            { Valor: "tema1", Nombre: "Procesos de negocio", Icon: "account_tree", Link: "../procesosdenegocio/introduccion" },
            { Valor: "tema2", Nombre: "Desarrollo de ambientes digitales", Icon: "memory", Link: "../desarrollodeambientesdigitales/introduccion" },
            { Valor: "tema3", Nombre: "Logística", Icon: "conveyor_belt", Link: "../logistica/introduccion" }
        ];
        // this.Secciones = [
        //     {Nombre: "Introducción", Valor: "Introduccion"},
        //     {Nombre: "Beneficios", Valor: "Beneficios"},
        //     {Nombre: "Proceso", Valor: "Proceso"},
        //     {Nombre: "Objetivos", Valor: "Objetivos"},
        //     {Nombre: "Desarrollo de contenidos", Valor: "Contenidos", Temas: [
        //         {Nombre: "Tema 1", Valor: "Tema1"},
        //         {Nombre: "Tema 2", Valor: "Tema2"},
        //         {Nombre: "Tema 3", Valor: "Tema3"}
        //     ]},
        //     {Nombre: "Caja de herramientas", Valor: "Herramientas"},
        //     {Nombre: "Glosario", Valor: "Glosario"},
        //     {Nombre: "Directorio de expertos", Valor: "Expertos"},
        //     {Nombre: "Instituciones clave", Valor: "Instituciones"},
        //     {Nombre: "Casos de éxito", Valor: "Casos"},
        //     {Nombre: "Literatura sugerida", Valor: "Literatura"},
        //     {Nombre: "Sitios web de consulta", Valor: "Sitios"}
        // ]
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
