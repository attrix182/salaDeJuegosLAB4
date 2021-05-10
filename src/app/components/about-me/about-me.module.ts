
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class AboutMeModule { }
