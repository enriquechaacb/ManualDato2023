import { Component } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent {
    public dimensiones: Array<any> = [
        {Url:"TransformacionDigital/inicio",Nombre:"Transformación digital"}
    ]
}
