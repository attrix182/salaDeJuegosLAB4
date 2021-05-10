import { Scores } from 'src/app/clases/scores';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameScoresService {


  rutaDeLaColeccion = "/scores";
  referenciaAlaColeccion: AngularFirestoreCollection<Scores>;
  referenciaOrdenada: AngularFirestoreCollection<Scores>;

  scores:Observable<Scores[]>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaOrdenada = bd.collection<Scores>('scores', ref => ref.orderBy('score', 'desc'));


    this.scores = this.referenciaAlaColeccion .valueChanges(this.rutaDeLaColeccion)

  }


  getO(){
    return this.scores;
  }

  AgregarScore(score: Scores): any {
    return this.referenciaAlaColeccion.add({ ...score });
  }

  GetAll(): AngularFirestoreCollection<Scores> {
    return this.referenciaOrdenada;
  }
}