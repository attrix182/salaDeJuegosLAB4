import { Component, OnInit } from '@angular/core';
import { UsuarioFireService } from './../../services/usuarios.service';
import { Usuario } from '../../clases/usuario'
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  unUsuario: Usuario;


  constructor(private MiServicio: UsuarioFireService, private router: Router, public dialog: MatDialog) { 
    this.unUsuario = new Usuario(); 
  

  }



  correo = new FormControl('', [Validators.required, Validators.email]);
  clave = new FormControl('', [Validators.required]);

  getErrorMessageCorreo() {
    if (this.correo.hasError('required')) {
      return 'Debes ingresar un valor';
    
    }



    return   this.correo.hasError('email') ? 'No es un correo valido' : '' ;

  }

  getErrorMessageClave() {
    if (this.clave.hasError('required')) {
      

      return 'Debes ingresar un valor';
    }

    return this.clave.hasError('') ? 'Debes ingresar un valor' : '';

  }

  Registro() {

    console.log(this.clave);
    console.log(this.correo);

    if (!(this.unUsuario.clave == '' && this.unUsuario.correo == '')) //revisar
    {
      console.log('existe');

      this.MiServicio.BuscarUsuario(this.unUsuario).valueChanges().subscribe(result => {
        if (result.length == 0) {

          this.MiServicio.Crear(this.unUsuario).then(() => {

            localStorage.setItem('token', this.unUsuario.correo);
            console.log('se envio el Usuario');

            this.router.navigateByUrl("home");

        })
        }
        else{ 
          
          console.log('existe');
          this.dialog.open(DialogElementsExampleDialog); 
        
        }
    })
  }
}
      







  ngOnInit(): void {
      }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog { }