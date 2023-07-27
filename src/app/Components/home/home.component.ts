import { Component, HostListener } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(
        public _globalService: GlobalService
    ){}
}
