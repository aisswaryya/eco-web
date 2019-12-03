import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDonationsListComponent } from './my-donations-list.component';

describe('MyDonationsListComponent', () => {
  let component: MyDonationsListComponent;
  let fixture: ComponentFixture<MyDonationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDonationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDonationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
