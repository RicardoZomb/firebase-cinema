import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieCategoryModel } from '../models/movie-category';
import { MovieDetailsModel } from '../models/movie-details';
import { MovieCreditsModel } from '../models/movie-credits';
import { MovieVideosModel } from '../models/movie-videos';

@Injectable()
export class TmdbService {
  private API_KEY = environment.tmdb;
  private MOVIE = 'https://api.themoviedb.org/3/movie/';
  private NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  private TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
  private URL_LATEST = 'https://api.themoviedb.org/3/movie/latest?api_key=';

  // private URL_PERSON = 'https://api.themoviedb.org/3/person';

  constructor(private http: HttpClient) { }

  getNowPlayingMovies(): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(this.NOW_PLAYING + this.API_KEY + '&language=' + 'en-US' + '&page=' + 1);
  }

  /**
   * @description Get latest movies
   * @return {Observable<MovieCategoryModel>}
   */
  public getLatestMovies(): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(this.URL_LATEST + this.API_KEY);
  }

  /**
   * @description Get latest movies
   * @return {Observable<MovieCategoryModel>}
   */
  public getTopRatedMovies(): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(this.TOP_RATED + this.API_KEY + '&language=' + 'es-MX' + '&page=' + 1);
  }

  /**
   * @description Get detail about movie selected.
   * @param {number} movieId movie selected id.
   * @return {Observable<MovieCategoryModel>}
   */
  public getMovieDetail(movieId: number): Observable<MovieDetailsModel> {
    return this.http.get<MovieDetailsModel>(this.MOVIE + movieId + '?api_key=' + this.API_KEY + '&language=' + 'en-US');
  }

  /**
   * @description Get detail about movie selected.
   * @param {number} movieId movie selected id.
   * @return {Observable<any>}
   */
  public getCastMovie(movieId: number): Observable<MovieCreditsModel> {
    return this.http.get<MovieCreditsModel>(this.MOVIE + movieId + '/credits?api_key=' + this.API_KEY);
  }

  /**
   * @description Get detail about movie selected.
   * @param {number} movieId movie selected id.
   * @return {Observable<any>}
   */
  public getVideoMovie(movieId: number): Observable<MovieVideosModel> {
    return this.http.get<MovieVideosModel>(this.MOVIE + movieId + '/videos?api_key=' + this.API_KEY + '&language=' + 'es-MX');
  }

  /**
   * @description Get detail about movie selected.
   * @param {number} movieId movie selected id.
   * @return {Observable<any>}
   */
  public getSimilarMovies(movieId: number): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(this.MOVIE + movieId + '/similar?api_key=' + this.API_KEY + '&language=' + 'en-US');
  }

}
