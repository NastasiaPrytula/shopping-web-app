import { Injectable } from '@angular/core';

import { Products } from '../admin-products/Products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  navbarCartCount = 0;
  cartProducts: Products[];

  constructor() {
    this.calculateLocalCartProdCounts();
  }

addToCart(data: Products): void {
    let a: Products[];
    a = JSON.parse(localStorage.getItem('cart_products')) || [];
    a.push(data);
    setTimeout(() => {
      localStorage.setItem('cart_products', JSON.stringify(a));
      this.calculateLocalCartProdCounts();
    }, 500);
  }

  removeLocalCartProduct(products: Products) {
    const product: Products[] = JSON.parse(localStorage.getItem('cart_products'));
    for (let i = 0; i < product.length; i++) {
      if (product[i].key === products.key) {
        product.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart_products', JSON.stringify(product));
    this.calculateLocalCartProdCounts();
  }

  getLocalCartProducts(): Products[] {
    const product: Products[] = JSON.parse(localStorage.getItem('cart_products')) || [];
    return product;
  }

  calculateLocalCartProdCounts() {
    this.navbarCartCount = this.getLocalCartProducts().length;
  }

}
