import { Component, OnInit } from '@angular/core';

import { Product } from './../models/product';
import { ProductsService } from './../services/products.service';
import { ProductsFilterPipe } from './../pipes/products-filter.pipe';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products$ = this.productService.products$;
  searchTerm: string;

  constructor(private productService: ProductsService) { 
  }

  ngOnInit(): void {
  }

}
