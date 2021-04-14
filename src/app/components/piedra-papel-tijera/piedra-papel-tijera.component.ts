import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent  {

  constructor(private router: Router){}

  Deslogearse(){

    localStorage.removeItem('token');
    this.router.navigateByUrl("login");

  }

  scores = [0 , 0];
  weapons = [
    'rock',
    'paper',
    'scissors'
  ]
  playerSelected = -1;
  loading= false;
  isResultShow = false;
  
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0 
  enemySelected  = -1;

 pick( weapon: number): void {
   // return immediately when still loading. You don't want
   // the user to spam the button.
   if(this.loading) return;
   this.loading = true;
   this.playerSelected = weapon;
  
  //create a delay to simulate enemy's turn.
   setTimeout( () => {
     this.loading = false;
     // generate a number from 0 -2 
     const randomNum =  Math.floor(Math.random() * 3 ) ;
     this.enemySelected = randomNum;
     this.checkResult();
     this.isResultShow = true;
   },  Math.floor(Math.random()  * 500 ) +200);
 }

 reset(): void {
  this.scores = [0,0];
 }
 checkResult(): void {
   const playerPick = this.playerSelected;
   const enemyPick = this.enemySelected;

   if( playerPick ==  enemyPick)
    {
    this.theResult = 2;
  }

    else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
      // YOU WIN
      this.theResult = 0;
      this.scores[0] = this.scores[0]+1;
    }
    else{
      // YOU LOSE
      this.theResult = 1;
        this.scores[1] = this.scores[1]+1;
    }
 }
}
