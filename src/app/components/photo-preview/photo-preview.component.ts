import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'tst-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPreviewComponent implements OnInit {
  @Input() id: string = "";
  @Input() feed: boolean = false;

  protected src: string | null = null;
  protected saved: boolean = false;
  protected clickable: boolean = true;

  constructor(private favoritesService: FavoritesService, private router: Router){}

  ngOnInit(): void {
    this.src = `https://picsum.photos/seed/${this.id}/200/300`;
    if(this.feed) {
      this.saved = this.favoritesService.isSaved(this.id);
      this.clickable = !this.saved;
    }
  }

  protected onClick(): void{
    if(this.feed && !this.saved) {
      return this.save();
    }
    if(!this.feed) {
      this.router.navigate(["/photos", { id: this.id }]);
    }
  }

  private save() {
    this.favoritesService.addToFavorites(this.id);
    this.saved = true;
    this.clickable = false;
    // mb detect changes
  }
}
