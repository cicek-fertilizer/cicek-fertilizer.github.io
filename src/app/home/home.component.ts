import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fakeData = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    { "name": "Turkey",
      "value": 4000000
    },
    { "name": "Israel",
      "value": 3000000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
