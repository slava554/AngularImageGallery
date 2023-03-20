import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FeedService } from "../../services/feed/feed.service";
import { PhotoPreviewComponent } from "../photo-preview/photo-preview.component";

const scrollDeviation = 2;

@Component({
  selector: "tst-photos-feed",
  templateUrl: "./photos-feed.component.html",
  styleUrls: ["./photos-feed.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosFeedComponent implements AfterViewInit {
  public feedImagesIdList$ = this.feedService.feedImagesIdList$;
  public loading$ = this.feedService.loading$;

  constructor(private feedService: FeedService) {}

  ngAfterViewInit(): void {
    this.feedService.loadNewImages(9);
  }

  ngOnDestroy(): void {
    this.feedService.clear();
  }

  @HostListener("window:scroll")
  public onScroll(): void {
    this.checkLoadingNecessary();
  }

  public trackBySrc(_index: number, item: string): string {
    return item;
  }

  private checkLoadingNecessary(): void {
    if (document.body.scrollHeight - window.pageYOffset - window.innerHeight <= scrollDeviation) {
      this.feedService.loadNewImages();
    }
  }
}
