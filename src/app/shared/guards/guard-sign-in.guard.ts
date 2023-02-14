import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from "../services/users.service";
import firebase from "firebase/compat";
import User = firebase.User;
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class GuardSignInGuard implements CanActivate {

  //email: string = 'jgf@altair.edu.es';

  constructor(private userService: UsersService,
              private auth: AuthService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /*if(this.auth.isAuthenticated()) {
      return true;
    }*/
    this.auth.isAuthenticated().subscribe(
      res => {
        if(res && res.uid) {
          console.log(res.email);
          console.log('Usuario logueado!!');
          //this.router.navigate(['/administracion']);
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

}
