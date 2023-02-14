import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import User = firebase.User;
import auth = firebase.auth;
import {UsersService} from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    private usersService: UsersService,
    private angularFireAuth: AngularFireAuth
  ) {
    this.userData = angularFireAuth.authState;
  }

  // Sign up
  SignUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Has sido registrado con éxito', res);
      })
      .catch(error => {
        console.log('Algo ha fallado: ', error.message);
      });
  }

  // Sign In
  SignIn(email: string, password: string) {
    /*
    En el ejemplo que sigo de Secure Coding
    (https://www.securecoding.com/blog/angular-firebase-authentication-integration/)
    utiliza this.angularFireAuth.auth.SignIn... el auth sobra y lo quito
     */

    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('¡Has entrado!');
      })
      .catch(error => {
        console.log('Ha habido un error: ', error.message);
      })
  }

  /* is Authenticated */
  isAuthenticated() {
    return this.angularFireAuth.authState;/*.subscribe(
      res => {
        if(res && res.uid) {
          console.log('Usuario está logeado');
        } else {
          console.log('Usuario no logeado');

        }
      }
    );*/
  }
  /*  Sign Out  */
  SignOut() {
    this.angularFireAuth.signOut();
  }
}

