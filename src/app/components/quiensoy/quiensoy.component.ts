import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {

  token:any;

  constructor( private router: Router) {  this.token = '';}

  ngOnInit(): void {

    
    this.token = localStorage.getItem('token'); 

  }



  Deslogearse(){

    localStorage.removeItem('token');
    this.router.navigateByUrl("login");

  }

}
