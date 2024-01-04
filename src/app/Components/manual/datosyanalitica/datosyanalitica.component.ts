import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../../../Services/global.service';

@Component({
    selector: 'app-datosyanalitica',
    templateUrl: './datosyanalitica.component.html',
    styleUrls: ['./datosyanalitica.component.scss']
})
export class DatosyanaliticaComponent {
    public links = [
        { Url: "analiticadedatos/Introduccion", Nombre: "Analítica de datos", Icono:"", Clase:"" },
        { Url: "sistemasespecializados/Introduccion", Nombre: "Sistemas especializados", Icono:"", Clase:"" },
        { Url: "herramientasanalitica/Introduccion", Nombre: "Sistemas y herramientas de analítica", Icono:"", Clase:"" },
        { Url: "presentaciones/Introduccion", Nombre: "Presentaciones para la toma de decisiones", Icono:"", Clase:"" },
        { Url: "modelosmatematicos/Introduccion", Nombre: "Modelos matemáticos", Icono:"", Clase:"" },
    ];
    constructor(
        public _globalService: GlobalService
    ) {}
}

