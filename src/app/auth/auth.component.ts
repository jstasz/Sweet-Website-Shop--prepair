import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Subject } from 'rxjs';
import { User } from './user.model';

const auth = getAuth();

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm!: FormGroup;
  loggedUser: User | '' = '';
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(7)]),
    });
  }

  onSubmit() {
    const auth = getAuth();
    let email = this.authForm.value.email;
    let password = this.authForm.value.password;

    if (!this.isLoginMode) {
      this.signUpNewUser(email, password);
    } else {
      this.loginUser(email, password);
    }
    this.authForm.reset();
  }

  signUpNewUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.loggedUser = new User(email);
    })
    .catch((error) => {
      let errorMessage = 'something go wrong';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'The email address is already in use by another account';
          break;
      }
      this.errorMessage = errorMessage;
    });
  }

  loginUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.loggedUser = new User(email);
    })
    .catch((error) => { 
      let errorMessage = 'an unknown error';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'There is no user record corresponding to this email. The user may have been deleted';
          break;
        case 'auth/wrong-password':
          errorMessage = 'The password is invalid or the user does not have a password';
          break;
      }
      this.errorMessage = errorMessage;
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
