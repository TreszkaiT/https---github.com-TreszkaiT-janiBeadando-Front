import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageappListComponent } from './messageapp-list.component';

describe('MessageappListComponent', () => {
  let component: MessageappListComponent;
  let fixture: ComponentFixture<MessageappListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageappListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageappListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
