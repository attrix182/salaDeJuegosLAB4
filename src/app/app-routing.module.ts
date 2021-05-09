import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './components/piedra-papel-tijera/piedra-papel-tijera.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import {RegistroComponent} from './components/registro/registro.component';
import { TaTeTiComponent } from './components/ta-te-ti/ta-te-ti.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },


  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },

  { path: 'quiensoy', component: QuiensoyComponent },
  { path: 'home', component: HomeComponent },
  
  {
    path: 'juegos',

    children:
      [

        { path: 'tateti', component: TaTeTiComponent },
        { path: 'piedrapapeltijera', component: PiedraPapelTijeraComponent },
        { path: 'memotest', component: MemotestComponent },
        { path: '**', component: HomeComponent }
      ]

  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
