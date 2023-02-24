import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'SUA_API_KEY'

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR`);
  }

  getMovieDetails(id: number) {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMoviesFromUrl(url: string) {
    return this.http.get(url);
  }


}

