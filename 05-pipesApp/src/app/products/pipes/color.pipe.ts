import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'colorPipe',
})
export class ColorPipe implements PipeTransform {
  transform(color: Color): string {
    return Color[color];
  }
}
