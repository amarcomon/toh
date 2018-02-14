import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  public token: string = null;

  constructor(private router: Router) { }

  //
  loginUser( email: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(email, pass).
    then( response => {
      console.log('Login success', response);
      firebase.auth().currentUser.getIdToken().
      then((token: string) => this.token = token);
      this.router.navigate(['/main']).
      catch(error => console.log('Error at login: ', error));

    });

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
