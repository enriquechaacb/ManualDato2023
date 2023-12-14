import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliticadedatosComponent } from './analiticadedatos.component';

describe('AnaliticadedatosComponent', () => {
  let component: AnaliticadedatosComponent;
  let fixture: ComponentFixture<AnaliticadedatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnaliticadedatosComponent]
    });
    fixture = TestBed.createComponent(AnaliticadedatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
