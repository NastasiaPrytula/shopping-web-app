import { Injectable } from '@angular/core';

import { Products } from '../admin-products/Products.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  navbarFavProdCount = 0;
  favoruiteProducts: Products[];

  constructor() {}

  addFavouriteProduct(data: Products): void {
    let a: Products[];
    a = JSON.parse(localStorage.getItem('favourite_products')) || [];
    a.push(data);
    setTimeout(() => {
      localStorage.setItem('favourite_products', JSON.stringify(a));
      this.calculateLocalFavProdCounts();
    }, 500);
  }

  getLocalFavouriteProducts(): Products[] {
    const product: Products[] = JSON.parse(localStorage.getItem('favourite_products')) || [];
    return product;
  }

  removeLocalFavourite(products: Products) {
    const product: Products[] = JSON.parse(localStorage.getItem('favourite_products'));
    for (let i = 0; i < product.length; i++) {
      if (product[i].key === products.key) {
        product.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('favourite_products', JSON.stringify(product));
    this.calculateLocalFavProdCounts();
  }

  calculateLocalFavProdCounts() {
    this.navbarFavProdCount = this.getLocalFavouriteProducts().length;
  }
}
