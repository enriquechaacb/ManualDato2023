import { Component } from '@angular/core';
import { GlobalService, SearchService } from '../../Services/global.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-buscador',
    template: '<button mat-icon-button type="button" matTooltip="buscar" color="warn" (click)="openSearchfield()"><mat-icon>search</mat-icon></button>',
    styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {
    constructor(
        private _globalService: GlobalService
    ){}
    openSearchfield(){
        this._globalService.openModal(BuscadorModalComponent,0,'900px','',0)
    }
}

@Component({
    selector: 'app-buscador-modal',
    templateUrl: './buscador.modal.component.html',
    styleUrls: ['./buscador.component.scss']
})
export class BuscadorModalComponent {
    public Buscar: string = '';
    public noResults: string = '';
    public results: any = [];
    constructor(
        private _searchService: SearchService,
        public _dialogRef: MatDialogRef<BuscadorModalComponent>,
    ){}
    Search(){
        if(this.Buscar.length >= 5){
            this.results = this._searchService.search(this.Buscar);
            if(this.results.length > 0){
                this.noResults = '';
            }else{
                this.noResults = 'No hay resultados para ' + this.Buscar;
                this.Buscar = '';
            }
        }
    }
    close(){ this._dialogRef.close()}
}