import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class GuardSignInGuard implements CanActivate {

  //email: string = 'jgf@altair.edu.es';

  constructor(private userService: UsersService,
              private auth: AuthService,
              private router: Router) {
    console.log('Constructor del guard');
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /*if(this.auth.isAuthenticated()) {
      return true;
    }*/
    this.auth.isAuthenticated().subscribe(
      res => {
        //console.log(res);
        if (res && res.uid) {
          this.userService.getUser(res.email).subscribe(
            (res: any[])  => {
              // console.log(res.length);
              res.forEach( dataUser => {
                this.eresAdministrador(dataUser.rol);
              });
            }
          )
          return true;
        } else {
          console.log('Usuario no logueado!');
          this.router.navigate(['/login']);
          return false;
        }
      }
    );
    return true;
  }

  eresAdministrador(rol: string): boolean {
    if(rol === "administrador") {
      return true;
    }else{
      this.router.navigate(['/clientes']);
      return false;
    }
  }
}
