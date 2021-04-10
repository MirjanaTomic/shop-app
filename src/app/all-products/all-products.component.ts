import { Component, OnInit } from '@angular/core';

import { Product } from './../models/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: Product[];
  productsSub;

  constructor(private productService: ProductsService) { 
    this.productsSub = productService.products$.subscribe(
      products => {
        this.products = products;
      }
    )
  }

  ngOnInit(): void {
    console.log(this.productService.baseUrl);
    this.productService.products$;
    console.log(this.productService.products$);
  }

}
