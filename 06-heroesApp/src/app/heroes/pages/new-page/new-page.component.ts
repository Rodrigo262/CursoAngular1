import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  public heroeForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroeById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroeForm.reset(hero);
        return;
      });
  }

  get currentHero(): Heroe {
    const heroe = this.heroeForm.value as Heroe;
    return heroe;
  }
  onSubmit(): void {
    if (this.heroeForm.invalid) return;

    if (this.currentHero.id) {
      this.heroeService.updateHeroe(this.currentHero).subscribe((heroe) => {
        this.showSnackbar(`${heroe.superhero} updated!`);
      });

      return;
    }
    this.heroeService.addHeroe(this.currentHero).subscribe((heroe) => {
      this.router.navigate(['/heroes/edit', heroe.id]);
      this.showSnackbar(`${heroe.superhero} created!`);
    });
  }

  onDeleteHero(): void {
    if (!this.currentHero.id) throw Error('Heroe id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroeForm.value,
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (!result) result;
    //   console.log({ result });
    //   this.heroeService
    //     .deleteHeroeById(this.currentHero.id)
    //     .subscribe((wasDelete) => {
    //       if (wasDelete) {
    //         this.router.navigate(['/heroes']);
    //       }
    //     });
    // });
    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroeService.deleteHeroeById(this.currentHero.id)),
        filter((wasDelete: boolean) => wasDelete)
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', { duration: 2500 });
  }
}
