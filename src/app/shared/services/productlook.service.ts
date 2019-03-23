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
}
