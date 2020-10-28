import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPieChartComponent } from './all-pie-chart.component';

describe('AllPieChartComponent', () => {
  let component: AllPieChartComponent;
  let fixture: ComponentFixture<AllPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
