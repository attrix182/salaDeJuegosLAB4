import { Component, OnInit } from '@angular/core';
import {} from '../../clases/usuario'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token:any;


  playTateti() {
    location.assign('/juegos/tateti');
  }


  constructor( private router: Router) { this.token = '';} 

  ngOnInit(): void {


    this.token = localStorage.getItem('token');
    if(this.token == null)
    {
      this.router.navigateByUrl("login");

    }
    
  }

  goPuntajes()
  {
    location.assign("/puntajes");
  }


  
  goQuienSoy()
  {
    location.assign("/quiensoy");
  }

  Deslogearse(){

    localStorage.removeItem('token');
    this.router.navigateByUrl("login");

  }





}
