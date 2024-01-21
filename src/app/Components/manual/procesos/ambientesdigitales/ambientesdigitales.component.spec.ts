import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesdigitalesComponent } from './ambientesdigitales.component';

describe('AmbientesdigitalesComponent', () => {
  let component: AmbientesdigitalesComponent;
  let fixture: ComponentFixture<AmbientesdigitalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmbientesdigitalesComponent]
    });
    fixture = TestBed.createComponent(AmbientesdigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
