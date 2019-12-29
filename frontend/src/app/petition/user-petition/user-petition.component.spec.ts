import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPetitionComponent } from './user-petition.component';

describe('UserPetitionComponent', () => {
  let component: UserPetitionComponent;
  let fixture: ComponentFixture<UserPetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
