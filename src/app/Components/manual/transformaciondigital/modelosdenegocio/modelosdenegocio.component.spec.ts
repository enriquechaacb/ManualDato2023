import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosdenegocioComponent } from './modelosdenegocio.component';

describe('ModelosdenegocioComponent', () => {
  let component: ModelosdenegocioComponent;
  let fixture: ComponentFixture<ModelosdenegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelosdenegocioComponent]
    });
    fixture = TestBed.createComponent(ModelosdenegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
