import { Product } from './model/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trier'
})
export class TrierPipe implements PipeTransform {

  transform(value: Array<Product>, prop: string): any {
    return value.sort(function(a,b){
      if(a[prop]>b[prop]){
        return 1;
      } else if (a[prop]< b[prop]) {
        return -1; 
      } else {
        return 0;
      }
    });
  }

}
