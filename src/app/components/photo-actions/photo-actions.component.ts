import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { FavoritesService } from "../../services/favorites/favorites.service";

@Component({
  selector: "tst-photo-actions",
  templateUrl: "./photo-actions.component.html",
  styleUrls: ["./photo-actions.component.scss"],
  standalone: true,
  imports: [
    CommonModule, MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoActionsComponent {
  @Input() id: string = "";

  constructor(private favoritesService: FavoritesService, private router: Router) {}

  public remove() {
    this.favoritesService.removeFromFavorites(this.id);
    this.router.navigate(["favorites"]);
  }
}
