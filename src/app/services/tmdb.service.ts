import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MovieCategoryModel } from '../models/movie-category';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private API_KEY = environment.tmdb;
  private MOVIE = 'https://api.themoviedb.org/3/movie/';
  private NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  private TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
  private URL_LATEST = 'https://api.themoviedb.org/3/movie/latest?api_key=';

  constructor(private http: HttpClient) { }

  public getNowPlayingMovies(): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(this.NOW_PLAYING + this.API_KEY + '&language=' + 'es-MX');
  }
}
