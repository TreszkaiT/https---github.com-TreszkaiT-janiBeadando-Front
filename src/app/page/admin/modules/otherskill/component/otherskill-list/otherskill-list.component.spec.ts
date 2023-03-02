import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherskillListComponent } from './otherskill-list.component';

describe('OtherskillListComponent', () => {
  let component: OtherskillListComponent;
  let fixture: ComponentFixture<OtherskillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherskillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherskillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
