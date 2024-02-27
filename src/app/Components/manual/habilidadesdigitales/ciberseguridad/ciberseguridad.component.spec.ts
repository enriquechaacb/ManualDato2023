import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiberseguridadComponent } from './ciberseguridad.component';

describe('CiberseguridadComponent', () => {
  let component: CiberseguridadComponent;
  let fixture: ComponentFixture<CiberseguridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiberseguridadComponent]
    });
    fixture = TestBed.createComponent(CiberseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
