import { Component } from '@angular/core';

import { AuthService } from '../sign-up/auth.service';
import {  ProductsService } from '../products/products.service';
import { FavouriteService } from '../favourite/favourite.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  email:string;
  password: string;

  constructor(public authService: AuthService,
          public ProductsService: ProductsService,
          public favouriteService: FavouriteService,
          public cartService: CartService) {}

  signupUser() {
    this.authService.signupUser(this.email, this.password);
    this.email = this.password = '';
  }

  signinUser() {
    this.authService.signinUser(this.email, this.password);
    this.email = this.password = '';
  }

  onLogout() {
    this.authService.logout();
  }

}
