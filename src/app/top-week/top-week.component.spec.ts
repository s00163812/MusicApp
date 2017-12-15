import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWeekComponent } from './top-week.component';

describe('TopWeekComponent', () => {
  let component: TopWeekComponent;
  let fixture: ComponentFixture<TopWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
