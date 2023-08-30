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
            { Url: "../inicio", Nombre: "Introducción" },
            { Url: "../beneficios", Nombre: "Beneficios" },
            { Url: "../objetivos", Nombre: "Objetivos" },
            { Url: "../proceso", Nombre: "Proceso" },
            { Url: "../desarrollo", Nombre: "Desarrollo" },
            { Url: "../herramientas", Nombre: "Herramientas" },
            { Url: "../glosario", Nombre: "Glosario" },
            { Url: "../expertos", Nombre: "Expertos" },
            { Url: "../instituciones", Nombre: "Instituciones" },
            { Url: "../casosdeexito", Nombre: "Casos de éxito" },
            { Url: "../literatura", Nombre: "Literatura" },
            { Url: "../sitios", Nombre: "Sitios web" }
        ];
        this.EjesTematicos = [
            { Valor: "tema1", Nombre: "Tema 1: Introducción a los Procesos de Negocio" },
            { Valor: "tema2", Nombre: "Tema 2: Identificación y Mapeo de Procesos" },
            { Valor: "tema3", Nombre: "Tema 3: Diseño y optimización de procesos" },
            { Valor: "tema4", Nombre: "Tema 4: Gestión y Control de Procesos" },
            { Valor: "tema5", Nombre: "Tema 5: Procesos de negocio y transformación digital" },
            { Valor: "tema6", Nombre: "Tema 6: futuras tendencias en procesos de negocio" }
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
