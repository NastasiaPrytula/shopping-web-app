import { Injectable, } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  token: string;
  user: Observable<firebase.User>

  constructor(private router: Router,
              private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signupUser(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then((value) => {
          console.log('Success!', value);
          this.router.navigate(['admin-products']);
        })
        .catch(error => console.log('error'));
    }

  signinUser(email:string,password:string) {
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['admin-products']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          )
        }
      )
    .catch(
      error => console.log(error)
    );
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.token = null;
    this.router.navigate(['/products'])
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
