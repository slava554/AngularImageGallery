import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tst-photos-feed',
  templateUrl: './photos-feed.component.html',
  styleUrls: ['./photos-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosFeedComponent {

}
