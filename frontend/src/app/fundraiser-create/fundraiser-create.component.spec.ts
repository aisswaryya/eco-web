import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserCreateComponent } from './fundraiser-create.component';

describe('FundraiserCreateComponent', () => {
  let component: FundraiserCreateComponent;
  let fixture: ComponentFixture<FundraiserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraiserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
