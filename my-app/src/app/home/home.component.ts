import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<Product>;
  total : number;
  constructor(
    private productService : ProductService,
   private customerService: CustomerService,
   @Inject('title') public title: String
 ) {
   this.products=[];
   productService.getProducts().subscribe(data=>{
     this.products= data;
   });
 }
  ngOnInit() {
    this.getTotal();
  }

// les methodes product service
isAvailable(p: Product): boolean {
  return this.productService.isAvailable(p);
}
// les methodes customer service
addProductToBasket(p: Product): void {
  this.productService.decreaseStock(p);
  this.customerService.addProductToBasket(p).subscribe();
  this.getTotal();
}
getTotal(): void {
  this.customerService.getTotal().subscribe(prdts=>{
    this.total = prdts.reduce((t,p)=> t+p.price, 0);
  });
}

}
