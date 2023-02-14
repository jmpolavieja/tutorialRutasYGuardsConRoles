import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {User} from "../../core/interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // rol!: Observable<unknown[]>;
  private coleccion: AngularFirestoreCollection = this.afs.collection('users');
  // private userDoc: AngularFirestoreDocument;

  constructor(
    private afs: AngularFirestore
  ) {
  }

  getAll() {
    return this.coleccion.snapshotChanges();
  }

  getUser(mail: string) {
    return this.afs.collection('users', ref => ref.where('email', "==", mail)).valueChanges();
  }

  setRol(user: User) {
    // Se supone que recibo el usuario con el rol establecido, lo guardo
    return this.coleccion.doc(user.uid).update(user);
  }
}
