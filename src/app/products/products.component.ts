import { Component, OnInit , Input} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { SortPipe } from '../sort.pipe';

import { AdminProductsService } from '../admin-products/admin-products.service';
import { Products } from '../admin-products/Products.model';
import { ProductsService } from '../products/products.service';
import { ToastrService } from '../toastr.service';
import { FavouriteService } from '../favourite/favourite.service';
import { CartService } from '../cart/cart.service';

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
  term;

  constructor(
               public adminProductsService: AdminProductsService,
               public ProductsService: ProductsService,
               private orderPipe: OrderPipe,
               private toastrService: ToastrService,
               private favouriteService: FavouriteService,
               private cartService: CartService) {}

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

  add(products: Products) {
    this.favouriteService.addFavouriteProduct(products);
    this.toastrService.success('Add to to favourite!');
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  addToCart(products: Products) {
    this.cartService.addToCart(products);
    this.toastrService.success('Add to to cart!');
  }

}
