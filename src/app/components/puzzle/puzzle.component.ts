import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  Deslogearse()
  {
    localStorage.removeItem('token')
  }

}
