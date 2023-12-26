import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosmatematicosComponent } from './modelosmatematicos.component';

describe('ModelosmatematicosComponent', () => {
  let component: ModelosmatematicosComponent;
  let fixture: ComponentFixture<ModelosmatematicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelosmatematicosComponent]
    });
    fixture = TestBed.createComponent(ModelosmatematicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
