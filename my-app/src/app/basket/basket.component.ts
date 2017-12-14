import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Rx';
import { CustomerService } from '../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { TrierPipe } from '../trier.pipe';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  productsBasket: Product[];
  customers: Customer[];

  constructor(public custumoerService: CustomerService) { }

  ngOnInit() {
    this.getBasketProduct();
  }

  getBasketProduct(): void {
    this.custumoerService.getBasketProduct()
      .subscribe(products => { this.productsBasket = products; });
  }
  checkout(customerName: string, customerAdd: string, customerCC: string): void {
    var customer: Customer = new Customer(customerName.trim(), customerAdd.trim(), customerCC.trim());
    this.custumoerService.checkout(customer)
      .subscribe();
  }
}
