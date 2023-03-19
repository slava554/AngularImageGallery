import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { FeedService } from '../../services/feed/feed.service';

const scrollDeviation = 2;

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

  ngAfterViewInit(): void {
    this.feedService.loadNewImages(9);
  }

  @HostListener("window:scroll")
  public onScroll(): void {
    this.checkLoadingNecessary();
    
  }

  protected trackBySrc(_index: number, item: string): string {
    return item;
  }

  private checkLoadingNecessary(): void {
    if (document.body.scrollHeight - window.pageYOffset - window.innerHeight <= scrollDeviation) {
      this.feedService.loadNewImages();
    }
  }
}
