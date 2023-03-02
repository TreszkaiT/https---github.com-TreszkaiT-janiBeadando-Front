import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaAdminPageComponent } from './socialmedia-admin-page.component';

describe('SocialmediaAdminPageComponent', () => {
  let component: SocialmediaAdminPageComponent;
  let fixture: ComponentFixture<SocialmediaAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
