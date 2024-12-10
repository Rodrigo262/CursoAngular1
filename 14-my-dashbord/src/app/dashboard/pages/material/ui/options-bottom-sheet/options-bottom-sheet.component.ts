import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './options-bottom-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<OptionsBottomSheetComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
