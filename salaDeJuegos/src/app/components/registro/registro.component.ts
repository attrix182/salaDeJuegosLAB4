import { Component, OnInit } from '@angular/core';
import { UsuarioFireService } from './../../services/usuarios.service';
import { Usuario } from '../../clases/usuario'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  unUsuario: Usuario;
  
  constructor(private MiServicio: UsuarioFireService) { this.unUsuario = new Usuario();}

  Enviar() {


    this.MiServicio.Crear(this.unUsuario).then(() => {

      console.log('se envio el Usuario');

    });

  }

  


  ngOnInit(): void {
  }

}
