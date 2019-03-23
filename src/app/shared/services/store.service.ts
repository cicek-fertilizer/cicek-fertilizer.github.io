import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  async getStores(): Promise<Store[]> {
    return await this.apiService.get('stores').toPromise();
  }
}
