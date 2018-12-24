import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'

import { Products } from '../admin-products/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList: AngularFireList<any>;
  selectedProducts: Products = new Products();

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

}
