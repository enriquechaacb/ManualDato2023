import { Component } from '@angular/core';
import { GlobalService } from '../../Services/global.service';

@Component({
    selector: 'app-tutorial',
    template: '<button mat-icon-button type="button" color="warn" matTooltip="Tutorial de uso" (click)="openTutorial()"><mat-icon>help</mat-icon></button>',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
    constructor(
        public _globalService: GlobalService
    ) { }
    openTutorial() {
        this._globalService.openModal(TutorialModalComponent, 0, '800px', '', 0);
    }
}

@Component({
    selector: 'app-modal-tutorial',
    templateUrl: './tutorial.popup.component.html',
    styleUrls: ['./tutorial.component.scss']
})
export class TutorialModalComponent {
    constructor() { }
    downloadPDF(){ window.open('../../../../../assets/downloads/TutorialBiblioSmart.pdf','_blank') }
}
