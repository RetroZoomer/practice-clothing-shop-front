import { Component } from '@angular/core';
import {IProduct} from "./models/product";
import {product as data} from "./data/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: IProduct[] = data
}
