import { Component } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.scss']
})
export class ManualComponent {
    constructor(
        public _globalService: GlobalService
    ){}
    public dimensiones: Array<any> = [
        { Url: "organizacionypersonas/inicio", Nombre: "Organización y personas", Icono:"people", Clase:"organizacion" },
        { Url: "transformaciondigital/inicio", Nombre: "Estrategia y transformación digital", Icono:"precision_manufacturing", Clase:"estrategia" },
        { Url: "datosyanalitica/inicio", Nombre: "Datos y analítica", Icono:"troubleshoot", Clase:"datos" },
        { Url: "tecnologiasyhabilidadesigitales/inicio", Nombre: "Tecnologías y habilidades digitales", Icono:"memory", Clase:"tecnologias" },
        { Url: "comunicacion/inicio", Nombre: "Comunicación y canales de venta", Icono:"shopping_cart", Clase:"comunicacion" },
        { Url: "procesos/inicio", Nombre: "Procesos", Icono:"psychology", Clase:"procesos" }
    ]
}
