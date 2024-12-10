import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
} from '@angular/core';
import { Product } from '@interfaces/producto.interface';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  //Nueva forma de utilizar los input
  public product = input.required<Product>();

  //Nueva forma de utilizar los output
  public onIncrementeQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementeQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    console.log(this.product().name);
  });
  constructor() {}
}
