import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-pie-chart',
  templateUrl: './advance-pie-chart.component.html',
  styleUrls: ['./advance-pie-chart.component.scss']
})
export class AdvancePieChartComponent implements OnInit {
  colors = {
    domain: ['#F57C00',
    '#4CAF50',
    '#FBC02D',
    '#ffa600', 
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
