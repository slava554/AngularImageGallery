import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { RouterTestingModule } from "@angular/router/testing";
import { PhotoActionsComponent } from "../../components/photo-actions/photo-actions.component";
import { PhotoCardComponent } from "../../components/photo-card/photo-card.component";

import { PhotoPageComponent } from "./photo-page.component";

describe("PhotoPageComponent", () => {
  let component: PhotoPageComponent;
  let fixture: ComponentFixture<PhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, PhotoCardComponent, PhotoActionsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
