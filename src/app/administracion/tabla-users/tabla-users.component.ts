import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import firebase from "firebase/compat";
import User = firebase.User;
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tabla-users',
  templateUrl: './tabla-users.component.html',
  styleUrls: ['./tabla-users.component.css']
})
export class TablaUsersComponent implements OnInit {

  /* Propiedades */
  usersData: User[] = [];
  dataSource: any ;
  displayedColumns: string[] = ['email', 'rol'];

  /* Métodos */
  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    // Cargar todos los usuarios de la colección
    this.usersService.getAll().subscribe(
      (snapshot: any) => {
        this.usersData = [];
        snapshot.forEach(
          (userData: any) => {
            this.usersData.push(
              {...userData.payload.doc.data()}
            );
          });
        this.dataSource = new MatTableDataSource(this.usersData);
      })

  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
