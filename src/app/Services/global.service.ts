import { HostListener, Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    @HostListener('window:resize', ['$event'])
    ScreenHeight() {
        const footerHeight = 142;
        var hgt = window.innerHeight - footerHeight;
        console.log(window.innerHeight,footerHeight,hgt)
        return hgt + "px";
    }
}