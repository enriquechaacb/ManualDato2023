import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalesdeventaComponent } from './canalesdeventa.component';

describe('CanalesdeventaComponent', () => {
  let component: CanalesdeventaComponent;
  let fixture: ComponentFixture<CanalesdeventaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanalesdeventaComponent]
    });
    fixture = TestBed.createComponent(CanalesdeventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
