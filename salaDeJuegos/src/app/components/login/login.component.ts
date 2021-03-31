import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import {UsuarioFireService} from 'src/app/services/usuarios.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public unUsuario:Usuario;
  public loged : Boolean




  constructor(public dialog: MatDialog, private servicioUsuario:UsuarioFireService,private router:Router) { this.unUsuario = new Usuario();        this.loged = false; }



  help(){

    this.dialog.open(DialogElementsExampleDialog);
  }

  


  correo = new FormControl('', [Validators.required, Validators.email]);
  clave = new FormControl('', [Validators.required, Validators.required]);

  getErrorMessage() {
    if (this.correo.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.correo.hasError('email') ? 'No es un correo valido.' : '';
  }

  public Login()
  {
    
    let listaUsuarios=this.servicioUsuario.TraerTodos().valueChanges();
 
     listaUsuarios.forEach(i => {
        i.forEach(j => {

          if((this.unUsuario.correo.toString()== j.correo.toString()) && (this.unUsuario.clave.toString() ==j.clave.toString()))
          {
            console.log('hola')
            this.loged = true;
            this.router.navigateByUrl("home");
          }
          this.loged = true;
        });
     
     });


 
  
  }



  ngOnInit(): void {
  }

}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}

