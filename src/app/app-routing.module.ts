import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { PiedraPapelTijeraComponent } from './components/piedra-papel-tijera/piedra-papel-tijera.component';
import {RegistroComponent} from './components/registro/registro.component';
import { TaTeTiComponent } from './components/ta-te-ti/ta-te-ti.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },

  
  {
    path: 'juegos',

    children:
      [

        { path: 'tateti', component: TaTeTiComponent },
        { path: 'piedrapapeltijera', component: PiedraPapelTijeraComponent },
        { path: '**', component: HomeComponent }
      ]

  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
