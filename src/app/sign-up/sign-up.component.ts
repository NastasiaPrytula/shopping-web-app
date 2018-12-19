import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';       
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  users:  Observable<any[]>;

  constructor(public authService: AuthService, 
    private formBuilder: FormBuilder, 
    private db: AngularFireDatabase,
    private router: Router) {
    this.users = db.list('users').valueChanges();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^.+@.+\..+$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'password': [null, [Validators.required, this.checkPassword]]
    });
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit() {
    const email = this.formGroup.value.email;
    const password = this.formGroup.value.password;
    this.authService.signupUser(email,password);  
    this.db.list('/users').push({Email: email,Password: password});
    alert('User Registeration');
    }


  onLogout() {
    this.authService.logout();
  }
}