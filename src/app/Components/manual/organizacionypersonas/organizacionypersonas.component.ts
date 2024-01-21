import { Component } from '@angular/core';
import { GlobalService } from '../../../Services/global.service';

@Component({
    selector: 'app-organizacionypersonas',
    templateUrl: './organizacionypersonas.component.html',
    styleUrls: ['./organizacionypersonas.component.scss']
})
export class OrganizacionypersonasComponent {
    public links = [
        { Url: "culturaorganizacional/Introduccion", Nombre: "Cultura organizacional", Icono:"", Clase:"" },
        // { Url: "logistica/Introduccion", Nombre: "Logística", Icono:"", Clase:"" },
        // { Url: "procesosdenegocio/Introduccion", Nombre: "Procesos de negocio", Icono:"", Clase:"" },
    ];
    constructor(
        public _globalService: GlobalService
    ) {}
}
