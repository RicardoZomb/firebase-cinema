import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TmdbService } from '../../../services/tmdb.service';
import { MovieCategoryModel } from '../../../models/movie-category';
import { MovieModel } from '../../../models/movie-model';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {
  public navigationSubscription: Subscription;
  public moviesLocal: MovieModel[];

  constructor(private router: Router,
    private tdmbService: TmdbService) {
      this.validateNavigation();
    }

  ngOnInit() {
  }

  validateNavigation() {
    this.navigationSubscription = this.router.events.subscribe(
      (e: any) => {
        if (e instanceof NavigationEnd) {
          this.getNowPlaying();
        }
      }, (error: any) => {
        console.error(error);
      }
    );
  }

  getNowPlaying() {
    this.tdmbService.getNowPlayingMovies().subscribe(
      (movies: MovieCategoryModel) => {
        this.moviesLocal = movies.results;
      }, (error: any) => {
        console.error(error);
      }
    );
  }

}
