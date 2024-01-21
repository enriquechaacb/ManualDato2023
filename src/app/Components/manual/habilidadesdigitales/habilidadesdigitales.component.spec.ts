import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesdigitalesComponent } from './habilidadesdigitales.component';

describe('HabilidadesdigitalesComponent', () => {
  let component: HabilidadesdigitalesComponent;
  let fixture: ComponentFixture<HabilidadesdigitalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadesdigitalesComponent]
    });
    fixture = TestBed.createComponent(HabilidadesdigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
