import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaorganizacionalComponent } from './culturaorganizacional.component';

describe('CulturaorganizacionalComponent', () => {
  let component: CulturaorganizacionalComponent;
  let fixture: ComponentFixture<CulturaorganizacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturaorganizacionalComponent]
    });
    fixture = TestBed.createComponent(CulturaorganizacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
