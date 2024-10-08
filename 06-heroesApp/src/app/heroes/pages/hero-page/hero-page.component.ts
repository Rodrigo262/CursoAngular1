import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent {
  public heroe?: Heroe;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
      )
      .subscribe((heroe) => {
        if (!heroe) return this.router.navigate(['/heroes/list']);

        this.heroe = heroe;
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('/heroes/list');
  }
}
