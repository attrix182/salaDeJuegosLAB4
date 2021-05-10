import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Scores } from 'src/app/clases/scores';
import { GameScoresService } from 'src/app/services/game-scores.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})


export class TaTeTiComponent implements OnInit {


    nombreChat = "Chat Tateti";

    public token: any;
    resultado = "A jugar eres X";
  
    puntosUser = 0;
    puntoPC = 0;
  
  
    ///game
    board: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    table: HTMLElement[];
  
    symbol: number = -1;
    gameRunning: boolean = true;
  
    //score
  
    lista = this.gamesrc.GetAll().valueChanges();
    scoreNuevo : Scores;
  

    
   
  
    constructor(
      private gamesrc : GameScoresService, private router:Router) {
      this.scoreNuevo = new Scores();

      this.scoreNuevo.name = localStorage.getItem('token')
      this.scoreNuevo.fecha = new Date().toLocaleDateString();
      this.scoreNuevo.juego ="TaTeTi";
    }
  

    Deslogearse(){

        localStorage.removeItem('token');
        this.router.navigateByUrl("login");
    
      }

    ngOnInit(): void {
  
      this.token = localStorage.getItem('token');
  
  
      //asda
      let cell11: HTMLElement = <HTMLElement>document.getElementById("cell11");
      let cell12: HTMLElement = <HTMLElement>document.getElementById("cell12");
      let cell13: HTMLElement = <HTMLElement>document.getElementById("cell13");
      let cell21: HTMLElement = <HTMLElement>document.getElementById("cell21");
      let cell22: HTMLElement = <HTMLElement>document.getElementById("cell22");
      let cell23: HTMLElement = <HTMLElement>document.getElementById("cell23");
      let cell31: HTMLElement = <HTMLElement>document.getElementById("cell31");
      let cell32: HTMLElement = <HTMLElement>document.getElementById("cell32");
      let cell33: HTMLElement = <HTMLElement>document.getElementById("cell33");
      let reset: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");
  
      this.game([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);
  
      cell11.onclick = (e) => { this.ClickCell(1, 1); }
      cell12.onclick = (e) => { this.ClickCell(1, 2); }
      cell13.onclick = (e) => { this.ClickCell(1, 3); }
      cell21.onclick = (e) => { this.ClickCell(2, 1); }
      cell22.onclick = (e) => { this.ClickCell(2, 2); }
      cell23.onclick = (e) => { this.ClickCell(2, 3); }
      cell31.onclick = (e) => { this.ClickCell(3, 1); }
      cell32.onclick = (e) => { this.ClickCell(3, 2); }
      cell33.onclick = (e) => { this.ClickCell(3, 3); }
  
      reset.onclick = (e) => { this.Reset(); }
  
    }
  
  
    tableroGanadores(): void {
      this.lista = this.gamesrc.GetAll().valueChanges();
  
  
      console.log(this.lista);
    }
  
    guardarScore(){

    if(this.puntosUser != 0){
      this.gamesrc.AgregarScore(this.scoreNuevo);
  
      this.alert('info', 'Puntaje guardado');
    }
    else{
      this.alert('warning', 'Debes jugar primero');
    }
    }
  
  
    game(t: HTMLElement[]) {
      console.log(t);
      this.table = t;
    }
  
    Reset() {
      this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.gameRunning = true;
      for (let i = 0; i < 9; i++) {
        this.table[i].innerHTML = "";
  
      }
      this.resultado = "A jugar, eres X";
  
    }
  
    alert(icon: SweetAlertIcon, text: string) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: text
      })
    }
  
  
  
    ClickCell(x: number, y: number) {
      this.resultado = "Empezo el juego";
      let p: number = 3 * (x - 1) + (y - 1);
      if (!this.gameRunning) {
        console.log("Game over");
        this.resultado = "Has perdido";
      } else {
        if (this.board[p] == this.symbol) {
          console.log("Invalid!!");
          this.resultado = "No se pude seleccionar esa casilla!";
        }
        else {
          if (this.board[p] == -this.symbol) {
            console.log("Invalid!!");
            this.resultado = "No se pude seleccionar esa casilla!";
          }
          else {
            this.table[p].style.color = "#ff0000";
            this.table[p].innerHTML = "X";
            this.board[p] = 1;
            if (this.win(this.board) == 1) {
              this.gameRunning = false;
              console.log("You have won!"); 
              this.resultado = "Ha ganado!";
              this.alert('success','Ganaste! +15');
              this.puntosUser += 1;
              this.scoreNuevo.score += 15;
            } else {
              if (this.IsFull()) {
                this.gameRunning = false;
                //console.log("Draw match");
                this.resultado = "Empate";
                this.alert('info','Empate! +5');
                this.scoreNuevo.score  += 5;
              } else {
                let v = this.minimax(-1, true);
                this.board[v] = -1;
                this.table[v].style.color = "#0eff019e";
                this.table[v].innerHTML = "O";
                if (this.win(this.board) == -1) {
                  this.gameRunning = false;
                  //console.log("You have lost!"); 
                  this.resultado = "Has perdido!";
                  this.alert('error','Perdiste! -20');
                  this.puntoPC += 1;
                  this.scoreNuevo.score  -= 20;
                } else {
                  if (this.IsFull()) {
                    this.gameRunning = false;
                    //console.log("Draw match");
                    this.resultado = "Empate";
                  }
                }
              }
            }
          }
        }
      }
    }
  
  
    IsFull(): boolean {
      for (let i = 0; i < 9; i++) {
        if (this.board[i] == 0)
          return false;
      }
      return true;
    }
  
    win(board: number[]): number {
      var b = board[1];
      console.log("win " + board);
      console.log("b? " + b);
      if (board[0] == b && b == board[2] && b != 0) return b;
      b = board[4];
      if (board[3] == b && b == board[5] && b != 0) return b;
      b = board[7];
      if (board[6] == b && b == board[8] && b != 0) return b;
      b = board[3];
      if (board[0] == b && b == board[6] && b != 0) return b;
      b = board[4];
      if (board[1] == b && b == board[7] && b != 0) return b;
      b = board[5];
      if (board[2] == b && b == board[8] && b != 0) return b;
      b = board[4];
      if (board[0] == b && b == board[8] && b != 0) return b;
      if (board[2] == b && b == board[6] && b != 0) return b;
      return 0;
    }
  
    minimax(currentPlayer: number, root: boolean): number {
      let winner = this.win(this.board);
      if (winner != 0)
        if (currentPlayer == -1)
          return winner;
        else
          return -winner;
  
      let possibleMoves: number[] = [];
      for (let i = 0; i < 9; i++) {
        if (this.board[i] == 0)
          possibleMoves.push(i);
      }
      let n: number = possibleMoves.length;
  
      if (n == 0)
        return 0;
  
      let which: number = -1;
      let v: number = 100;
  
      for (let j = 0; j < n; j++) {
        let move = possibleMoves[j];
        //play
        this.board[move] = currentPlayer;
        var m = Math.floor(Math.random() * (8 - 0)) + 0;;
  
        this.board[move] = 0;
        if (m < v) {
          v = m;
          which = move;
        }
      }
      //MODO DIFICIL
      /*
      let possibleMoves: number[] = []; // Initializing new array 'possibleMoves' of 'number' type.
      for (let i = 0; i < 9; i++) {
        if (this.board[i] == 0)
          possibleMoves.push(i); 
      }
      let n: number = possibleMoves.length; // inintialize a variable 'n' and assign it with length of the 'possibleMoves' Array.
      if (n == 0)
        return 0;
      let which: number = -1; //Initialize 'which' to be a type of 'number', Here which stores the grid number of the AI move.
      let v: number = 100; // Initialize 'v' to be a type of 'number', Here v acts as INT_MAX.
      for (let j = 0; j < n; j++) { // compute for all possible moves.
        let move = possibleMoves[j];
        //play
        this.board[move] = currentPlayer;
        var m = -this.minimax(-currentPlayer, false);  
       
        this.board[move] = 0;
        if (m < v) {
          v = m;
          which = move;
        }
      }
      */
      if (root) {
        console.log("root", which);
        return (which)
      }
      else
        return (v)
    }
  
  
  }
 
  
