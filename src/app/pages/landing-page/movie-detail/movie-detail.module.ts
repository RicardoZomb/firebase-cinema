import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { RouterModule } from '@angular/router';
import { MovieListModule } from '../../../shared/wrapper/movie-list/movie-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieTrailerModule } from '../../../shared/movie-trailer/movie-trailer.module';
import { MovieTrailerComponent } from '../../../shared/movie-trailer/movie-trailer.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, RouterModule, MovieListModule, TranslateModule,
    MovieDetailRoutingModule, MovieTrailerModule],
  declarations: [MovieDetailComponent],
  exports: [MovieDetailComponent],
  entryComponents: [MovieTrailerComponent]
})
export class MovieDetailModule { }
