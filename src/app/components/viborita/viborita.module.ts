import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViboritaRoutingModule } from './viborita-routing.module';
import { ViboritaComponent } from './viborita.component';
import { BestScoreManager } from './app.storage.service';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';




@NgModule({
  declarations: [ViboritaComponent],
  imports: [
    CommonModule,
    ViboritaRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatOptionModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    BestScoreManager
  ],
}
)
export class ViboritaModule { }
