import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
})
export class SearchResultComponent {
  private placeServices = inject(PlacesService);
  private mapService = inject(MapService);

  public selectedId?: string;

  get isLoadingPlaces(): boolean {
    return this.placeServices.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placeServices.places;
  }

  flyTo(place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.center;

    this.mapService.flyTo([lng, lat]);
  }

  //Con la opción de MapTiler no se puede hacer y MapBox es de pago
  getDirection(place: Feature) {
    if (!this.placeServices.userLocation) throw Error('No hay userLocation');
    const start = this.placeServices.userLocation!;
    const end = place.center as [number, number];

    this.mapService.getRouteBetweenPoints(start, end);
  }
}
