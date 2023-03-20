import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "tst-not-found-page",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.scss"],
  standalone: true,
  imports: [
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {}
