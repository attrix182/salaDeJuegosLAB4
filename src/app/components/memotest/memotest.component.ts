import { PaisesService } from './../../services/paises.service';
import { Pais } from 'src/app/clases/pais';
import { Component, OnInit } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Scores } from 'src/app/clases/scores';
import { GameScoresService } from 'src/app/services/game-scores.service';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  grilla = [[]];
  public paises: Pais[] = [];
  pares = [];
  public juegoNombre: string;
  public resultado = '';
  public puntaje = 0;
  public fecha = '';
  public jugador = '';
  public mensaje = '';

  elementos = [
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false },
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false }
  ];

 scoreNuevo: Scores;
  
  constructor(private paisesService: PaisesService, private gamesrc : GameScoresService) {
    this.scoreNuevo = new Scores();
    
    this.scoreNuevo.name = localStorage.getItem('token');

    this.scoreNuevo.fecha = new Date().toLocaleDateString();
    
    this.scoreNuevo.juego ="Memotest";
  }


  guardarScore() {
    if(this.puntaje != 0){
    this.scoreNuevo.score = this.puntaje
    this.gamesrc.AgregarScore(this.scoreNuevo);

    this.alert('info', 'Puntaje guardado');
  }
  else{
    this.alert('warning', 'Debes jugar primero');
  }
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


  iniciarGrilla(): void {
    // desordeno
    this.elementos = this.elementos

      .sort(() => Math.random() - 0.5);
    // inserto elementos
    let count = 0;
    for (let i = 0; i < 4; i++) {
      this.grilla[i] = [];
      for (let j = 0; j < 4; j++) {
        this.grilla[i][j] = this.elementos[count];
        count++;
      }
    }
  }

  elegirCelda(celda): any {
    if (celda.seleccionada) {
      return;
    }

    celda.seleccionada = true;
    if (this.pares.length < 2) {
      this.pares.push(celda);
    }

    if (this.pares.length === 2) {
      // evaluo si se queda destapada
      let pares = this.pares;
      this.pares = [];
      if (pares[0].iconSrc !== pares[1].iconSrc) {
        setTimeout(() => {
          pares[0].seleccionada = false;
          pares[1].seleccionada = false;
          pares = [];
        }, 1000);

      }
      // evaluo si ya gano
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.grilla.length; index++) {

        if (this.grilla[index].some((x) => {
          return !x.seleccionada;
        })) {
          return;
        }
      }
      this.resultado = 'Ganó';
      this.puntaje = 10;
      this.mensaje = 'GANASTE!!!';
    }
  }

  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
      this.paises = response;
    });
  }

  Deslogearse() {

    localStorage.removeItem('token')
  }




  ngOnInit(): void {
    this.getPaises();
    this.iniciarGrilla();
  }
}