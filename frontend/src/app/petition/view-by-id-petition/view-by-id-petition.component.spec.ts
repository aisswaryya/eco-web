import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByIDPetitionComponent } from './view-by-id-petition.component';

describe('ViewByIDPetitionComponent', () => {
  let component: ViewByIDPetitionComponent;
  let fixture: ComponentFixture<ViewByIDPetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewByIDPetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByIDPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
