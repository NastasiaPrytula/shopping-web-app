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
import { PageNotFoundComponent } from'./page-not-found/page-not-found.component';
import { AuthGuard } from './sign-up/auth-guard.service';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent},
  { path: 'admin-products', component: AdminProductsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products' , component: ProductsComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
