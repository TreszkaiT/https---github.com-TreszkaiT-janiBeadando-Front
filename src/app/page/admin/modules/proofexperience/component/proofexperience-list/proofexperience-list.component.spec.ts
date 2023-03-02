import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofexperienceListComponent } from './proofexperience-list.component';

describe('ProofexperienceListComponent', () => {
  let component: ProofexperienceListComponent;
  let fixture: ComponentFixture<ProofexperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofexperienceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofexperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
