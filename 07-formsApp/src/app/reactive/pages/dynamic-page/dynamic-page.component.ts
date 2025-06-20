import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  // public myForm2 = new FormGroup({
  //   favouriteGames : new FormArray([])
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favouriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  public newFav: FormControl = new FormControl('', [Validators.required]);
  constructor(private fb: FormBuilder) {}

  get favoriteGames() {
    return this.myForm.get('favouriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters`;
      }
    }
    return null;
  }

  onAddToFavourites(): void {
    if (this.newFav.invalid) return;

    const newGame = this.newFav.value;

    this.favoriteGames.push(this.fb.control(newGame, Validators.required));
    this.newFav.reset();
  }

  onDeleteFavourite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched;
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favouriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
