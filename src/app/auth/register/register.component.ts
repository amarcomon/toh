import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /* Metodo onRegister() que llama al metodo del servicio registerUser()
     Datos de entrada: form. Formulario que proviene del html */
  onRegister(form: NgForm) {
  const email = form.value.email;
  const pass = form.value.pass;
  this.authService.registerUser(email, pass);
  }


}
