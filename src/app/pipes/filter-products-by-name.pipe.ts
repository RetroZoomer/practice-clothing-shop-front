import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filterProductsByName',
  standalone: true
})
export class FilterProductsByNamePipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

}
