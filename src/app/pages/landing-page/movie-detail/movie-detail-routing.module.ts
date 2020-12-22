import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';
import { NgModule } from '@angular/core';

const Routes: Routes = [
  { path: '', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class MovieDetailRoutingModule { }
