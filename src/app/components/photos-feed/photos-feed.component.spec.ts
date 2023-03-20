import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { of } from "rxjs";
import { PhotoPreviewComponent } from "../photo-preview/photo-preview.component";

import { PhotosFeedComponent } from "./photos-feed.component";

describe("PhotosFeedComponent", () => {
  let component: PhotosFeedComponent;
  let fixture: ComponentFixture<PhotosFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosFeedComponent, PhotoPreviewComponent],
      imports: [MatProgressSpinnerModule, MatCardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display images", () => {
    const fixture = TestBed.createComponent(PhotosFeedComponent);
    const cmp = fixture.componentInstance;
    cmp.feedImagesIdList$ = of(["1", "2"]);
    cmp.loading$ = of(false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll(".feed__photo-preview").length).toEqual(2);
  });
});
