import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from "./shared/material/material.module";
import { MenuComponent } from './shared/menu/menu.component';
import {LoginComponent} from "./login/login/login.component";
import {GuardSignInGuard} from "./shared/guards/guard-sign-in.guard";
import {AngularFireAuthModule, PERSISTENCE} from "@angular/fire/compat/auth";
import {HttpClientModule} from "@angular/common/http";
import {RegistroComponent} from "./login/registro/registro.component";
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    GuardSignInGuard,
    { provide: PERSISTENCE, useValue: 'session'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
