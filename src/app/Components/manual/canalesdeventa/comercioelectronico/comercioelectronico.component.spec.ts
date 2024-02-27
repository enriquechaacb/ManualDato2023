import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioelectronicoComponent } from './comercioelectronico.component';

describe('ComercioelectronicoComponent', () => {
  let component: ComercioelectronicoComponent;
  let fixture: ComponentFixture<ComercioelectronicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComercioelectronicoComponent]
    });
    fixture = TestBed.createComponent(ComercioelectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
