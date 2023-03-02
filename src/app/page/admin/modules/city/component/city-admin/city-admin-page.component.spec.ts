import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAdminPageComponent } from './city-admin-page.component';

describe('CityAdminPageComponent', () => {
  let component: CityAdminPageComponent;
  let fixture: ComponentFixture<CityAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityAdminPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CityAdminPageComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
