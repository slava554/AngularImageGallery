import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotoActionsComponent } from "../../components/photo-actions/photo-actions.component";
import { PhotoCardComponent } from "../../components/photo-card/photo-card.component";

@Component({
  selector: "tst-photo-page",
  templateUrl: "./photo-page.component.html",
  styleUrls: ["./photo-page.component.scss"],
  standalone: true,
  imports: [
    CommonModule, PhotoCardComponent, PhotoActionsComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPageComponent {
  public id: string = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
  }
}
