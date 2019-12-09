import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePetitionComponent } from './manage-petition.component';

describe('ManagePetitionComponent', () => {
  let component: ManagePetitionComponent;
  let fixture: ComponentFixture<ManagePetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
