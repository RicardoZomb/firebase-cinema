import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardComponent } from './billboard.component';
import { MovieListModule } from '../../../shared/wrapper/movie-list/movie-list.module';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { TmdbService } from '../../../services/tmdb.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, MovieListModule, AngularMaterialModule, TranslateModule],
  declarations: [BillboardComponent],
  providers: [TmdbService]
})
export class BillboardModule { }
