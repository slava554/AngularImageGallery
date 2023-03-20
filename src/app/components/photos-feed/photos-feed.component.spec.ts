import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { PhotosFeedComponent } from "./photos-feed.component";

describe("PhotosFeedComponent", () => {
  let component: PhotosFeedComponent;
  let fixture: ComponentFixture<PhotosFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosFeedComponent],
      imports: [MatProgressSpinnerModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
