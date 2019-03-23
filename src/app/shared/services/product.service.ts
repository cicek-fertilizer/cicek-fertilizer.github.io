import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  async getProducts(): Promise<Product[]> {
    return await this.apiService.get('products').toPromise();
  }
}
