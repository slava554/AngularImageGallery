import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "tst-photo-page",
  templateUrl: "./photo-page.component.html",
  styleUrls: ["./photo-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPageComponent {
  protected id: string = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
  }
}
