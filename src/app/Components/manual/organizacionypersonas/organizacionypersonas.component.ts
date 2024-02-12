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
        { Url: "gestiontalentohumano/Introduccion", Nombre: "Gestión del talento humano en la era digital", Icono:"", Clase:"" },
        { Url: "metricasentornosdigitales/Introduccion", Nombre: "Indicadores y métricas en entornos digitales", Icono:"", Clase:"" },
        { Url: "estrategiasdenegocio/Introduccion", Nombre: "Estrategia de negocios en la era digital", Icono:"", Clase:"" },
    ];
    constructor(
        public _globalService: GlobalService
    ) {}
}
		