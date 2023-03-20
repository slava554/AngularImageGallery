import { fakeAsync, TestBed, tick } from "@angular/core/testing";

import { FeedService } from "./feed.service";

describe("FeedService", () => {
  let service: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should load images", fakeAsync( () => {
    service = TestBed.inject(FeedService);
    let ids: string[] = [];
    const ids$ = service.feedImagesIdList$.subscribe(rez => ids = rez);
    expect(ids.length).toEqual(0);
    
    service.loadNewImages();
    tick(1000);
    expect(ids.length).toEqual(3);
    
    ids$.unsubscribe();
  }));

  it("should clear images", fakeAsync( () => {
    service = TestBed.inject(FeedService);
    let ids: string[] = [];
    const ids$ = service.feedImagesIdList$.subscribe(rez => ids = rez);
    service.loadNewImages();
    tick(1000);
    expect(ids.length).toEqual(3);
    
    service.clear();
    tick(100);
    expect(ids.length).toEqual(0);
    
    ids$.unsubscribe();
  }));

  it("should show loading", fakeAsync( () => {
    service = TestBed.inject(FeedService);
    let loading: boolean = false;
    let ids: string[] = [];
    const ids$ = service.feedImagesIdList$.subscribe(rez => ids = rez);
    const loading$ = service.loading$.subscribe(rez => loading = rez);
    service.loadNewImages();
    tick(100);

    expect(loading).toBeTrue();
    tick(1000);
    
    ids$.unsubscribe();
    loading$.unsubscribe();
  }));
});
