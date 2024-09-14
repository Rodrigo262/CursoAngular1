import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

   getNameVisible(): boolean{
     return this.name !='Rodrigo'
   }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void{
    this.name = 'Rodrigo';
  }

  changeAge(): void{
    this.age = 10;
  }

  resetForm(): void{
    this.age = 45;
    this.name = 'ironman';

    //document.querySelectorAll('h1')!.forEach(element => element.innerHTML = '<h1>Desde Angular</h1>')
  }
}
