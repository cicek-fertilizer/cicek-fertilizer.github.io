import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fertilizer-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {

  @Input('data') data: any[];
  
  solar = {
    name: 'solar',
    selectable: true,
    group: 'Continuous',
    domain: [
      '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
