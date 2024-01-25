import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//#region SEPARADOR --------------------------------------------------------------------------------------
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

//#region HERRAMIENTAS ---------------------------------------------------------------------
@Component({
    selector: 'app-herramientas',
    template: `<section class="seccion tools">
    <div class="container">
        <h2 class="tooltitle"><mat-icon>{{Icon}}</mat-icon> <span>{{Title}}</span></h2>
        <div class="tool" *ngFor="let item of Tools">
            <h5><mat-icon>{{IconList}}</mat-icon> {{item.Tema}}{{item.Palabra}}{{item.Nombre}}{{item.Autor}} {{item.Titulo}}</h5>
            <a href="{{item.Url}}" target="_blank">{{item.Recurso ? item.Recurso : (item.Contacto ? item.Contacto : item.Url)}}</a>
            <p>
                {{item.Descripcion}}{{item.Subtitulo}}{{item.Significado}}
                <small>{{item.Observaciones}}{{item.Fuente}}</small>
            </p>          
        </div>
    </div>
</section>`,
    styleUrls: ['./widgets.component.scss'],
})
export class HerramientasComponent implements OnInit {
    @Input() Tools: any[] = [];
    @Input() Title: string = '';
    public Icon: string = '';
    public IconList: string = '';

    ngOnInit(): void {
        switch(this.Title){
            case 'Herramientas': this.Icon = 'settings'; this.IconList = 'construction'; break;
            case 'Glosario': this.Icon = 'speaker_notes'; this.IconList = 'speaker_notes'; break;
            case 'Expertos': this.Icon = 'psychology'; this.IconList = 'contact_emergency'; break;
            case 'Instituciones': this.Icon = 'account_balance'; this.IconList = 'account_balance'; break;
            case 'Literatura': this.Icon = 'auto_stories'; this.IconList = 'auto_stories'; break;
            case 'WebSites': this.Icon = 'travel_explore'; this.IconList = 'travel_explore'; break;
        }
    }
}
//#endregion
