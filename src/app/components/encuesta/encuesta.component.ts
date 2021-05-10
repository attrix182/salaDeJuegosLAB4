import { EncuestaService } from '../../services/encuesta.service';
import { Usuario } from './../../clases/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Encuesta } from 'src/app/models/encuesta';
import Swal, { SweetAlertIcon } from 'sweetalert2';



@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {



  collection = '/encuestas';
  encuesta: Encuesta = new Encuesta;
  user: Usuario | undefined;

  encuestaForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    apellido: new FormControl('', [
      Validators.required
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(99)
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.maxLength(10)
    ]),
    comoNosEncontraste: new FormControl('', [
      Validators.required
    ]),
    cuantoGusto: new FormControl(''),
    cualesJugaste: new FormControl('', [
      Validators.required
    ]),
    recomendarias: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private dialog: MatDialog, private router: Router, private encuestaSVC: EncuestaService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || "{}");
    this.encuestaForm.patchValue({
      cuantoGusto: 5
    });
  }

  enviarEncuesta() {



    this.encuesta.usuario = localStorage.getItem('token');
    this.encuesta.nombre = this.encuestaForm.get('nombre')?.value;
    this.encuesta.apellido = this.encuestaForm.get('apellido')?.value;
    this.encuesta.edad = this.encuestaForm.get('edad')?.value;
    this.encuesta.telefono = this.encuestaForm.get('telefono')?.value;
    this.encuesta.comoNosEncontraste = this.encuestaForm.get('comoNosEncontraste')?.value;
    this.encuesta.cuantoGusto = this.encuestaForm.get('cuantoGusto')?.value;
    this.encuesta.cualesJugaste = this.encuestaForm.get('cualesJugaste')?.value;
    this.encuesta.recomendarias = this.encuestaForm.get('recomendarias')?.value;

    this.encuestaSVC.Crear(this.encuesta);

  this.alert('success','Encuesta enviada, seras redirigido a home')

setTimeout(() => {
  location.assign("/home")
}, 1900);

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
}
