import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeedService } from '../../services/feed/feed.service';

@Component({
  selector: 'tst-photos-feed',
  templateUrl: './photos-feed.component.html',
  styleUrls: ['./photos-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosFeedComponent {
  protected feedImagesIdList$ = this.feedService.feedImagesIdList$;
  protected loading$ = this.feedService.loading$;

  constructor(private feedService: FeedService) {}

  protected loadNewImages(): void {
    this.feedService.loadNewImages();
  }

  protected trackBySrc(_index: number, item: string): string {
    return item;
  }
}
