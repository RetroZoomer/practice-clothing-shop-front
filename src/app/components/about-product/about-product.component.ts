import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrl: './about-product.component.css'
})
export class AboutProductComponent {
  @Input() product: IProduct;
}
