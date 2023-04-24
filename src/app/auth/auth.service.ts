import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Subject } from 'rxjs';
import { LocalStorageService } from '../shared/local-storage.service';
import { User } from './user.model';

const auth = getAuth();

@Injectable()
export class AuthService {
    errorMessage: string = '';
    errorMessageChanges = new Subject<string>();
    loggedUser: User | '' = '';
    loggedUserChanges = new Subject<'' | User>();

    constructor(private localStorageService: LocalStorageService) {} 

    loginUser(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            this.loggedUser = new User(email)
            this.loggedUserChanges.next(this.loggedUser);
            this.localStorageService.saveLocalData('user', JSON.stringify(this.loggedUser));
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
            this.loggedUser = new User(email)
            this.loggedUserChanges.next(this.loggedUser);
            this.localStorageService.saveLocalData('user', JSON.stringify(this.loggedUser)); 
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

    logOutUser() {
        this.loggedUser = '';
        this.loggedUserChanges.next(this.loggedUser);
        this.localStorageService.removeLocalData('user'); 
    }

    checkUser() {
        const userFromStorageString = this.localStorageService.getLocalData('user');
        userFromStorageString ? this.loggedUser = JSON.parse(userFromStorageString) : this.loggedUser = '';
    }
}