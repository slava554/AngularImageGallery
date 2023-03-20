import { fakeAsync, TestBed, tick } from "@angular/core/testing";

import { HttpService } from "./http.service";

describe("HttpService", () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return images", fakeAsync( () => {
    let ids = [];
    const ids$ = service.loadRandomImages().subscribe(rez => ids = rez);
    tick(2000);
    expect(ids.length).toEqual(3);
    ids$.unsubscribe();
  }));
  
});
