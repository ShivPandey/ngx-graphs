import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-pie-chart',
  templateUrl: './all-pie-chart.component.html',
  styleUrls: ['./all-pie-chart.component.scss']
})
export class AllPieChartComponent implements OnInit {
  colors = {
    domain: ['#F57C00',
    '#4CAF50',
    '#FBC02D',
    '#ffa600', 
    ]
  };
  single: any[];
  view: any[] = [350, 300];

  // options
  gradient: boolean = false;
  showLegend: boolean = true; 
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';


  piiPie = [
    {
      name: 'PII',
      value: 9.2
    },
    {
      name: 'ADA',
      value: 11
    },
    {
      name: 'Non Sensitive',
      value: 80
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
