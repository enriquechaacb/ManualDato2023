import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondetalentohumanoComponent } from './gestiondetalentohumano.component';

describe('GestiondetalentohumanoComponent', () => {
  let component: GestiondetalentohumanoComponent;
  let fixture: ComponentFixture<GestiondetalentohumanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestiondetalentohumanoComponent]
    });
    fixture = TestBed.createComponent(GestiondetalentohumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
