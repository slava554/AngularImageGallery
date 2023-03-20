import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PhotoActionsComponent } from "./photo-actions.component";

describe("PhotoActionsComponent", () => {
  let component: PhotoActionsComponent;
  let fixture: ComponentFixture<PhotoActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoActionsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
