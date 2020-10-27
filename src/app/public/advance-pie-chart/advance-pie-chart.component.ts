import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-pie-chart',
  templateUrl: './advance-pie-chart.component.html',
  styleUrls: ['./advance-pie-chart.component.scss']
})
export class AdvancePieChartComponent implements OnInit {
  colors = {
    domain: [
      '#d45087',
      '#f95d6a',
      '#ff7c43',
      '#ffa600'
    ]
  };
  saleData = [
    { name: 'PII', value: 92 },
    { name: 'ADA', value: 108 },
    { name: 'Non-sensitive', value: 800 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
