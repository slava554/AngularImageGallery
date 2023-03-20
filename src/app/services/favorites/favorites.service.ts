import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { localStorageKey } from "../../config";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  private _favoriteImagesIdList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private initialized: boolean = false;

  constructor() {}

  public get favoriteImagesIdList$(): Observable<string[]> {
    return this._favoriteImagesIdList$.asObservable();
  }

  public init(): void {
    this.loadFromLocalStorage();
    this.initialized = true;
  }

  public isSaved(id: string): boolean {
    return this._favoriteImagesIdList$.value.includes(id);
  }

  public addToFavorites(id: string): void {
    if (!this.initialized) {
      this.init();
    }
    this._favoriteImagesIdList$.next([...this._favoriteImagesIdList$.value, id]);
    this.saveToLocalStorage();
  }

  public removeFromFavorites(id: string): void {
    this._favoriteImagesIdList$.next(this._favoriteImagesIdList$.value.filter(savedId => savedId !== id));
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    window.localStorage.setItem(localStorageKey, JSON.stringify(this._favoriteImagesIdList$.value));
  }

  private loadFromLocalStorage(): void {
    const savedData = window.localStorage.getItem(localStorageKey);
    if (!savedData) {
      return;
    }
    const imagesIdList = JSON.parse(savedData);
    if (!imagesIdList || !Array.isArray(imagesIdList)) {
      return;
    }
    this._favoriteImagesIdList$.next(imagesIdList);
  }
}
