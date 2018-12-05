import { Component, OnInit } from '@angular/core';

import { AdminProductsService } from '../admin-products/admin-products.service';
import {AdminProductsComponent } from '../admin-products/admin-products.component'
import { Products } from '../admin-products/Products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productsList: Products[];

  constructor( private adminProductsService: AdminProductsService) {}

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
}
