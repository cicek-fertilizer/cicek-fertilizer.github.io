import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fertilizer-advanced-pie',
  templateUrl: './advanced-pie.component.html',
  styleUrls: ['./advanced-pie.component.scss']
})
export class AdvancedPieComponent implements OnInit {

  @Input('data') data: any[];

  constructor() { }

  ngOnInit() {
  }

}
