import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filterProductsByCategory',
  standalone: true
})
export class FilterProductsByCategoryPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(p => p.category.toLowerCase().includes(search.toLowerCase()));;
  }

}
