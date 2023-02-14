import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login/login.component";
import {GuardSignInGuard} from "./shared/guards/guard-sign-in.guard";
import {RegistroComponent} from "./login/registro/registro.component";
import {HomeComponent} from "./shared/home/home.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule),
    canActivate: [GuardSignInGuard]
  },
  {
    path: `login`, component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
