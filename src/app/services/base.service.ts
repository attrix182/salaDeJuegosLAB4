import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public urlBase: string;

  constructor(public http: HttpClient) {
    this.urlBase = 'https://restcountries.eu/rest/v2/region';
  }


  public httpGetP( url: string) {
    return this.http
    .get( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpDeleteP( url: string) {
    return this.http
    .delete( this.urlBase + url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, request: object) {
    return this.http.post( this.urlBase + url, request).toPromise();
  }

  public httpGetO<T>( url: string) {
    return this.http.get<T>( this.urlBase + url );
  }

  private extractData( res: Response ) {
    return res.json() || {};
  }

  private handleError( error: Response | any ) {
    return error;
  }
}
