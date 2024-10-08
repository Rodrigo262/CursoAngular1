import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environments.baseUrl;
  private limit: number = 6;
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroe | undefined> {
    return this.httpClient
      .get<Heroe>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSuggestions(query: string): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(
      `${this.baseUrl}/heroes?q=${query}&_limit=${this.limit}`
    );
  }
}
