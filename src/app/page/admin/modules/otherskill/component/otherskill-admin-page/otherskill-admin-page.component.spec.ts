import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherskillAdminPageComponent } from './otherskill-admin-page.component';

describe('OtherskillAdminPageComponent', () => {
  let component: OtherskillAdminPageComponent;
  let fixture: ComponentFixture<OtherskillAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherskillAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherskillAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
