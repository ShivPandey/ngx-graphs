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
  ];

  ngOnInit(): void {
  }

}
