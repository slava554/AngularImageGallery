import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PhotosFeedComponent } from "./photos-feed.component";

describe("PhotosFeedComponent", () => {
  let component: PhotosFeedComponent;
  let fixture: ComponentFixture<PhotosFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosFeedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
