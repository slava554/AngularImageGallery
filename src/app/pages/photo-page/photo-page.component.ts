import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tst-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPageComponent {

}
