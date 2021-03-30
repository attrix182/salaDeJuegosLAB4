import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

public usuarioVigente:string;

  constructor() {

    this.usuarioVigente = 'alguien';
   }
}