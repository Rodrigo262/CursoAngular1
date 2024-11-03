import { ControlPosition } from './../../../../../node_modules/maplibre-gl/dist/maplibre-gl.d';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { Map, MapStyle, Marker } from '@maptiler/sdk';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement) throw 'LngLat can´t be null';
    if (!this.lngLat) throw 'LngLat can´t be null';

    const map = new Map({
      container: this.divMap?.nativeElement, // container's id or the HTML element in which SDK will render the map
      style: MapStyle.HYBRID,
      center: this.lngLat, // starting position [lng, lat]
      zoom: 9, // starting zoom
      interactive: false,
      navigationControl: false,
      geolocateControl: false,
    });

    new Marker().setLngLat(this.lngLat).addTo(map);
  }
}
