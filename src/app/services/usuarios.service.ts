import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';

import { Usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioFireService {

  rutaDeLaColeccion = '/usuarios';
  referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;
  referenciaBd: AngularFirestore;


  constructor(private bd: AngularFirestore) {
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }


  Crear(usuario: Usuario): any {
    return this.referenciaAlaColeccion.add({ ...usuario });

  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }


  public BuscarUsuario(user: Usuario) {
    return this.referenciaBd.collection(this.rutaDeLaColeccion, ref => ref.where("correo", "==", user.correo).where("clave", "==", user.clave));

   

  }






}