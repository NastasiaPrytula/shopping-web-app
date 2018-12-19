import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'

import { Products } from './Products.model';

@Injectable({
  providedIn: 'root'
})

export class AdminProductsService {
  
  productsList: AngularFireList<any>;
  selectedProducts: Products = new Products();
  constructor( private db: AngularFireDatabase) {
  }
 
  getData(){
    this.productsList = this.db.list('products');
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

  updateProducts(products : Products){
    this.productsList.update(products.key,
      {
        name: products.name,
        price: products.price,
        description: products.description,
        imagePath: products.imagePath
      });
     }
 
  deleteProducts(key : string){
    this.productsList.remove(key);
  }
}
