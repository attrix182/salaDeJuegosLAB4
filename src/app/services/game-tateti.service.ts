import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Scores } from '../clases/scores';

@Injectable({
  providedIn: 'root'
})
export class GameTatetiService {


  rutaDeLaColeccion = "/scoresTateti";
  referenciaAlaColeccion: AngularFirestoreCollection<Scores>;
  referenciaOrdenada: AngularFirestoreCollection<Scores>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaOrdenada = bd.collection<Scores>('scoresTateti', ref => ref.orderBy('score', 'desc'));
  }

  AgregarScore(score: Scores): any {
    return this.referenciaAlaColeccion.add({ ...score });
  }

  GetAll(): AngularFirestoreCollection<Scores> {
    return this.referenciaOrdenada;
  }
}