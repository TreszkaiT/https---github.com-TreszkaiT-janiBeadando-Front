import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAdminPageComponent } from './study-admin-page.component';

describe('StudyAdminPageComponent', () => {
  let component: StudyAdminPageComponent;
  let fixture: ComponentFixture<StudyAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
