import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'separator',
    template: `<div class="separator"><div></div><div></div><div></div><div></div></div>`,
    styleUrls: ['./widgets.component.scss']
})
export class WidgetSeparator {}

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
