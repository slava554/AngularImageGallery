import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tst-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPageComponent {

}
