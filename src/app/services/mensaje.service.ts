import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Mensaje } from '../clases/mensaje';


@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  
  rutaDeLaColeccion = '/mensajes';
  referenciaAlaColeccion: AngularFirestoreCollection<Mensaje>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }




  Crear(mensaje:Mensaje):any
  {
    return this.referenciaAlaColeccion.add({...mensaje});
  }

  ObtenerTodos():AngularFirestoreCollection<Mensaje>
  {
    return this.referenciaAlaColeccion;
  }
}


