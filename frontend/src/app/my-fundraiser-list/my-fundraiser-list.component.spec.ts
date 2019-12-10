import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFundraiserListComponent } from './my-fundraiser-list.component';

describe('MyFundraiserListComponent', () => {
  let component: MyFundraiserListComponent;
  let fixture: ComponentFixture<MyFundraiserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFundraiserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFundraiserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
