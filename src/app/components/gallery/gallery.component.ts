import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FavoritesService } from "../../services/favorites/favorites.service";
import { PhotoPreviewComponent } from "../photo-preview/photo-preview.component";

@Component({
  selector: "tst-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
  standalone: true,
  imports: [
    PhotoPreviewComponent, CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  public favoriteImagesIdList$ = this.favoritesService.favoriteImagesIdList$;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.init();
  }

  trackBySrc(_index: number, item: string): string {
    return item;
  }
}
