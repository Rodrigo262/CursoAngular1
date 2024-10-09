import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
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

  addHeroe(heroe: Heroe): Observable<Heroe> {
    return this.httpClient.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  updateHeroe(heroe: Heroe): Observable<Heroe> {
    if (!heroe.id) throw Error('Hero is required');

    return this.httpClient.patch<Heroe>(
      `${this.baseUrl}/heroes/${heroe.id}`,
      heroe
    );
  }
  deleteHeroeById(id: string): Observable<boolean> {
    if (!id) throw Error('Id is required');

    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
