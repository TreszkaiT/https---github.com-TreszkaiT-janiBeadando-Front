import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaListComponent } from './socialmedia-list.component';

describe('SocialmediaListComponent', () => {
  let component: SocialmediaListComponent;
  let fixture: ComponentFixture<SocialmediaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
