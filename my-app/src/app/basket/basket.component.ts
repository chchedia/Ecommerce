import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Rx';
import { CustomerService } from '../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { TrierPipe } from '../trier.pipe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public currentCustomer= new Customer();
  productsBasket: Product[];
  constructor(public custumoerService: CustomerService, private location: Location) { }

  ngOnInit() {
    this.getBasketProduct();
  }

  getBasketProduct(): void {
    this.custumoerService.getBasketProduct()
      .subscribe(products => { this.productsBasket = products; });
  }

  checkout(): void {
    this.custumoerService.checkout(this.currentCustomer).subscribe(res => {
      this.location.back();
    });
  }
}
