import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioFireService } from 'src/app/services/usuarios.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public unUsuario: Usuario;
  //public existe: Boolean;
  public loged: Boolean;




  constructor(public dialog: MatDialog, private servicioUsuario: UsuarioFireService, private router: Router) { this.unUsuario = new Usuario(); this.loged = false; }



  help() {
    this.dialog.open(DialogElementsExampleDialog);

  }


  correo = new FormControl('', [Validators.required, Validators.email]);
  clave = new FormControl('', [Validators.required]);

  getErrorMessageCorreo() {
    if (this.correo.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.correo.hasError('email') ? 'No es un correo valido.' : '';


  }


  getErrorMessageClave() {
    if (this.clave.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.clave.hasError('') ? 'Debes ingresar un valor.' : '';


  }




  public Login() {


    this.servicioUsuario.BuscarUsuario(this.unUsuario).valueChanges().subscribe(result => {
      if (result.length == 1) {

        localStorage.setItem('token', this.unUsuario.correo)

        this.router.navigateByUrl("home");
        console.log('existe')




      }
      else { this.dialog.open(DialogElementsExampleDialog); }

    })


  }






  ngOnInit(): void {



  }

}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog { }



