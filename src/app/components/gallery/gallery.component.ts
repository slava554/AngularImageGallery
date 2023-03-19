import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'tst-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  protected favoriteImagesIdList$ = this.favoritesService.favoriteImagesIdList$;

  constructor(private favoritesService: FavoritesService) {}

  protected trackBySrc(_index: number, item: string): string {
    return item;
  }
}
