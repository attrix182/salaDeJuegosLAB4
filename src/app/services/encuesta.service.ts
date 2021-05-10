import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Encuesta } from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
 
    rutaDeLaColeccion = '/Encuestas';
    referenciaAlaColeccion: AngularFireList<Encuesta>;
  
    constructor(private bd: AngularFireDatabase) {
      this.referenciaAlaColeccion = bd.list(this.rutaDeLaColeccion);
  
    }
  
  
  
  
    Crear(encuesta:Encuesta):any
    {
      return this.referenciaAlaColeccion.push(encuesta);
    }
  

  }
  
  