import { inject, Injectable } from '@angular/core';
import { Feature, PlaceResponse } from '../interfaces/places.interface';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private placesApiClient = inject(PlacesApiClient);
  private mapService = inject(MapService);

  public userLocation?: [number, number] = undefined;
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get IsUserLocationReady(): boolean {
    return !!this.userLocation;
  }
  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('No se puedo obtener la geolocalización');
          console.log(err);
          reject();
        }
      );
    });
  }

  // Se puede hacer de manera tradicional sin hacer esto, es decir llamar directamente el get aquí
  getPlacesByQuery(query: string = '') {
    if (query.length === 0) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if (!this.userLocation) throw Error('No hay userLocation');

    this.isLoadingPlaces = true;
    this.placesApiClient
      .get<PlaceResponse>(`${query}.json`, {
        params: {
          proximity: this.userLocation.join(','),
        },
      })
      .subscribe((resp) => {
        this.isLoadingPlaces = false;
        this.places = resp.features;

        this.mapService.createMarkersFromPlaces(
          this.places,
          this.userLocation!
        );
      });
  }
}
