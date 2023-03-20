import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { localStorageKey } from "../../config";

import { FavoritesService } from "./favorites.service";

describe("FavoritesService", () => {
  let service: FavoritesService;

  beforeEach(() => {
    window.localStorage.removeItem(localStorageKey)
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
    service.init();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should add images", fakeAsync( () => {
    service = TestBed.inject(FavoritesService);
    service.init();
    let ids: string[] = [];
    const ids$ = service.favoriteImagesIdList$.subscribe(rez => ids = rez);
    tick(100);
    expect(ids.length).toEqual(0);

    service.addToFavorites("1");
    tick(100);
    expect(ids.length).toEqual(1);
    expect(ids[0]).toEqual("1");
    
    ids$.unsubscribe();
  }));

  it("should remove images", fakeAsync( () => {
    service = TestBed.inject(FavoritesService);
    service.init();
    let ids: string[] = [];
    const ids$ = service.favoriteImagesIdList$.subscribe(rez => ids = rez);
    tick(100);
    expect(ids.length).toEqual(0);

    service.addToFavorites("1");
    service.addToFavorites("2");
    service.addToFavorites("3");
    tick(100);
    expect(ids.length).toEqual(3);

    service.removeFromFavorites("3")
    tick(100);
    expect(ids.length).toEqual(2);
    
    ids$.unsubscribe();
  }));
});
