import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAllTimeComponent } from './top-all-time.component';

describe('TopAllTimeComponent', () => {
  let component: TopAllTimeComponent;
  let fixture: ComponentFixture<TopAllTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAllTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAllTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
