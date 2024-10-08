import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Heroe[] = [];
  public selectedHeroe?: Heroe;
  constructor(private heroesServices: HeroesService) {}

  searchHero() {
    const value: string = this.searchInput.value || '';

    this.heroesServices
      .getSuggestions(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHeroe = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.searchInput.setValue(heroe.superhero);

    this.selectedHeroe = heroe;
  }
}
