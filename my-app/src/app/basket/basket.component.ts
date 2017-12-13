import { Product } from '../model/product';
import { Observable } from 'rxjs/Rx';
import { CustomerService } from '../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  productsBasket: Product[];

  constructor(public custumoerService: CustomerService) { }

  ngOnInit() {
    this.getBasketProduct();
  }

  getBasketProduct(): void {
    this.custumoerService.getBasketProduct()
      .subscribe(products => { this.productsBasket = products; });
  }

}
