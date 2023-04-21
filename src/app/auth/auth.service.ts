import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';

const auth = getAuth();

@Injectable()
export class AuthService {
    errorMessage = '';
    errorMessageChanges = new Subject<string>();
    loggedUser = '';
    loggedUserChanges = new Subject<'' | User>();

    constructor() {} 

    loginUser(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.loggedUserChanges.next(new User(email));
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
          this.errorMessageChanges.next(errorMessage)
        });
    }

    signUpNewUser(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.loggedUserChanges.next(new User(email));
        })
        .catch((error) => {
          let errorMessage = 'something go wrong';
          switch (error.code) {
            case 'auth/email-already-in-use':
              errorMessage = 'The email address is already in use by another account';
              break;
          }
          this.errorMessageChanges.next(errorMessage);
        });
    }
}