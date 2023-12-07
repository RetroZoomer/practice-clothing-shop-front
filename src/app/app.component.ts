import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {product, product as data} from "./data/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  products: IProduct[] = []

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  this.productsService.getAll().subscribe(products => {
    this.products = products
  })
  }
}
