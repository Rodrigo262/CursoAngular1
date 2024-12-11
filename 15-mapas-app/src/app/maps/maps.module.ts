import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/mapView/mapView.component';
import { Environment } from './environments/environments';
import * as maptilersdk from '@maptiler/sdk';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

maptilersdk.config.apiKey = Environment.mapbox_key;

@NgModule({
  declarations: [MapScreenComponent, MapViewComponent, LoadingComponent, BtnMyLocationComponent, AngularLogoComponent, SearchBarComponent, SearchResultComponent],
  imports: [CommonModule],
  exports: [MapScreenComponent],
})
export class MapsModule {}
