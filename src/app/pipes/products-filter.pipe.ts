import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../models/product';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if(!products || !searchTerm) {
      return products;
      console.log('radi');
    }

    return products.filter(product => 
      product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
