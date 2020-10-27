import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiiAdaChartComponent } from './pii-ada-chart.component';

describe('PiiAdaChartComponent', () => {
  let component: PiiAdaChartComponent;
  let fixture: ComponentFixture<PiiAdaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiiAdaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiiAdaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
