import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UsersService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.SignOut();
  }
}
