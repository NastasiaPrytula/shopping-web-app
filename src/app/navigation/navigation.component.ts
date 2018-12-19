import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sign-up/auth.service';
import {  ProductsService } from '../products/products.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService,
          private ProductsService: ProductsService
    ) {}

  ngOnInit() {}
}
