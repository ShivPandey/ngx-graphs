import { Component, OnInit } from '@angular/core';
import { WindowRefService } from 'src/app/services/window-ref.service';
@Component({
  selector: 'app-pii-pie-chart',
  templateUrl: './pii-pie-chart.component.html',
  styleUrls: ['./pii-pie-chart.component.scss']
})
export class PiiPieChartComponent implements OnInit {

  constructor(private winRef: WindowRefService) { }
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
  legendPosition: string = 'bottom';


  piiPie = [
    {
      name: 'C1',
      value: 4
    },
    {
      name: 'C2',
      value: 20
    },
    {
      name: 'C3',
      value: 25
    },
    {
      name: 'C4',
      value: 13
    },
    {
      name: 'C5',
      value: 19
    },
    {
      name: 'C6',
      value: 5
    },
    {
      name: 'C7',
      value: 20
    },
    {
      name: 'C8',
      value: 4
    },
    {
      name: 'C9',
      value: 8
    },
    {
      name: 'C10',
      value: 0
    }
  ];

  ngOnInit(): void {
  }

}
