import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tst-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {

}
