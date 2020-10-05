import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDateComponent } from './state-date.component';

describe('StateDateComponent', () => {
  let component: StateDateComponent;
  let fixture: ComponentFixture<StateDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
