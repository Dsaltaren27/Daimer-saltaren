import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}${environment.products}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}${environment.products}${id}`);
  }
}
