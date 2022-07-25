import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { MovieService } from '../../services/movie/movie.service';
import { IMovieResponse } from '../../interfaces/movie/movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  movieDisplayed: IMovieResponse;
  movieImageURL: string;

  constructor(private loginService: LoginService, private movieService: MovieService) {}

  ngOnInit() {
    this.showLatestMovie();
  }

  /* Shows latest movie */
  showLatestMovie() {
    this.movieService.getLatestMovie().subscribe(latest => {
      this.movieDisplayed = latest;
      this.movieImageURL = this.movieService.getMovieImage(this.movieDisplayed);
    });
  }
}
