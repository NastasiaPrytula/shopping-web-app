import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'

import { Products } from '../admin-products/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList: AngularFireList<any>;
  selectedProducts: Products = new Products();
  navbarCartCount = 0;
	navbarFavProdCount = 0;
	favoruiteProducts: Products[];
	
  constructor( private db: AngularFireDatabase) {}
  
  getData(){
    this.productsList = this.db.list('favourites');
    return this.productsList;
  }

  insertProducts(products: Products)
  {
    this.productsList.push({
      name: products.name,
      price: products.price,
      description: products.description,
      imagePath: products.imagePath
    })
	}
	
  deleteProducts(key : string){
    this.productsList.remove(key);
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

	addFavouriteProduct(data: Products): void {
		let a: Products[];
		a = JSON.parse(localStorage.getItem('favourite_products')) || [];
		a.push(data);
		setTimeout(() => {
			localStorage.setItem('favourite_products', JSON.stringify(a));
			this.calculateLocalFavProdCounts();
		}, 1500);
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
