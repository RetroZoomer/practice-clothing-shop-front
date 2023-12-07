import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  products: IProduct[] = []

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
    })
  }
}
