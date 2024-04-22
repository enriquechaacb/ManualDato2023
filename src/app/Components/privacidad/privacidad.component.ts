import { Component } from '@angular/core';
import { sectionsAnimation } from '../../Services/animations.service';
import { siteContent } from '../../Models/sitecontent';

@Component({
    selector: 'app-privacidad',
    templateUrl: './privacidad.component.html',
    styleUrls: ['./privacidad.component.scss'],
    animations: [sectionsAnimation]
})
export class PrivacidadComponent {
    public content:any;
    constructor(){
        this.content = siteContent.find((x:any)=>x.Url==="privacidad")?.Contenido;
    }
}
