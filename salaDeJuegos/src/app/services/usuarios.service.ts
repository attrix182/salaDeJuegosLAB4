import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';

import { Usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioFireService {

  rutaDeLaColeccion = '/usuarios';
  referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }


  Crear(usuario:Usuario):any
  {
    return this.referenciaAlaColeccion.add({...usuario});

  }

  public TraerTodos()
  {
     return this.referenciaAlaColeccion;
  }

  public Existe()
  {
     return this.referenciaAlaColeccion;
  }






}