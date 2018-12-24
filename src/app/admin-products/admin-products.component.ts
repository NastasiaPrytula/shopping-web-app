import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatDialog } from '@angular/material';

import { AddNewProductsComponent } from '../add-new-products/add-new-products.component';
import { AdminProductsService } from './admin-products.service';
import { Products } from './Products.model';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnInit {

  productsList: Products[];

  constructor( public dialog: MatDialog,
               public products: AdminProductsService,
               private db: AngularFireDatabase,
               public adminProductsService: AdminProductsService,
               private toastrService: ToastrService) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(AddNewProductsComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

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

  onEdit(products: Products) {
    this.openDialog()
    this.adminProductsService.selectedProducts = Object.assign({}, products);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminProductsService.deleteProducts(key);
      this.toastrService.error('Product has been removed!');
    }
  }
}
