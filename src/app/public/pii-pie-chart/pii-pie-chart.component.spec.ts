import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiiPieChartComponent } from './pii-pie-chart.component';

describe('PiiPieChartComponent', () => {
  let component: PiiPieChartComponent;
  let fixture: ComponentFixture<PiiPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiiPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiiPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
