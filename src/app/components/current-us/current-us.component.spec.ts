import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUsComponent } from './current-us.component';

describe('CurrentUsComponent', () => {
  let component: CurrentUsComponent;
  let fixture: ComponentFixture<CurrentUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
