import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pii-pie',
  templateUrl: './pii-pie.component.html',
  styleUrls: ['./pii-pie.component.scss']
})
export class PiiPieComponent implements OnInit {
  colors = {
    domain: [
      '#003f5c',
      '#2f4b7c',
      '#665191',
      '#a05195',
      '#d45087',
      '#f95d6a',
      '#ff7c43',
      '#ffa600'
    ]
  };
  single: any[];
  view: any[] = [350, 300];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';


  piiPie = [
    {
      name: 'C1',
      value: 14
    },
    {
      name: 'C2',
      value: 2
    },
    {
      name: 'C3',
      value: 23
    },
    {
      name: 'C4',
      value: 5
    },
    {
      name: 'C5',
      value: 9
    },
    {
      name: 'C6',
      value: 0
    },
    {
      name: 'C7',
      value: 7
    },
    {
      name: 'C8',
      value: 20
    },
    {
      name: 'C9',
      value: 1
    },
    {
      name: 'C10',
      value: 1
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
