import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'heroes-heroe-card',
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.heroe) throw Error('Hero property is requires');
  }

  @Input()
  public heroe!: Heroe;
}
