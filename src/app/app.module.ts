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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
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
import { ToastrService } from './toastr.service';
import { FavouriteService } from './favourite/favourite.service';
import { CartService } from './cart/cart.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './sign-up/auth-guard.service';

import { environment } from '../environments/environment';

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
    SortPipe,
    PageNotFoundComponent
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
    MatIconModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    AddNewProductsComponent
  ],
  providers: [
    AuthService,
    AdminProductsService,
    ToastrService,
    FavouriteService,
    CartService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
