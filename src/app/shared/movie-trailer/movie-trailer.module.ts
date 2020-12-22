import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieTrailerComponent } from './movie-trailer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MovieTrailerComponent],
  exports: [MovieTrailerComponent]
})
export class MovieTrailerModule { }
