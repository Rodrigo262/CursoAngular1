import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Thor', 'Hulk', 'Batman'];
  public deletedHero?: string;
  removeLastHeroe(): void {
    this.deletedHero = this.heroesNames.pop();
  }
}
