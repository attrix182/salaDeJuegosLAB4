import { Component, OnInit } from '@angular/core';
import { UsuarioFireService } from './../../services/usuarios.service';
import { Usuario } from '../../clases/usuario'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  unUsuario: Usuario;
  
  constructor(private MiServicio: UsuarioFireService, private router:Router) { this.unUsuario = new Usuario();}

  Enviar() {


    this.MiServicio.Crear(this.unUsuario).then(() => {

      console.log('se envio el Usuario');
      this.router.navigateByUrl("home");

    });

  }

  


  ngOnInit(): void {
  }

}
