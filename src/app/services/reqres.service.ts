import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import { catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  configUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
