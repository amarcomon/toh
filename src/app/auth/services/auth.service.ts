import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  public token: string = null;

  constructor(private router: Router) { }

  //
  loginUser( email: string, pass: string) {

  }

  /* Metodo utilizado para crear usuarios en la base de datos de firebase
     Datos de entrada: email y password

  */
  registerUser(email: string, pass: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pass).
    catch(error => console.log('User Register error: ', error));
  }


  isAuthenticated() {
    return this.token != null;
}

logout() {
  firebase.auth().signOut();
  this.token = null;
}
}
