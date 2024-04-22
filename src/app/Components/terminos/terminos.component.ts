import { Component } from '@angular/core';
import { sectionsAnimation } from '../../Services/animations.service';
import { siteContent } from '../../Models/sitecontent';

@Component({
    selector: 'app-terminos',
    templateUrl: './terminos.component.html',
    styleUrls: ['./terminos.component.scss'],
    animations: [sectionsAnimation]

})
export class TerminosComponent {
    public content:any;
    constructor(){
        this.content = siteContent.find((x:any)=>x.Url==="terminos")?.Contenido;
    }
}
