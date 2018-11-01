import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import {
  MatInputModule,
  MatButtonModule,
  MatMenuModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
