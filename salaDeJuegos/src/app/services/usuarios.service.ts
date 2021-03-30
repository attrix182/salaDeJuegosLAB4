import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';

import { Usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class MensajeFireService {

  rutaDeLaColeccion = '/usuarios';
  referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }


  Crear(mensaje:Usuario):any
  {
    return this.referenciaAlaColeccion.add({...mensaje});
  }





}