import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// Import the whole library
import { Map, MapStyle } from '@maptiler/sdk';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.divMap?.nativeElement, // container's id or the HTML element in which SDK will render the map
      style: MapStyle.STREETS,
      center: [-0.37757, 39.46948], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }
}
