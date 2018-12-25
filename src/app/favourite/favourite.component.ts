import { Component, OnInit } from '@angular/core';
import { Products } from '../admin-products/Products.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatDialog } from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products/products.service';
import { ToastrService } from '../toastr.service';
import { FavouriteService } from './favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit {
  productsList: Products[];
  favoruiteProducts: Products[];
  showDataNotFound = true;
  private total: number = 0;
  descending: boolean = false;
  order: number;
  column: any = 'price';
  name:string;
  result: number[];
  term;

  constructor( public dialog: MatDialog,
               public ProductsService: ProductsService,
               public toastrService: ToastrService,
               public favouriteService: FavouriteService) {}

	ngOnInit() {
		this.getFavouriteProduct();
  }

	removeFavourite(products: Products) {
		this.favouriteService.removeLocalFavourite(products);
    this.toastrService.error('Delete from favourite!');
		this.getFavouriteProduct();
	}

	getFavouriteProduct() {
		this.favoruiteProducts = this.favouriteService.getLocalFavouriteProducts();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
