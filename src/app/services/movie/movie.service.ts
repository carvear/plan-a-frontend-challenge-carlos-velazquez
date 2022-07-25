import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';
import { IMovieResponse } from '../../interfaces/movie/movie';
import { IConfigurationResponse } from '../../interfaces/configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  configuration: IConfigurationResponse;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.getConfiguration();
  }

  /* Get the latest movie Image */
  public getMovieImage(movie: IMovieResponse) {
    if (this.configuration?.images?.poster_sizes?.length < 1 || !movie?.poster_path) {
      return null;
    }

    const posterSizes = this.configuration.images.poster_sizes;
    const selectedPosterSize = posterSizes[posterSizes.length - 1];
    return `${this.configuration.images.secure_base_url}${selectedPosterSize}${movie.poster_path}`;
  }

  /* Get the latest movie */
  public getLatestMovie(): Observable<IMovieResponse> {
    return this.http.get<IMovieResponse>(`${this.loginService.apiBase}/movie/latest?api_key=${this.loginService.apiKey}&language=en-US`);
  }

  /* Get configuration */
  private getConfiguration() {
    const configurationSub = this.http
      .get<IConfigurationResponse>(`${this.loginService.apiBase}/configuration?api_key=${this.loginService.apiKey}`)
      .subscribe(response => {
        this.configuration = response;
        configurationSub.unsubscribe();
      });
  }
}
