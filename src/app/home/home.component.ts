import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/models/store.model';
import { ProductlookService } from '../shared/services/productlook.service';
import { StoreService } from '../shared/services/store.service';
import { NameValue } from '../shared/models/name-value.model.ts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedStoreId: number;

  stores: Store[];

  globalCategoryStats: any[];

  heatMapData: any[];

  constructor(private storeService: StoreService, private productlookService: ProductlookService) {}

  async storeChanged(newValue: number) {
    // this one is working but UI is not updated WHY??
    if (newValue) {
      const heatData = await this.productlookService.getHeatMapData(newValue);
      const newData = [
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
      Object.keys(heatData).forEach(index => {
        console.log(index);
        const col = newData.find(obj => obj.name == `Column ${(parseInt(index) % 4) + 1}`);
        col.series.find(obj => obj.name == `Row ${~~(parseInt(index) / 4) + 1}`).value = heatData[index];
      });
      this.heatMapData = newData;
    }
  }

  async ngOnInit() {
    this.stores = await this.storeService.getStores();
    // const res = await this.productlookService.getGlobalCategoryStatistics();
    // console.log(res);
    // Object.entries(res).forEach(([key, value]) => {
    //   this.globalCategoryStats.push(new NameValue(key, value));
    // });
    // console.log(this.globalCategoryStats);
    const globalData = [
      new NameValue('Accessory', 401),
      new NameValue('Flower', 1040),
      new NameValue('General', 280),
      new NameValue('Office', 40),
      new NameValue('Toy', 160),
      new NameValue('Accessory', 4)
    ];
    this.globalCategoryStats = globalData;
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
