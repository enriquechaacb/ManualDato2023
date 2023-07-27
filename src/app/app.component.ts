import { Component, HostListener } from '@angular/core';
import { GlobalService } from './Services/global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        public _globalService: GlobalService
    ){}
}
