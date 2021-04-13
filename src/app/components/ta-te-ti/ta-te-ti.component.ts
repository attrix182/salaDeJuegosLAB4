import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  Deslogearse(){

    localStorage.removeItem('token');
    this.router.navigateByUrl("login");

  }


}
  

