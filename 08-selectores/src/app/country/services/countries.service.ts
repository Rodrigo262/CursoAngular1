import { Injectable } from '@angular/core';
import {
  Country,
  Region,
  SmallCountry,
} from '../interfaces/country.interfaces';
import { combineLatest, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Europa,
    Region.Asia,
    Region.Oceania,
  ];

  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpclient: HttpClient) {}

  get regions(): Region[] {
    return [...this._regions];
  }

  //https://restcountries.com/v3.1/region/europe
  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url: string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.httpclient.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      )
    );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    if (!alphaCode) return of();

    const url: string = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;

    return this.httpclient.get<Country>(url).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    );
  }

  getCountriesBorderByCode(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([]);

    const countriesRequests: Observable<SmallCountry>[] = [];
    borders.forEach((code) => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    return combineLatest(countriesRequests);
  }
}
