import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { UsuarioFireService } from '../../services/usuarios.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  public unUsuario: Usuario;
  //public existe: Boolean;
  public loged: Boolean;
  cargando: boolean;




  constructor(public dialog: MatDialog, private servicioUsuario: UsuarioFireService, private router: Router) { 
    
    console.log("Estoy en logion ts")
    
    this.unUsuario = new Usuario(); this.loged = false; }


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

    return this.clave.hasError('') ? 'Debes ingresar un valor.' : '';


  }

  public LoginRapido() {
    this.unUsuario.clave = '123456';
    this.unUsuario.correo = "invitado@invitado.com";

  }

  alert(icon: SweetAlertIcon, text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
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


  public Login() {

    this.alert('info', 'verificando datos')
    this.servicioUsuario.BuscarUsuario(this.unUsuario).valueChanges().subscribe(result => {
      if (result.length == 1) {

        localStorage.setItem('token', this.unUsuario.correo)
        this.alert('success', 'Bienvenido!')
  
   
        this.router.navigateByUrl("home");

        console.log('existe')
      }
      else {
        this.alert('error', 'Usuario Invalido!')

      }

    })


  }






  ngOnInit(): void {



  }

}



