import { TrierPipe } from '../trier.pipe';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'], 
  providers: [TrierPipe]
})
export class ProductComponent {
  @Input() data: Product;
  @Output() addToBasket = new EventEmitter<Product>();
  public onClick() { this.addToBasket.emit(this.data); }
  constructor(private  productService: ProductService) {
  }
  isTheLast (p: Product): boolean {
    return this.productService.isTheLast(p);
  }
}
