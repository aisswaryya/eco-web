import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPetitionComponent } from './view-petition.component';

describe('ViewPetitionComponent', () => {
  let component: ViewPetitionComponent;
  let fixture: ComponentFixture<ViewPetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
