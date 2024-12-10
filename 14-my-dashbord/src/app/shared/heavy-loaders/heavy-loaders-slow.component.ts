import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `,
  styles: ``,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    //console.log('HeavyLoad component');

    const start = Date.now();

    while (Date.now() - start < 3000) {}

    console.log('Cargado');
  }
}
