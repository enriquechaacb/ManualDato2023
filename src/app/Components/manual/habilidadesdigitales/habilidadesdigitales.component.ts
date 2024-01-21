import { Component } from '@angular/core';
import { GlobalService } from '../../../Services/global.service';

@Component({
  selector: 'app-habilidadesdigitales',
  templateUrl: './habilidadesdigitales.component.html',
  styleUrls: ['./habilidadesdigitales.component.scss']
})
export class HabilidadesdigitalesComponent {
  public links = [
    { Url: "introduccion/Introduccion", Nombre: "_", Icono:"", Clase:"" },
    // { Url: "planeacionyestretagiadigital/Introduccion", Nombre: "Planeación y estrategia digital", Icono:"", Clase:"" },
    // { Url: "inteligenciadenegocio/Introduccion", Nombre: "Inteligencia de negocio", Icono:"", Clase:"" },
    // { Url: "modelosdenegocio/Introduccion", Nombre: "Modelos de negocio", Icono:"", Clase:"" },
    // { Url: "mediosdepago/Introduccion", Nombre: "Medios de pago digitales", Icono:"", Clase:"" },
];
constructor(
    public _globalService: GlobalService
) {}
}