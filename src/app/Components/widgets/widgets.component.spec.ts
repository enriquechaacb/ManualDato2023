import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSeparator } from './widgets.component';

describe('WidgetsComponent', () => {
  let component: WidgetSeparator;
  let fixture: ComponentFixture<WidgetSeparator>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetSeparator]
    });
    fixture = TestBed.createComponent(WidgetSeparator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
