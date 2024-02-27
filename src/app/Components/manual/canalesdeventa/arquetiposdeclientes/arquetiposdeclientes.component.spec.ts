import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquetiposdeclientesComponent } from './arquetiposdeclientes.component';

describe('ArquetiposdeclientesComponent', () => {
  let component: ArquetiposdeclientesComponent;
  let fixture: ComponentFixture<ArquetiposdeclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArquetiposdeclientesComponent]
    });
    fixture = TestBed.createComponent(ArquetiposdeclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
