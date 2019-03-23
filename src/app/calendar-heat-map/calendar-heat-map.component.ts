import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fertilizer-calendar-heat-map',
  templateUrl: './calendar-heat-map.component.html',
  styleUrls: ['./calendar-heat-map.component.scss']
})
export class CalendarHeatMapComponent implements OnInit {

  @Input('data') data: any[];

  view: [1100, 200];

  aqua = {
    name: 'aqua',
    selectable: true,
    group: 'Continuous',
    domain: [
      '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
