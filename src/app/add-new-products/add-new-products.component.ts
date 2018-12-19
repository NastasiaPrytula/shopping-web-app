import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms'; 
import { AngularFireDatabase} from 'angularfire2/database';

import { AdminProductsService } from '../admin-products/admin-products.service';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.css']
})
export class AddNewProductsComponent implements OnInit {

  constructor ( private adminProductsService: AdminProductsService, 
                private db: AngularFireDatabase,
                public dialogRef: MatDialogRef <AddNewProductsComponent>) {}
  
  ngOnInit() {}

  onSubmit(productsForm: NgForm) {
    if (productsForm.value.key == null)
    this.adminProductsService.insertProducts(productsForm.value);
    else
    this.adminProductsService.updateProducts(productsForm.value);
    this.resetForm(productsForm);
    
  }

  resetForm(productsForm?: NgForm) {
    if (productsForm != null)
      productsForm.reset();
    this.adminProductsService.selectedProducts = {
      key: null,
      name: '',
      price: 0,
      description: '',
      imagePath:''
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  } 
}
