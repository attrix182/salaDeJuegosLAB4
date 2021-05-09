import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Mensaje } from '../clases/mensaje';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'


@Injectable({
  providedIn: 'root'
})
export class ChatPPTService {

  
  rutaDeLaColeccion = '/chatPPT';
  referenciaAlaColeccion: AngularFireList<Mensaje>;

  constructor(private bd: AngularFireDatabase) {
    this.referenciaAlaColeccion = bd.list(this.rutaDeLaColeccion);

  }




  Crear(mensaje:Mensaje):any
  {
    return this.referenciaAlaColeccion.push(mensaje);
  }

  ObtenerTodos():AngularFireList<Mensaje>
  {
    return this.referenciaAlaColeccion;
  }
}


