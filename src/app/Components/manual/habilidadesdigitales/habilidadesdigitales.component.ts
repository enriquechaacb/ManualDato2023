import { Component } from '@angular/core';
import { GlobalService } from '../../../Services/global.service';

@Component({
  selector: 'app-habilidadesdigitales',
  templateUrl: './habilidadesdigitales.component.html',
  styleUrls: ['./habilidadesdigitales.component.scss']
})
export class HabilidadesdigitalesComponent {
  public links = [
    { Url: "infraestructurayciberseguridad/Introduccion", Nombre: "Infraestructura y ciberseguridad", Icono:"", Clase:"" },
    { Url: "competenciasyhabilidadesdigitales/Introduccion", Nombre: "Competencias y habilidades digitales", Icono:"", Clase:"" },
    { Url: "tecnologiashabilitantes/Introduccion", Nombre: "Tecnologías habilitantes", Icono:"", Clase:"" },
    { Url: "herramientas/Introduccion", Nombre: "Herramientas", Icono:"", Clase:"" },
];
constructor(
    public _globalService: GlobalService
) {}
}
				