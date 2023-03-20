import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FavoritesService } from "../../services/favorites/favorites.service";

@Component({
  selector: "tst-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  protected favoriteImagesIdList$ = this.favoritesService.favoriteImagesIdList$;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.init();
  }

  protected trackBySrc(_index: number, item: string): string {
    return item;
  }
}
