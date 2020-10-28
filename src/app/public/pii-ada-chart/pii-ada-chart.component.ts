import { Component, OnInit } from '@angular/core';
import { WindowRefService } from 'src/app/services/window-ref.service';
@Component({
  selector: 'app-pii-ada-chart',
  templateUrl: './pii-ada-chart.component.html',
  styleUrls: ['./pii-ada-chart.component.scss']
})
export class PiiAdaChartComponent implements OnInit {

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
  ];

  ngOnInit(): void {
  }

}
