import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";

import { PhotoCardComponent } from "./photo-card.component";

describe("PhotoCardComponent", () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    component.id = "1";
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should calculate src", () => {
    expect(component.src).toEqual("https://picsum.photos/seed/1/200/300");
  });
});
