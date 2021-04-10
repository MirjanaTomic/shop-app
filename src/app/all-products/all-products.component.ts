import { Component, OnInit } from '@angular/core';

import { Product } from './../models/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products$ = this.productService.products$;

  constructor(private productService: ProductsService) { 
  }

  ngOnInit(): void {
  }

}
