import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tst-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPreviewComponent {
  @Input() src: string = "";
}
