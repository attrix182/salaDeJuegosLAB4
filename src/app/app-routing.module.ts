import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { PuzzleComponent } from './components/puzzle/puzzle.component';
import { PuntajesComponent } from './components/puntajes/puntajes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MemotestComponent } from './components/memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './components/piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './components/ta-te-ti/ta-te-ti.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },

  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },

  { path: 'registro', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },

  { path: 'quiensoy', loadChildren: () => import('./components/about-me/about-me.module').then(m => m.AboutMeModule) },

  { path: 'home', loadChildren: () => import('./components/principal/principal.module').then(m => m.PrincipalModule) },


  { path: 'puntajes', component: PuntajesComponent },
  { path: 'encuesta', component: EncuestaComponent },
  
  {
    path: 'juegos',

    children:
      [

        { path: 'tateti', component: TaTeTiComponent },
        { path: 'piedrapapeltijera', component: PiedraPapelTijeraComponent },
        { path: 'memotest', component: MemotestComponent },
        { path: 'rompecabezas', component: PuzzleComponent },
   
      ]

  },

 

  { path: '**', loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule) },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
