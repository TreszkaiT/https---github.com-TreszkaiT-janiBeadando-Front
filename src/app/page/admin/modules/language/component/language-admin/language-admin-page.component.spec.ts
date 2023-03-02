import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAdminPageComponent } from './language-admin-page.component';

describe('LanguageAdminPageComponent', () => {
  let component: LanguageAdminPageComponent;
  let fixture: ComponentFixture<LanguageAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
