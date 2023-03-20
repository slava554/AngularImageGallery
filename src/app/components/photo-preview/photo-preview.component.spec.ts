import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";

import { PhotoPreviewComponent } from "./photo-preview.component";

describe("PhotoPreviewComponent", () => {
  let component: PhotoPreviewComponent;
  let fixture: ComponentFixture<PhotoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoPreviewComponent],
      imports: [MatCardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
