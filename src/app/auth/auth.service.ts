import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  emailSignUp(email: string, password: string) {
    console.log('### Inside the AuthService::');
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      // .then(data => this.updateUserData(data.user))
      .then(() => {
        console.log('Welcome, your account has been created!');
        alert('Your account has been Created successfully... Please login and Enjoyy!!!. ');
        // this.router.navigate(['signin']);
      })
      // .then(() => {
      //   this.afAuth.auth.currentUser
      //     .sendEmailVerification()
      //     .then(() => console.log('We sent you an email verification'))
      //     .catch(error => console.log(error.message));
      // })
      .catch(error => console.log(error.message));
  }

  emailSignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('You have successfully signed in');
        this.router.navigate(['productDashboard']);
      } )
      .catch(error => {
        alert('Invalid Email or Password !! Please try again.. ');
        console.log(error.message);
      } )
  }

}
