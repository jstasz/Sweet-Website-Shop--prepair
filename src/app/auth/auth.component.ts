import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth } from 'firebase/auth'
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm!: FormGroup;

  loggedUser: User | '' = '';
  loggedUserSub!: Subscription; 

  errorMessage: string = '';
  errorMessageSub!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(7)]),
    });
    this.authService.loggedUserChanges.subscribe(user => this.loggedUser = user);
    this.authService.errorMessageChanges.subscribe(message => this.errorMessage = message);
  }

  onSubmit() {
    const auth = getAuth();
    let email = this.authForm.value.email;
    let password = this.authForm.value.password;

    if (!this.isLoginMode) {
      this.authService.signUpNewUser(email, password);
    } else {
      this.authService.loginUser(email, password);
    }
    this.authForm.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
