import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformaciondigitalComponent } from './transformaciondigital.component';

describe('TransformaciondigitalComponent', () => {
  let component: TransformaciondigitalComponent;
  let fixture: ComponentFixture<TransformaciondigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformaciondigitalComponent]
    });
    fixture = TestBed.createComponent(TransformaciondigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
