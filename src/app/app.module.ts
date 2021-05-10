import { ChatMiJuegoComponent } from './components/chatMiJuego/chatMiJuego.component';
import { ChatMemotestComponent } from './components/chatMemotest/chatMemotest.component';

import { HttpClientModule } from '@angular/common/http';
import { ChatPptComponent } from './components/chatPpt/chatPPT.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PiedraPapelTijeraComponent } from './components/piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './components/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { ChatTatetiComponent } from './components/chatTateti/chatTateti.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';


import {AngularFireModule} from '@angular/fire';

import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PuntajesComponent } from './components/puntajes/puntajes.component';
import { PuzzleComponent } from './components/puzzle/puzzle.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';







@NgModule({
  declarations: [
    AppComponent,
    ChatTatetiComponent,
    PiedraPapelTijeraComponent,
    TaTeTiComponent,
    MemotestComponent,
    ChatPptComponent,
    PuntajesComponent,
    ChatMemotestComponent,
    PuzzleComponent,
    EncuestaComponent,
    ChatMiJuegoComponent
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
