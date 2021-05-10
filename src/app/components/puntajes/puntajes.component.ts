import { Scores } from 'src/app/clases/scores';
import { GameScoresService } from 'src/app/services/game-scores.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';



@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css'],
 
})

export class PuntajesComponent implements OnInit {

  scoresTateti$: Observable<Scores[]>;

  dataSource = new UserDataSource(this.tatetiSVC);

  displayedColumns = ['nombre', 'puntaje', 'fecha', 'juego'];

  retorno:boolean;

 

  constructor(private tatetiSVC: GameScoresService) {

    this.scoresTateti$ = tatetiSVC.GetAll().valueChanges()
    console.log(this.scoresTateti$)


 

  }

  isLoading = true;
  data = null

ngOnInit() {
  
    this.tatetiSVC.getO().
       subscribe(
        data => {
          this.isLoading = false;
          this.data = data
        }, 
        error => this.isLoading = false
    );
}




  Deslogearse() {
    localStorage.removeItem('token')
    location.assign("/quiensoy");
  }


}

export class UserDataSource extends DataSource<any>
{
  constructor(private gameSv: GameScoresService) {
    super();
  }
  connect(): Observable<Scores[]> {
    return this.gameSv.getO();
 
  }
  disconnect() { }
}
