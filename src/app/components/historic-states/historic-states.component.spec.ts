import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricStatesComponent } from './historic-states.component';

describe('HistoricStatesComponent', () => {
  let component: HistoricStatesComponent;
  let fixture: ComponentFixture<HistoricStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
