import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/models/store.model';
import { ProductlookService } from '../shared/services/productlook.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedStoreId: number;
  selectedProductId: number;
  products = [
    { productId: 1, productName: 'Ayıcık' },
    { productId: 2, productName: 'Kanayan Gül' },
    { productId: 3, productName: 'Gözü Yaşlı Penguen' }
  ];

  stores: Store[];

  fakeData = [
    {
      name: 'Total Views',
      value: 8940000
    },
    {
      name: 'Total Purchases',
      value: 5000000
    },
    { name: '% Conversion Rate', value: `${((5000000 / 8940000) * 100).toFixed(2)}` },
    { name: 'Israel', value: 3000000 }
  ];

  fakeSeriesData = [
    {
      name: 'Malaysia',
      series: [
        {
          name: '1990',
          value: 58746
        },
        {
          name: '2000',
          value: 58303
        },
        {
          name: '2010',
          value: 21300
        }
      ]
    },
    {
      name: 'Bhutan',
      series: [
        {
          name: '1990',
          value: 22709
        },
        {
          name: '2000',
          value: 27529
        },
        {
          name: '2010',
          value: 53679
        }
      ]
    },
    {
      name: 'Nauru',
      series: [
        {
          name: '1990',
          value: 12496
        },
        {
          name: '2000',
          value: 38478
        },
        {
          name: '2010',
          value: 43356
        }
      ]
    },
    {
      name: 'Malawi',
      series: [
        {
          name: '1990',
          value: 25731
        },
        {
          name: '2000',
          value: 40521
        },
        {
          name: '2010',
          value: 50143
        }
      ]
    }
  ];

  getProductName(productId: number): string {
    return this.products.find(o => o.productId === productId).productName;
  }

  constructor(private productlookService: ProductlookService) {}

  async ngOnInit() {}
}
