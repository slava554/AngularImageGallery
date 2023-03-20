import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { FavoritesService } from "../../services/favorites/favorites.service";
import { getSrcById } from "../../utils/utils";

@Component({
  selector: "tst-photo-preview",
  templateUrl: "./photo-preview.component.html",
  styleUrls: ["./photo-preview.component.scss"],
  standalone: true,
  imports: [
    MatCardModule, CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPreviewComponent implements OnInit {
  @Input() id: string = "";
  @Input() feed: boolean = false;

  public src: string | null = null;
  public saved: boolean = false;
  public clickable: boolean = true;

  constructor(private favoritesService: FavoritesService, private router: Router) {}

  ngOnInit(): void {
    this.src = getSrcById(this.id);
    if (this.feed) {
      this.saved = this.favoritesService.isSaved(this.id);
      this.clickable = !this.saved;
    }
  }

  public onClick(): void {
    if (this.feed && !this.saved) {
      return this.save();
    }
    if (!this.feed) {
      this.router.navigate([`/photos/${this.id}`]);
    }
  }

  private save() {
    this.favoritesService.addToFavorites(this.id);
    this.saved = true;
    this.clickable = false;
  }
}
