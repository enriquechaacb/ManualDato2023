import { Component } from '@angular/core';
import { GlobalService } from '../../../Services/global.service';

@Component({
    selector: 'app-procesos',
    templateUrl: './procesos.component.html',
    styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent {
    public links = [
        { Url: "ambientesdigitales/Introduccion", Nombre: "Desarrollo de ambientes digitales", Icono:"", Clase:"" },
        { Url: "logistica/Introduccion", Nombre: "Logística", Icono:"", Clase:"" },
        { Url: "procesosdenegocio/Introduccion", Nombre: "Procesos de negocio", Icono:"", Clase:"" },
    ];
    constructor(
        public _globalService: GlobalService
    ) {}
}
