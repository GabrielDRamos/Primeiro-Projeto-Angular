import { Component } from '@angular/core';
import {TmdbService} from './tmdb.service';

@Component({
  selector: 'app-root',
  template:`
    <h1>Filmes populares</h1>
    <ul>
      <li *ngFor="let movie of movies">
        {{movie.title}}
      </li>
    </ul>
    <button (click)="getRandomMovies()"> Gerar filmes</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: any[] = [];
  randomPage: number = 0;

  constructor (private tmdbService: TmdbService) {}

  ngOnInit() {
    this.tmdbService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getRandomMovies() {
    this.randomPage = Math.floor(Math.random() * 500) + 1;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=a9628c41a41c649b833077fa447e9d40&page=${this.randomPage}&language=pt-BR`;
    this.tmdbService.getMoviesFromUrl(url).subscribe((data: any) => {
      this.movies = data.results;
    })
      
  } 

}
