import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligencianegocioComponent } from './inteligencianegocio.component';

describe('InteligencianegocioComponent', () => {
  let component: InteligencianegocioComponent;
  let fixture: ComponentFixture<InteligencianegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteligencianegocioComponent]
    });
    fixture = TestBed.createComponent(InteligencianegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
