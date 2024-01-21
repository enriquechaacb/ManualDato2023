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
        { Url: "organizacionypersonas", Nombre: "Organización y personas", Icono:"organizacion", Clase:"organizacion" },
        { Url: "estrategiaytransformaciondigital", Nombre: "Estrategia y transformación digital", Icono:"estrategia", Clase:"estrategia" },
        { Url: "datosyanalitica", Nombre: "Datos y analítica", Icono:"datos_analitica", Clase:"datos" },
        { Url: "tecnologiasyhabilidadesdigitales", Nombre: "Tecnologías y habilidades digitales", Icono:"tecnologias", Clase:"tecnologias" },
        { Url: "comunicacionycanalesdeventa", Nombre: "Comunicación y canales de venta", Icono:"comunicacion", Clase:"comunicacion" },
        { Url: "procesos", Nombre: "Procesos", Icono:"procesos", Clase:"procesos" }
    ];
    setColorBgr(t:boolean,color:string){
        if(t){
            this.bgrColor = color;
        }else{
            this.bgrColor = "";
        }
    }
}
