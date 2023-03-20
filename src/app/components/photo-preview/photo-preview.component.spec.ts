import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material/card";

import { PhotoPreviewComponent } from "./photo-preview.component";

describe("PhotoPreviewComponent", () => {
  let component: PhotoPreviewComponent;
  let fixture: ComponentFixture<PhotoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoPreviewComponent);
    component = fixture.componentInstance;
    component.id = "1";
    component.feed = true;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should calculate src", () => {
    expect(component.src).toEqual("https://picsum.photos/seed/1/200/300");
  });

  it("should be clickable on main page", () => {
    const fixture = TestBed.createComponent(PhotoPreviewComponent);
    const cmp = fixture.componentInstance;
    cmp.id = "1";
    cmp.feed = true;
    cmp.ngOnInit();
    fixture.detectChanges();
    expect(cmp.clickable).toBeTrue();
  });

  it("should be clickable on favorite page", () => {
    const fixture = TestBed.createComponent(PhotoPreviewComponent);
    const cmp = fixture.componentInstance;
    cmp.id = "1";
    cmp.feed = false;
    cmp.ngOnInit();
    fixture.detectChanges();
    expect(cmp.clickable).toBeTrue();
  });

  it("should be saved after click on main page", () => {
    const fixture = TestBed.createComponent(PhotoPreviewComponent);
    const cmp = fixture.componentInstance;
    cmp.id = "1";
    cmp.feed = true;
    cmp.ngOnInit();
    fixture.detectChanges();
    expect(cmp.saved).toBeFalse();
    cmp.onClick();
    fixture.detectChanges();
    expect(cmp.saved).toBeTrue();
  });


});
