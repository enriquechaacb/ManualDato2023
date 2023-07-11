import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public scrHeight: any;
    @HostListener('window:resize', ['$event'])
    getScreenSize() {
        this.scrHeight = (window.innerHeight - 56) + "px";
    }
    constructor(){this.getScreenSize();}
}
