import { Component, EventEmitter, Input, Output } from '@angular/core';

//#region sEPARADOR --------------------------------------------------------------------------------------
@Component({
    selector: 'separator',
    template: `<div class="separator"><div></div><div></div><div></div><div></div></div>`,
    styleUrls: ['./widgets.component.scss']
})
export class WidgetSeparator {}
//#endregion


//#region BREADCRUMBS ---------------------------------------------------------------------------------------
@Component({
    selector: 'app-breadcrumb',
    template: `<ul class="breadcrumb">
        <li *ngFor="let item of ruta; let i = index" (click)="onBreadcrumbClick(i,item.Url)" routerLink="{{item.Url}}">
            {{item.Nombre}}
        </li>
    </ul>`,
    styleUrls: ['./widgets.component.scss'],
})
export class BreadcrumbComponent {
    @Input() ruta: any[] = [];
    @Output() breadcrumbClick = new EventEmitter<number>();

    onBreadcrumbClick(index:number,id: number) {
        if(index !== this.ruta.length - 1){
            this.breadcrumbClick.emit(id);
        }
    }
}
//#endregion

//#region MENU INTERNO --------------------------------------------------------------------------------------
@Component({
    selector: 'axis-menu',
    template: `<ul class="submenu {{location}}">
        <li *ngFor="let item of Secciones" [ngClass]="{'d-none': item.Activo === false}">
            <span *ngIf="!item.EsExterno" class="{{class}}" routerLink="../{{item.Valor}}" [ngClass]="{'active': Seccion === item.Valor}" (click)="drawerclose()">{{item.Nombre}}</span>
            <span *ngIf="item.EsExterno" class="{{class}}" (click)="downloadEbook(item.Valor)">{{item.Nombre}}</span>
            <ul *ngIf="item.Temas">
                <li *ngFor="let li of item.Temas">
                    <span routerLink="../{{li.Valor}}" class="{{class}}" [ngClass]="{'active': Seccion === li.Valor}" (click)="drawerclose()">{{li.Nombre}}</span>
                </li>
            </ul>
        </li>
    </ul>`,
    styleUrls: ['./widgets.component.scss']
})
export class AxisMenu {
    @Input() Secciones: any;
    @Input() Seccion: any;
    @Input() location: any;
    @Input() class: any;
    @Output() drawer = new EventEmitter<number>();

    drawerclose(){
        this.drawer.emit();
    }
    downloadEbook(url: string) {
        const d = '../../../assets/downloads/' + url + '.pdf';
        window.open(d, '_blank');
    }
}
//#endregion