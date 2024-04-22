import { Component } from '@angular/core';
import { sectionsAnimation } from '../../Services/animations.service';
import { siteContent } from '../../Models/sitecontent';

@Component({
    selector: 'app-creditos',
    templateUrl: './creditos.component.html',
    styleUrls: ['./creditos.component.scss'],
    animations: [sectionsAnimation]
})
export class CreditosComponent {
    public content: any;
    constructor() {
        this.content = siteContent.find((x: any) => x.Url === "creditos")?.Contenido;
    }
}
