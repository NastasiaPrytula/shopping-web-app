import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { SortPipe } from '../sort.pipe';

import { AdminProductsService } from '../admin-products/admin-products.service';
import { Products } from '../admin-products/Products.model';
import { ProductsService } from '../products/products.service';
import { ToastrService } from '../toastr.service';
import { CartService } from '../cart/cart.service';

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
               public adminProductsService: AdminProductsService,
               public ProductsService: ProductsService,
               private toastrService: ToastrService,
               public cartService: CartService) {}

  ngOnInit() {
    this.getCartProduct();
  }

  removeCartProduct(products: Products) {
    this.cartService.removeLocalCartProduct(products);
    this.toastrService.error('Delete from cart!');
    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.cartService.getLocalCartProducts();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}


