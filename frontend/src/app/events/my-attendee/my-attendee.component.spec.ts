import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAttendeeComponent } from './my-attendee.component';

describe('MyAttendeeComponent', () => {
  let component: MyAttendeeComponent;
  let fixture: ComponentFixture<MyAttendeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAttendeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
