import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/models/store.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedStoreId: number;

  stores = [
    new Store(1, 10.2312321, 12.1231231, 'Istanbul', 'Beyoğlu'),
    new Store(2, 10.2312321, 12.1231231, 'Istanbul', 'Kadıköy'),
    new Store(3, 10.2312321, 12.1231231, 'Istanbul', 'Beşiktaş'),
    new Store(4, 10.2312321, 12.1231231, 'Istanbul', 'Sarıyer'),
  ]

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

  fakeSeriesData = [
    {
      "name": "Malaysia",
      "series": [
        {
          "name": "1990",
          "value": 58746
        },
        {
          "name": "2000",
          "value": 58303
        },
        {
          "name": "2010",
          "value": 21300
        }
      ]
    },
    {
      "name": "Bhutan",
      "series": [
        {
          "name": "1990",
          "value": 22709
        },
        {
          "name": "2000",
          "value": 27529
        },
        {
          "name": "2010",
          "value": 53679
        }
      ]
    },
    {
      "name": "Nauru",
      "series": [
        {
          "name": "1990",
          "value": 12496
        },
        {
          "name": "2000",
          "value": 38478
        },
        {
          "name": "2010",
          "value": 43356
        }
      ]
    },
    {
      "name": "Malawi",
      "series": [
        {
          "name": "1990",
          "value": 25731
        },
        {
          "name": "2000",
          "value": 40521
        },
        {
          "name": "2010",
          "value": 50143
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
