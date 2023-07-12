import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public scrHeight: any;
    @HostListener('window:resize', ['$event'])
    getScreenSize() {
        this.scrHeight = (window.innerHeight) + "px";
    }
    constructor(){this.getScreenSize();}
}
