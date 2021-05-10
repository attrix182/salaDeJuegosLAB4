import { HttpClient } from '@angular/common/http';
import { Pais } from 'src/app/clases/pais';
import { Injectable } from '@angular/core';

import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public miHttp: BaseService) { }

  public ListarO(): Observable<Pais[]> {
    return this.miHttp.httpGetO<Pais[]>('/americas');
  }



}