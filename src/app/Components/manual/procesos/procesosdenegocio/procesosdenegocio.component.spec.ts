import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosdenegocioComponent } from './procesosdenegocio.component';

describe('ProcesosdenegocioComponent', () => {
  let component: ProcesosdenegocioComponent;
  let fixture: ComponentFixture<ProcesosdenegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesosdenegocioComponent]
    });
    fixture = TestBed.createComponent(ProcesosdenegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
