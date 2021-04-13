import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from '../../clases/mensaje';
import { MensajeService } from './../../services/mensaje.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: Mensaje;

  item$: Observable<any[]>;

  token: any;

  d = new Date();

  //hora: string;


  constructor(private router: Router, private MiServicio: MensajeService, firestore: MensajeService) {

    this.mensaje = new Mensaje();
    this.item$ = firestore.ObtenerTodos().valueChanges();
    this.mensaje.usuario = localStorage.getItem('token') || 'Anonimo';
    this.mensaje.hora = this.d.getHours() + ':' + this.d.getMinutes();;

  }



  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    if (this.token == null) {
      this.router.navigateByUrl("login");

    }

  }
  





  Enviar() {


    this.MiServicio.Crear(this.mensaje).then(() => {

      this.mensaje.mensaje = '';


      console.log('se envio el msj FIRE', this.token);

    });


  }

  Deslogearse() {

    localStorage.removeItem('token');
    this.router.navigateByUrl("login");

  }



}