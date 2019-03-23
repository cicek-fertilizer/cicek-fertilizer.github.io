import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fertilizer-number-cards',
  templateUrl: './number-cards.component.html',
  styleUrls: ['./number-cards.component.scss']
})
export class NumberCardsComponent implements OnInit {
  @Input('data') data: any[];

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
  constructor() {}

  ngOnInit() {}
}
