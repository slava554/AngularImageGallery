import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { PhotosFeedComponent } from "../../components/photos-feed/photos-feed.component";

@Component({
  selector: "tst-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {}
