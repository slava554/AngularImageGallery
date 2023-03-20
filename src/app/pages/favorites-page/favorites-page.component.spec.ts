import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { PhotoPreviewComponent } from "../../components/photo-preview/photo-preview.component";

import { FavoritesPageComponent } from "./favorites-page.component";

describe("FavoritesPageComponent", () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, PhotoPreviewComponent, GalleryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
