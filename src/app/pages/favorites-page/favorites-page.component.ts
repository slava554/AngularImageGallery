import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GalleryComponent } from "../../components/gallery/gallery.component";

@Component({
  selector: "tst-favorites-page",
  templateUrl: "./favorites-page.component.html",
  styleUrls: ["./favorites-page.component.scss"],
  standalone: true,
  imports: [
    CommonModule, GalleryComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPageComponent {}
