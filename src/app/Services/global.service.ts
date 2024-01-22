import { HostListener, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalService {
    constructor(
        private _dialog: MatDialog
    ){}
    @HostListener('window:resize', ['$event'])
    ScreenHeight() {
        const footerHeight = 142;
        var hgt = window.innerHeight - footerHeight;
        return hgt + "px";
    }
    public openModal(modal: any, type: number, width: string, info: any, user: number): Observable<any> {
        const dialog = this._dialog.open(modal, {
            width: width,
            backdropClass: "backdropModal",
            panelClass: "panelModal",
            disableClose: true,
            data: { type:type, info:info, user:user }
        });
        return dialog.afterClosed();
    }
    public scrollToTop(id?:string) {
        var currentScroll = document.documentElement.scrollTop;
        if(currentScroll > 0){
            // var n = 0;
            // if(px && px > 0){n = px}
            if(id){
                let el = document.getElementById(id);
                console.log(`scrolling to ${id}`);
                if(el){
                    el.scrollIntoView()
                }
            }else{
                window.scrollTo(0, 0);
            }
        }
	}
}