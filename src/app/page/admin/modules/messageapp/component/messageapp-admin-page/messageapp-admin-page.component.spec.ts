import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageappAdminPageComponent } from './messageapp-admin-page.component';

describe('MessageappAdminPageComponent', () => {
  let component: MessageappAdminPageComponent;
  let fixture: ComponentFixture<MessageappAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageappAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageappAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
