import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosyanaliticaComponent } from './datosyanalitica.component';

describe('DatosyanaliticaComponent', () => {
  let component: DatosyanaliticaComponent;
  let fixture: ComponentFixture<DatosyanaliticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosyanaliticaComponent]
    });
    fixture = TestBed.createComponent(DatosyanaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
