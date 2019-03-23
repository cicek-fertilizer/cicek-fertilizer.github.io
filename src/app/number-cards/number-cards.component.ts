import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fertilizer-number-cards',
  templateUrl: './number-cards.component.html',
  styleUrls: ['./number-cards.component.scss']
})
export class NumberCardsComponent implements OnInit {
  
  @Input('data') data: any[];

  constructor() { }

  ngOnInit() {
  }

}
