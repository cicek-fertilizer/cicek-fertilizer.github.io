import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fertilizer-advanced-pie',
  templateUrl: './advanced-pie.component.html',
  styleUrls: ['./advanced-pie.component.scss']
})
export class AdvancedPieComponent implements OnInit {
  vivid = {
    name: 'vivid',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#ff3d00',
      '#3f51b5',
      '#2196f3',
      '#00b862',
      '#afdf0a',
      '#a7b61a',
      '#f3e562',
      '#ff9800',
      '#ff5722',
      '#ff4514'
    ]
  };

  @Input('data') data: any[];

  constructor() {}

  ngOnInit() {}
}
