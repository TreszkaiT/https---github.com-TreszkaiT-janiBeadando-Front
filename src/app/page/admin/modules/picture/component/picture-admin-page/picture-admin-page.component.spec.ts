import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureAdminPageComponent } from './picture-admin-page.component';

describe('PictureAdminPageComponent', () => {
  let component: PictureAdminPageComponent;
  let fixture: ComponentFixture<PictureAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
