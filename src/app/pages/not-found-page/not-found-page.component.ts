import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "tst-not-found-page",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {}
