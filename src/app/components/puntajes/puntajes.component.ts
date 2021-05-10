import { Scores } from 'src/app/clases/scores';
import { GameTatetiService } from 'src/app/services/game-tateti.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css']
})
export class PuntajesComponent implements OnInit {

  scoresTateti$:Observable<Scores[]>;



  constructor(private tatetiSVC: GameTatetiService) { 

    this.scoresTateti$ = tatetiSVC.GetAll().valueChanges()
    console.log(this.scoresTateti$)

  }

  ngOnInit(): void {
  }


  
  Deslogearse()
  {
    localStorage.removeItem('token')
    location.assign("/quiensoy");
  }

 

}

