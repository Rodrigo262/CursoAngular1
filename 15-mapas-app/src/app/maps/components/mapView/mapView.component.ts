import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';

import { Map, MapStyle, Marker, Popup } from '@maptiler/sdk';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './mapView.component.html',
  styleUrl: './mapView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapViewComponent implements AfterViewInit {
  private placesService = inject(PlacesService);
  private mapService = inject(MapService);

  @ViewChild('map')
  public divMap!: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.divMap!.nativeElement, // container's id or the HTML element in which SDK will render the map
      style: MapStyle.STREETS,
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(`
      <h6>Aquí estoy</h6>
      <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.userLocation!)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);
  }
}
