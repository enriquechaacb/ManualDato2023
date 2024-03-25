import { HostListener, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

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
            if(id){
                var w = window.innerWidth;
                var element = document.getElementById(id);
                var headerOffset = w < 768 ? 0 : 110;
                var elementPosition = element ? element.getBoundingClientRect().top : 0;
                var offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }else{
                window.scrollTo(0, 0);
            }
        }
	}
}


@Injectable({
    providedIn: 'root'
})
export class VariablesService {
    private PageTitle = new BehaviorSubject<string>('');
    private Url = new BehaviorSubject<string>('');

    public pageTitle = this.PageTitle.asObservable();
    public url = this.Url.asObservable();

    public setPageTitle(x: any) { this.PageTitle.next(x); }
    public setUrl(x: any) { this.Url.next(x); }
}
