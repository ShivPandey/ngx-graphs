import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-pie',
  templateUrl: './advance-pie.component.html',
  styleUrls: ['./advance-pie.component.scss']
})
export class AdvancePieComponent implements OnInit {
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
  saleData = [
    { name: 'PII', value: 92 },
    { name: 'ADA', value: 108 },
    { name: 'Non-sensitive', value: 800 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
