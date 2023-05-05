import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }
  getSingleProduct(id: any) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getAllCategories() {
    return this.http.get(`https://fakestoreapi.com/products/categories`);
  }
}
