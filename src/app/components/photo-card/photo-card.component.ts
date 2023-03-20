import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { getSrcById } from "../../utils/utils";

@Component({
  selector: "tst-photo-card",
  templateUrl: "./photo-card.component.html",
  styleUrls: ["./photo-card.component.scss"],
  standalone: true,
  imports: [
    CommonModule, MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoCardComponent {
  @Input() id: string = "";

  public src: string | null = null;

  ngOnInit(): void {
    this.src = getSrcById(this.id);
  }
}
