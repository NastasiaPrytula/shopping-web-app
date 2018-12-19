import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { OrderModule } from 'ngx-order-pipe';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';


import {
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from './sign-up/auth.service';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductsService } from './admin-products/admin-products.service';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { ProductsComponent } from './products/products.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CartComponent } from './cart/cart.component';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavigationComponent,
    AdminProductsComponent,
    AddNewProductsComponent,
    ProductsComponent,
    FavouriteComponent,
    CartComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    FormsModule,
    MatDialogModule,
    OrderModule,
    MatIconModule
  ],
  entryComponents: [
    AddNewProductsComponent
  ],
  providers: [AuthService, AdminProductsService],
  bootstrap: [AppComponent]
})

export class AppModule {}
