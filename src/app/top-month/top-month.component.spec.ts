import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMonthComponent } from './top-month.component';

describe('TopMonthComponent', () => {
  let component: TopMonthComponent;
  let fixture: ComponentFixture<TopMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
