import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of heroes';

  ngOnInit() {
    /*
    Inicializacion de firebase para poder interactuar con la app(registro, login)
     */
      firebase.initializeApp({
        apiKey: 'AIzaSyBoFLeJ8Q8fmMkIsRRy6MGunCELqITrMbw',
        authDomain: 'heroes-121f8.firebaseapp.com'
      });
  }
}
