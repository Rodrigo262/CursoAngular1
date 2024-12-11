import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PlacesApiClient extends HttpClient {
  public baseUrl: string = 'https://api.maptiler.com/geocoding/';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(
    url: string,
    options: {
      params?:
        | HttpParams
        | {
            [param: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
    }
  ) {
    url = this.baseUrl + url;

    return super.get<T>(url, {
      params: {
        limit: 5,
        language: 'es',
        key: Environment.mapbox_key,
        ...options.params,
      },
    });
  }
}
