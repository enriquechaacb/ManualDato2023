import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingdigitalComponent } from './marketingdigital.component';

describe('MarketingdigitalComponent', () => {
  let component: MarketingdigitalComponent;
  let fixture: ComponentFixture<MarketingdigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingdigitalComponent]
    });
    fixture = TestBed.createComponent(MarketingdigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
