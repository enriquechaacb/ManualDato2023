import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-presentaciones',
    templateUrl: './presentaciones.component.html',
    styleUrls: ['../datosyanalitica.component.scss']
})
export class PresentacionesComponent {
    public title: string = 'Presentaciones para la toma de decisiones';
    public subtitle: string = 'Datos y Analítica';
    public Seccion: string;
    public Secciones: Array<any>;
    public Tools: any = tools;
    // public Experts: any = experts;
    // public Institutions: any = institutions;
    public Words: any = words;
    public Books: any = books;
    public Websites: any = websites;

    constructor(
        public _thisroute: ActivatedRoute
    ) {
        this.Secciones = [
            {Nombre: "Introducción", Valor: "Introduccion"},
            // {Nombre: "Qué es la analítica de datos", Valor: "Definicion", Temas: [
            //     {Nombre: "Definición", Valor: "Definicion"},
            //     {Nombre: "El ciclo de vida de los datos", Valor: "Ciclodevida"},
            //     {Nombre: "Analítica de los datos", Valor: "Analitica"},
            //     {Nombre: "Conclusión", Valor: "Conclusion"}
            // ]},
            {Nombre: "Beneficios", Valor: "Beneficios"},
            {Nombre: "Proceso", Valor: "Proceso"},
            {Nombre: "Desarrollo", Valor: "Desarrollo"},
            {Nombre: "Herramientas", Valor: "Herramientas"},
            {Nombre: "Glosario", Valor: "Glosario"},
            // {Nombre: "Directorio de expertos", Valor: "Expertos"},
            // {Nombre: "Instituciones clave", Valor: "Instituciones"},
            {Nombre: "Casos de éxito",Valor:"Casos"},
            {Nombre: "Literatura sugerida", Valor: "Literatura"},
            {Nombre: "Sitios web", Valor: "WebSites"},
            {Nombre: "E-book", Valor: "analitica_de_datos", EsExterno: true}
        ];
        this.Seccion = "Introduccion";
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            console.log(params)
            this.Seccion = params['section'];
        });
    }
    downloadEbook(url: string){
        const d = '../../../assets/downloads/'+url+'.pdf';
        window.open(d,'_blank');
    }
}


const tools = [
    {Tema:"",Recurso:"",Url:"",Observaciones:""},
]
const words = [
    {Palabra:"", Significado:"", Fuente:""},
]

const experts = [
    // {Nombre:"",Contacto:"",Url:"",Descripcion:""},
]

const institutions = [
    // {Nombre:"",Url:""},
]

const books = [
    {Autor:"",Titulo:"",Subtitulo:"",Url:""},
]

const websites = [
    {Nombre:"",Url:""}
]