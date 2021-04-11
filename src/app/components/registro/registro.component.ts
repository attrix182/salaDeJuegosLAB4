import { Component, OnInit } from '@angular/core';
import { UsuarioFireService } from './../../services/usuarios.service';
import { Usuario } from '../../clases/usuario'
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  unUsuario: Usuario;

  constructor(private MiServicio: UsuarioFireService, private router: Router) { this.unUsuario = new Usuario(); }



  correo = new FormControl('', [Validators.required, Validators.email]);
  clave = new FormControl('', [Validators.required, Validators.required]);

  getErrorMessageCorreo() {
    if (this.correo.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.correo.hasError('email') ? 'No es un correo valido' : '';

  }

  getErrorMessageClave() {
    if (this.clave.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.clave.hasError('') ? 'Debes ingresar un valor' : '';

  }

  Registro() {

    if (!(this.clave.value == '' && this.correo.value == '')) //revisar
    {


      this.MiServicio.BuscarUsuario(this.unUsuario).valueChanges().subscribe(result => {
        if (result.length == 0) {

          this.MiServicio.Crear(this.unUsuario).then(() => {

            localStorage.setItem('token', this.unUsuario.correo);
            console.log('se envio el Usuario');

            this.router.navigateByUrl("home");

        })
        }
        else{ 
          
          console.log('existe')
        
        
        
        }
    })
  }
}
      







  ngOnInit(): void {
      }

}
