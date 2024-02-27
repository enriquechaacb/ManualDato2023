import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondeclientesComponent } from './gestiondeclientes.component';

describe('GestiondeclientesComponent', () => {
  let component: GestiondeclientesComponent;
  let fixture: ComponentFixture<GestiondeclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestiondeclientesComponent]
    });
    fixture = TestBed.createComponent(GestiondeclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
