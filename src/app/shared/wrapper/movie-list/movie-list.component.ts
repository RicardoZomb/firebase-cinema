import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../../../models/movie-model';

import * as _ from 'lodash';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() public movies?: MovieModel[];

  constructor() {
    this.initializeData();
  }

  ngOnInit() {
  }

  initializeData() {
    this.movies = _.isEmpty(this.movies) ? [] : this.movies;
  }

  movieById(movie: MovieModel): number {
    return movie.id;
  }
}
