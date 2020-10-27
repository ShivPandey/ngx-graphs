import { Component, OnInit } from '@angular/core';

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
  xAxisLabel = 'Sensitive Data';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  legendTitle = 'Sensitive Data';

  graphData = [
    {
      name: 'C1',
      series: [
        {
          name: 'PII',
          value: 14
        },
        {
          name: 'ADA',
          value: 4
        }
      ]
    },
    {
      name: 'C2',
      series: [
        {
          name: 'PII',
          value: 2
        },
        {
          name: 'ADA',
          value: 20
        }
      ]
    },
    {
      name: 'C3',
      series: [
        {
          name: 'PII',
          value: 23
        },
        {
          name: 'ADA',
          value: 25
        }
      ]
    },
    {
      name: 'C4',
      series: [
        {
          name: 'PII',
          value: 5
        },
        {
          name: 'ADA',
          value: 13
        }
      ]
    },
    {
      name: 'C5',
      series: [
        {
          name: 'PII',
          value: 9
        },
        {
          name: 'ADA',
          value: 19
        }
      ]
    },
    {
      name: 'C6',
      series: [
        {
          name: 'PII',
          value: 0
        },
        {
          name: 'ADA',
          value: 5
        }
      ]
    },
    {
      name: 'C7',
      series: [
        {
          name: 'PII',
          value: 7
        },
        {
          name: 'ADA',
          value: 20
        }
      ]
    },
    {
      name: 'C8',
      series: [
        {
          name: 'PII',
          value: 20
        },
        {
          name: 'ADA',
          value: 4
        }
      ]
    },
    {
      name: 'C9',
      series: [
        {
          name: 'PII',
          value: 1
        },
        {
          name: 'ADA',
          value: 8
        }
      ]
    },
    {
      name: 'C10',
      series: [
        {
          name: 'PII',
          value: 14
        },
        {
          name: 'ADA',
          value: 4
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
