import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UsersService,
              private routes: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.SignOut();
    this.routes.navigate(['/login']);
  }
}
