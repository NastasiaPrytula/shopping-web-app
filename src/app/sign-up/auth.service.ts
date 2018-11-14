import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  signupUser(email: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
    }

  signinUser(email:string,password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => console.log(response)
    )
    .catch(
      error => console.log(error) 
    );
  }

  constructor() {}
}
