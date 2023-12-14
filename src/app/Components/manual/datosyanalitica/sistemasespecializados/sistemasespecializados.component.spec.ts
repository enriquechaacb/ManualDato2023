import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasespecializadosComponent } from './sistemasespecializados.component';

describe('SistemasespecializadosComponent', () => {
    let component: SistemasespecializadosComponent;
    let fixture: ComponentFixture<SistemasespecializadosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SistemasespecializadosComponent]
        });
        fixture = TestBed.createComponent(SistemasespecializadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
