import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionypersonasComponent } from './organizacionypersonas.component';

describe('OrganizacionypersonasComponent', () => {
  let component: OrganizacionypersonasComponent;
  let fixture: ComponentFixture<OrganizacionypersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizacionypersonasComponent]
    });
    fixture = TestBed.createComponent(OrganizacionypersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
