import {Component, OnInit} from '@angular/core';
import {ReqresService} from "../services/reqres.service";
import {map} from "rxjs";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: any[] = [];

  constructor(private reqresService: ReqresService) { }

  ngOnInit(): void {
    this.reqresService.getUsers().pipe(
      map((val:any) => {
        return val.data;
      })
    )
      .subscribe(
        (val: any) => {
          this.clientes = [ ...val];
        }
      );

  }



}
