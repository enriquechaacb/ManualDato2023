import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraestructuraComponent } from './infraestructura.component';

describe('InfraestructuraComponent', () => {
  let component: InfraestructuraComponent;
  let fixture: ComponentFixture<InfraestructuraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfraestructuraComponent]
    });
    fixture = TestBed.createComponent(InfraestructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
