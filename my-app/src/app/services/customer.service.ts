import { any } from 'codelyzer/util/function';
import { Product } from '../model/product';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CustomerService {
  private basketUrl = 'http://localhost:8080/rest/basket';
  constructor(private http: HttpClient) { }
  panierProdcut: Observable<Product[]>;

  getBasketProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.basketUrl, httpOptions);
  }

  addProductToBasket(product: Product): Observable<Product> {
    return this.http.post<Product>(this.basketUrl, product, httpOptions);
  }

  getTotal(): Observable<Product[]> {
    return this.http.get<Product[]>(this.basketUrl, httpOptions);
  }

}
