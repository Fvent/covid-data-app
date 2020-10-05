import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricUsComponent } from './historic-us.component';

describe('HistoricUsComponent', () => {
  let component: HistoricUsComponent;
  let fixture: ComponentFixture<HistoricUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
