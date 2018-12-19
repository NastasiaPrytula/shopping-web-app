import { Component, OnInit , Input} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { SortPipe } from '../sort.pipe';

import { AdminProductsService } from '../admin-products/admin-products.service';
import { Products } from '../admin-products/Products.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  descending: boolean = false;
  order: number;
  column: any = 'price';
  productsList: Products[];
  name:string;
  result: number[];

  constructor( 
               private adminProductsService: AdminProductsService,
               private ProductsService: ProductsService,
               private orderPipe: OrderPipe ) {}
 
  ngOnInit() {
    var Data = this.adminProductsService.getData();
    Data.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        var SaveData = element.payload.toJSON();
        SaveData["key"] = element.key;
        this.productsList.push(SaveData as Products);
      });
    });
  }

  Search(){
    if (this.name != ""){
    this.productsList = this.productsList.filter(res=>
      {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }else if  (this.name ==""){
      this.ngOnInit();
    } 
  }

  add(products: Products) {
    this.ProductsService.addFavouriteProduct(products);
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  addToCart(products: Products) {
    this.ProductsService.addToCart(products);
  }
}
