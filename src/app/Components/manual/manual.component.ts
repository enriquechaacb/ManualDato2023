import { Component } from '@angular/core';
import { GlobalService } from '../../Services/global.service';

@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.scss']
})
export class ManualComponent {
    public bgrColor: string = "";
    constructor(
        public _globalService: GlobalService
    ){}
    public dimensiones: Array<any> = [
        { Url: "organizacionypersonas/Introduccion", Nombre: "Organización y personas", Icono:"organizacion", Clase:"organizacion" },
        { Url: "transformaciondigital/Introduccion", Nombre: "Estrategia y transformación digital", Icono:"estrategia", Clase:"estrategia" },
        { Url: "datosyanalitica/Introduccion", Nombre: "Datos y analítica", Icono:"datos_analitica", Clase:"datos" },
        { Url: "tecnologiasyhabilidadesigitales/Introduccion", Nombre: "Tecnologías y habilidades digitales", Icono:"tecnologias", Clase:"tecnologias" },
        { Url: "comunicacion/Introduccion", Nombre: "Comunicación y canales de venta", Icono:"comunicacion", Clase:"comunicacion" },
        { Url: "procesos/Introduccion", Nombre: "Procesos", Icono:"procesos", Clase:"procesos" }
    ];
    setColorBgr(t:boolean,color:string){
        if(t){
            this.bgrColor = color;
        }else{
            this.bgrColor = "";
        }
    }
}
