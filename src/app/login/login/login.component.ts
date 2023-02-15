import {Component, OnInit, } from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../../shared/material/dialog-box/dialog-box.component";

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
    public dialog: MatDialog
  ) {
    this.formLogin = this.fb.group({
      cajamail: ['', Validators.required],
      cajapassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  login() {

    this.authService.SignIn(this.formLogin.get('cajamail')?.value,
      this.formLogin.get('cajapassword')?.value).then(
      (resp: any) => {
        if(resp) {
          this.router.navigate(['/administracion']);
        } else {
          // limpiar formulario
          this.formLogin.reset();
          this.dialog.open(DialogBoxComponent);
        }

        //console.log(resp);
      }
    );

  }


  logOut() {
    this.authService.SignOut();
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
