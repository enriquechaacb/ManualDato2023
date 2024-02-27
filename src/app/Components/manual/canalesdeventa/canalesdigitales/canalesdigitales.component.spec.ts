import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalesdigitalesComponent } from './canalesdigitales.component';

describe('CanalesdigitalesComponent', () => {
  let component: CanalesdigitalesComponent;
  let fixture: ComponentFixture<CanalesdigitalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalesdigitalesComponent]
    });
    fixture = TestBed.createComponent(CanalesdigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
