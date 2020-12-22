import { AngularMaterialModule } from '../../angular-material.module';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule} from 'ng-lazyload-image';
import { MovieListComponent } from './movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, AngularMaterialModule, LazyLoadImageModule],
  declarations: [MovieListComponent],
  exports: [MovieListComponent]
})
export class MovieListModule { }
