import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiadenegociosComponent } from './estrategiadenegocios.component';

describe('EstrategiadenegociosComponent', () => {
  let component: EstrategiadenegociosComponent;
  let fixture: ComponentFixture<EstrategiadenegociosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstrategiadenegociosComponent]
    });
    fixture = TestBed.createComponent(EstrategiadenegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
