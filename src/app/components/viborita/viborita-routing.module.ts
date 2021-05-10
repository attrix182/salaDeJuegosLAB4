import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViboritaComponent } from './viborita.component';

const routes: Routes = [{ path: '', component: ViboritaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViboritaRoutingModule { }
