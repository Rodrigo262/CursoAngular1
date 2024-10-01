import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServices } from '../../services/countries.services';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = [
    'África',
    'Américas',
    'Asia',
    'Europe',
    'Oceanía',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesServices) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
