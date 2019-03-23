import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlookService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  async getHeatMapData(storeId: number) {
    const params = new HttpParams().set('storeId', `${storeId}`);
    const result = await this.apiService.get('productlook/storeShelf', params).toPromise();
    return result;
  }

  async getGlobalStatsOfItem(productId: number) {
    const params = new HttpParams().set('productId', `${productId}`);
    const result = await this.apiService.get('productlook/productInfo', params).toPromise();
    return result;
  }

  async getLocalStatsOfItem(productId: number, storeId: number) {
    const params = new HttpParams().append('productId', `${productId}`).append('storeId', `${storeId}`);
    const result = await this.apiService.get('productlook/productInfo', params).toPromise();
    return result;
  }

  async getGlobalCategoryStatistics() {
    const result = await this.apiService.get('productlook/category').toPromise();
    return result;
  }
}
