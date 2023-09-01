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
        { Url: "organizacionypersonas/presentacion", Nombre: "Organización y personas", Icono:"organizacion", Clase:"organizacion" },
        { Url: "transformaciondigital/presentacion", Nombre: "Estrategia y transformación digital", Icono:"estrategia", Clase:"estrategia" },
        { Url: "datosyanalitica/presentacion", Nombre: "Datos y analítica", Icono:"datos_analitica", Clase:"datos" },
        { Url: "tecnologiasyhabilidadesigitales/presentacion", Nombre: "Tecnologías y habilidades digitales", Icono:"tecnologias", Clase:"tecnologias" },
        { Url: "comunicacion/presentacion", Nombre: "Comunicación y canales de venta", Icono:"comunicacion", Clase:"comunicacion" },
        { Url: "procesos/presentacion", Nombre: "Procesos", Icono:"procesos", Clase:"procesos" }
    ];
    setColorBgr(t:boolean,color:string){
        if(t){
            this.bgrColor = color;
        }else{
            this.bgrColor = "";
        }
    }
}
