import { Component, OnInit } from '@angular/core';
import { Store } from '../shared/models/store.model';
import { ProductlookService } from '../shared/services/productlook.service';
import { Product } from '../shared/models/product.model';
import { StoreService } from '../shared/services/store.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedStoreId: number;
  selectedProductId: number;
  products: Product[];
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
    { name: '% Conversion Rate', value: `${((5000000 / 8940000) * 100).toFixed(2)}` }
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

  constructor(
    private productlookService: ProductlookService,
    private storeService: StoreService,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.stores = await this.storeService.getStores();
    this.products = await this.productService.getProducts();
  }

  async storeChanged(newValue: number) {}

  async productChanged(newValue: number) {}
}
