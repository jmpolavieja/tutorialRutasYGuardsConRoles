import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdministracionRoutingModule} from "./administracion-routing.module";
import { UserCardComponent } from './user-card/user-card.component';
import {MaterialModule} from "../shared/material/material.module";



@NgModule({
  declarations: [
    AdminComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MaterialModule
  ]
})
export class AdministracionModule { }
