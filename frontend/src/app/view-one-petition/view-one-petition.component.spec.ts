import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnePetitionComponent } from './view-one-petition.component';

describe('ViewOnePetitionComponent', () => {
  let component: ViewOnePetitionComponent;
  let fixture: ComponentFixture<ViewOnePetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOnePetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnePetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
