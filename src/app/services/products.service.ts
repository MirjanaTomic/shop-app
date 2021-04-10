import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import { Product } from './../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  products$: Observable<Product[]> = this.http.get<Product[]>(this.baseUrl + '/products');
}
