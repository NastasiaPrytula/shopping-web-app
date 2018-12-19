import { NgModule } from '@angular/core';
import {  
  Routes, 
  RouterModule 
} from '@angular/router';

import {SignUpComponent} from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent},
  { path: 'admin-products', component: AdminProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products' , component: ProductsComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
