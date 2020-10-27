import { Component, OnInit } from '@angular/core';
import { WindowRefService } from 'src/app/services/window-ref.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
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
  // options
  showXAxis = true;
  showYAxis = true;
  gradient: false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Categories';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  legendTitle = 'Sensitive Data';

  graphSensitiveData = [
    {
      name: 'Sensitive',
      series: [
        {
          name: 'C1',
          value: 5
        },
        {
          name: 'C2',
          value: 14
        },
        {
          name: 'C3',
          value: 7
        },
        {
          name: 'C4',
          value: 10
        },
        {
          name: 'C5',
          value: 4
        },
        {
          name: 'C6',
          value: 25
        }
      ]
    },
  ];

  graphNonSensitiveData = [
    {
      name: 'Non sensitive',
      series: [
        {
          name: 'E1',
          value: 12
        },
        {
          name: 'E2',
          value: 6
        },
        {
          name: 'E3',
          value: 3
        },
        {
          name: 'E4',
          value: 10
        },
        {
          name: 'E5',
          value: 15
        },
        {
          name: 'E6',
          value: 20
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
