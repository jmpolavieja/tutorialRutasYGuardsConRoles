import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  userName: string = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.formLogin = this.fb.group({
      cajamail: ['', Validators.required],
      cajapassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  login() {
    const email = this.formLogin.value
    this.authService.SignIn(this.formLogin.get('cajamail')?.value,
      this.formLogin.get('cajapassword')?.value);
  }


  logOut() {
    this.authService.SignOut();
  }
}
