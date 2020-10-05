import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricDateUsComponent } from './historic-date-us.component';

describe('HistoricDateUsComponent', () => {
  let component: HistoricDateUsComponent;
  let fixture: ComponentFixture<HistoricDateUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricDateUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricDateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
