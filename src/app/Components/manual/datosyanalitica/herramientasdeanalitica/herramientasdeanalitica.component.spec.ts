import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasdeanaliticaComponent } from './herramientasdeanalitica.component';

describe('HerramientasdeanaliticaComponent', () => {
  let component: HerramientasdeanaliticaComponent;
  let fixture: ComponentFixture<HerramientasdeanaliticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerramientasdeanaliticaComponent]
    });
    fixture = TestBed.createComponent(HerramientasdeanaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
