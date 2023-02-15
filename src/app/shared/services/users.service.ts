import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, } from "@angular/fire/compat/firestore";
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

  getUser(mail: string | null) {

      return this.afs.collection('users', ref => ref.where('email', "==", mail).limit(1)).valueChanges();


  }

  setRol(user: User) {
    // Se supone que recibo el usuario con el rol establecido, lo guardo
    return this.coleccion.doc(user.uid).update(user);
  }
}
