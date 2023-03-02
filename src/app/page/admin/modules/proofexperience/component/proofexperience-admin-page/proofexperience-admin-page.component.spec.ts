import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofexperienceAdminPageComponent } from './proofexperience-admin-page.component';

describe('ProofexperienceAdminPageComponent', () => {
  let component: ProofexperienceAdminPageComponent;
  let fixture: ComponentFixture<ProofexperienceAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofexperienceAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofexperienceAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
