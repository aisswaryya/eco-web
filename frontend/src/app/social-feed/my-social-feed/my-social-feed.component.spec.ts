import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySocialFeedComponent } from './my-social-feed.component';

describe('MySocialFeedComponent', () => {
  let component: MySocialFeedComponent;
  let fixture: ComponentFixture<MySocialFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySocialFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySocialFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
