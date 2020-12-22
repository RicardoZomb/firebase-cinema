import { Component, OnInit } from '@angular/core';
import { MovieCastModel } from '../../../models/movie-cast';
import { MovieDetailsModel } from '../../../models/movie-details';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MovieModel } from '../../../models/movie-model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TmdbService } from '../../../services/tmdb.service';
import { forkJoin } from 'rxjs';
import * as _ from 'lodash';

import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { MovieTrailerComponent } from '../../../shared/movie-trailer/movie-trailer.component';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public baseUrl: string;
  public cast: MovieCastModel[];
  public id: number;
  public movie: MovieDetailsModel;
  public moviesUrl: SafeResourceUrl[];
  public safeUrl: any;
  public similarMovies: MovieModel[];
  public videos: any[];

  constructor(private location: Location,
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog) {
    this.cast = [];
    this.videos = [];
    this.similarMovies = [];
    this.baseUrl = 'http://www.youtube.com/embed';
  }

  ngOnInit() {
    this.getParamsAndMovieDetails();
  }

  getParamsAndMovieDetails() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      const dataMovie = this.tmdbService.getMovieDetail(this.id);
      const castMovie = this.tmdbService.getCastMovie(this.id);
      const videoMovie = this.tmdbService.getVideoMovie(this.id);
      const similarVideo = this.tmdbService.getSimilarMovies(this.id);

      forkJoin(dataMovie, castMovie, videoMovie, similarVideo).subscribe(([movie, credits, video, similar]) => {
        this.movie = movie;
        this.cast = credits.cast;
        this.videos = video.results;
        this.similarMovies = similar.results;
        this.getUrlFromVideos(this.videos);
      })
    })
  }

  /**
 * @description Back to previous page.
 * @return {void}
 */
  public backToPreviousPage(): void {
    this.location.back();
  }

  getUrlFromVideos(videos: any) {
    if (!videos || _.isEqual(_.size(videos), 0)) {
      return;
    }
    this.moviesUrl = [];
    _.forEach(videos, (video: any) => {
      const url = this.createUrlFromVideo(video.key);
      this.moviesUrl.push({
        name: video.name,
        url
      });
    });
  }

  createUrlFromVideo(id: string) {
    return this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}/${id}?rel=0;&autoplay=1&mute=0`);
  }

  openDialogTrailer(url: any) {
    const dialogRef = this.dialog.open(MovieTrailerComponent, {
      height: '500px',
      width: '600px',
      data: { url }
    });
  }

}
