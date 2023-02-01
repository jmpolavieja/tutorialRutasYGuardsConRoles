import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  coleccionRef: AngularFirestoreCollection = this.afs.collection('incidencias');

  constructor(
    private readonly afs: AngularFirestore
  ) { }

  getIncidencias() {
    return this.coleccionRef.snapshotChanges();
  }

  getDetailIncidencia(id: string) {
    return this.coleccionRef.doc(id).valueChanges();
  }

  updateIncidencia(id: string, datosIncidencia: any) {
    return this.coleccionRef.doc(id).update(datosIncidencia);
  }

  newIncidencia(datosIncidencia: any) {
    return this.coleccionRef.add(datosIncidencia);
  }

  queryIncidencia(param: string, value: string) {
    return this.afs.collection('incidencias', ref => ref.where(param, '==', value));
  }

  deleteIncidencia(id:string) {
    return this.coleccionRef.doc(id).delete();
  }

}
