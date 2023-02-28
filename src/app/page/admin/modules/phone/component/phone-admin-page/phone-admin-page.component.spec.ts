import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAdminPageComponent } from './phone-admin-page.component';

describe('PhoneAdminPageComponent', () => {
  let component: PhoneAdminPageComponent;
  let fixture: ComponentFixture<PhoneAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
