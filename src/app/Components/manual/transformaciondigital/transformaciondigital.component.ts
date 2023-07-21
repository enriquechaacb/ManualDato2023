import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transformaciondigital',
  templateUrl: './transformaciondigital.component.html',
  styleUrls: ['./transformaciondigital.component.scss']
})
export class TransformaciondigitalComponent implements OnInit {
    public Seccion: string = "";
    public linksList: Array<any>;
    constructor(
        public _thisroute: ActivatedRoute
    ){
        this.linksList = [
            {Url:"../inicio",Nombre:"Presentación"},
            {Url:"../glosario",Nombre:"Ejes temáticos"},
            {Url:"../glosario",Nombre:"Casos de éxito"},
            {Url:"../glosario",Nombre:"Testimonios"},
            {Url:"../glosario",Nombre:"Caja de herramientas"},
            {Url:"../glosario",Nombre:"FAQ"},
            {Url:"../glosario",Nombre:"Sitios web"},
            {Url:"../glosario",Nombre:"Glosario"},
        ];
    }
    ngOnInit(): void {
        this._thisroute.params.subscribe((params: Params) => {
            this.Seccion = params['section'];
        });
    }
}
