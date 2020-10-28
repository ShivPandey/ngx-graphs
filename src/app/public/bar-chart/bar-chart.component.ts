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
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'Cust Review Points';
  legendTitle = 'Legend';

  graphSensitiveData = [
    {
      name: 'PII Data',
      series: [
        {
          name: 'Personnel Info',
          value: 14
        },
        {
          name: 'Passport Info',
          value: 2
        },
        {
          name: 'Credit & Debit Card Number',
          value: 23
        },
        {
          name: 'Banking Accounts',
          value: 5
        },
        {
          name: 'Passwords',
          value: 9
        },
        {
          name: 'Digital Accounts & Emails',
          value: 1
        },
        {
          name: 'Biometric Info',
          value: 7
        },
        {
          name: 'Personal Phone Num',
          value: 20
        },
        {
          name: 'Identification Num Records',
          value: 1
        }

      ]
    },
  ];

  graphNonSensitiveData = [
    {
      name: 'ADA Data',
      series: [
        {
          name: 'Digital Accessibility',
          value: 4
        },
        {
          name: 'Account Opening Disclosure',
          value: 20
        },
        {
          name: 'Pay App Disclosure',
          value: 25
        },
        {
          name: 'Account Opening Privacy',
          value: 13
        },
        {
          name: 'Identity Theft',
          value: 19
        },
        {
          name: 'Equal Access to service',
          value: 5
        },
        {
          name: 'Telemarketing',
          value: 20
        },
        {
          name: 'Periodic Statements',
          value: 4
        },
        {
          name: 'Change in Terms',
          value: 8
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
