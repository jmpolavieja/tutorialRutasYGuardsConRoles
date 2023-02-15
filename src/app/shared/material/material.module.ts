import { NgModule } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const material = [
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: material,
  exports: material,
  declarations: [
    DialogBoxComponent
  ]
})
export class MaterialModule { }
