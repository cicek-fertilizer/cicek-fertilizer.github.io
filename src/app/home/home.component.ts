import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/models/store.model';
import { ProductlookService } from '../shared/services/productlook.service';
import { StoreService } from '../shared/services/store.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedStoreId: number;

  stores: Store[];

  fakeData = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    { name: 'Turkey', value: 4000000 },
    { name: 'Israel', value: 3000000 }
  ];

  heatMapData: any[];

  constructor(private storeService: StoreService, private productlookService: ProductlookService) {}

  async storeChanged(newValue: number) {
    if (newValue) {
      const heatData = await this.productlookService.getHeatMapData(newValue);
      console.log(heatData);
      Object.keys(heatData).forEach(index => {
        const col = this.heatMapData.find(obj => obj.name == `Column ${(parseInt(index) % 4) + 1}`);
        //const cell =
        col.series.find(obj => obj.name == `Row ${~~(parseInt(index) / 4) + 1}`).value = heatData[index];
        // cell.value = heatData[index];
        //console.log(cell);
      });
      console.log(this.heatMapData);
    }
  }

  async ngOnInit() {
    this.stores = await this.storeService.getStores();
    this.heatMapData = [
      {
        name: 'Column 1',
        series: [
          {
            name: 'Row 3',
            value: 0
          },
          {
            name: 'Row 2',
            value: 0
          },
          {
            name: 'Row 1',
            value: 0
          }
        ]
      },
      {
        name: 'Column 2',
        series: [
          {
            name: 'Row 3',
            value: 0
          },
          {
            name: 'Row 2',
            value: 0
          },
          {
            name: 'Row 1',
            value: 0
          }
        ]
      },
      {
        name: 'Column 3',
        series: [
          {
            name: 'Row 3',
            value: 0
          },
          {
            name: 'Row 2',
            value: 0
          },
          {
            name: 'Row 1',
            value: 0
          }
        ]
      },
      {
        name: 'Column 4',
        series: [
          {
            name: 'Row 3',
            value: 0
          },
          {
            name: 'Row 2',
            value: 0
          },
          {
            name: 'Row 1',
            value: 0
          }
        ]
      }
    ];
  }
}
