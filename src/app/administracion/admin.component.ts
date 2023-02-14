import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/services/users.service";
import {map} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  getUsuarios() {
    this.usersService.getAll().pipe(
      map( (user: any) => {
        return user.payload.doc;
        })
    )
      .subscribe(
        (user:any) => {
          this.users = [ user.id, ...user.data]
        }
      );

  }

}
