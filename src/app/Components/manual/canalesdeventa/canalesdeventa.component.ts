import { Component } from '@angular/core';
import { GlobalService } from '../../../Services/global.service';

@Component({
  selector: 'app-canalesdeventa',
  templateUrl: './canalesdeventa.component.html',
  styleUrls: ['./canalesdeventa.component.scss']
})
export class ComunicacionycanalesdeventaComponent {
  public links = [
    { Url: "canalesdigitalesdecomunicacion/Introduccion", Nombre: "Canales digitales de comunicación", Icono:"", Clase:"" },
    { Url: "canalesdeventa/Introduccion", Nombre: "Canales de venta", Icono:"", Clase:"" },
    { Url: "ecommerce/Introduccion", Nombre: "Comercio electrónico", Icono:"", Clase:"" },
    { Url: "digitalmarketing/Introduccion", Nombre: "Marketing digital", Icono:"", Clase:"" },
    { Url: "gestiondeclientes/Introduccion", Nombre: "Gestión de clientes", Icono:"", Clase:"" },
    { Url: "arquetiposdeclientes/Introduccion", Nombre: "Arquetipos de clientes", Icono:"", Clase:"" },
];
constructor(
    public _globalService: GlobalService
) {}
}
					