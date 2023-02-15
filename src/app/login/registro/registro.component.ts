import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  authForm: FormGroup;
  passwordOk = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordR: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registro() {
    let email = this.authForm.get('email')?.value;
    let password = this.authForm.get('password')?.value;
    this.authService.SignUp(email,password);
  }

  compruebaPassword() {
    alert('hola soy comprueba Password');
    /*  La idea es leer ambas passwords y ver si son iguales, si no resetearlas y volver a pedirlas */
    const password = this.authForm.get('password')?.value;
    const passwordR = this.authForm.get('passwordR')?.value;
    console.log(passwordR, " - ", password);
    if (password === passwordR) {
      console.log('Passwords iguales');
      this.passwordOk = true;
    } else {
      console.log('Password no coinciden');
      this.passwordOk = false;
    }
  }
}
