import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { UpperCasePipe } from '@angular/common';
import { Product } from '../model/product';
import { Application } from '../app.component';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ProductService {
  private  productsUrl= 'http://localhost:8080/rest/products';
  constructor( private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    var uppercase = new UpperCasePipe();
    return this.http.get<Product[]>(this.productsUrl, httpOptions)
    .map((productArray) => {
      productArray.map((p) => {
        p.title = uppercase.transform(p.title);
      });
      return productArray;
    });
  }

  isTheLast(p: Product): boolean {
    return (p.stock === 1);
  }
  isAvailable(p: Product): boolean {
    return (p.stock !== 0);
  }
  decreaseStock(p: Product): void {
    p.stock--;
  }

}
