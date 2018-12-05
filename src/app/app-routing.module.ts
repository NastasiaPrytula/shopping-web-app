import { NgModule } from '@angular/core';
import {  
  Routes, 
  RouterModule 
} from '@angular/router';

import {SignUpComponent} from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'admin-products', component: AdminProductsComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
