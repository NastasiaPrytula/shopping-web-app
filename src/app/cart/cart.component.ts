import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { SortPipe } from '../sort.pipe';

import { AdminProductsService } from '../admin-products/admin-products.service';
import { Products } from '../admin-products/Products.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartProducts: Products[];
  private total: number = 0;
  descending: boolean = false;
  order: number;
  column: any = 'price';
  name:string;
  result: number[];

  constructor( private activatedRoute: ActivatedRoute,
    private adminProductsService: AdminProductsService,
    private ProductsService:ProductsService
    ) {}

  ngOnInit() {
    this.getCartProduct();
  }

  removeCartProduct(products: Products) {
    this.ProductsService.removeLocalCartProduct(products);
    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.ProductsService.getLocalCartProducts();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  Search(){
    if (this.name != ""){
      this.cartProducts = this.cartProducts.filter(res=>
       {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }else if  (this.name ==""){
      this.ngOnInit();
   } 
  }
}
  

