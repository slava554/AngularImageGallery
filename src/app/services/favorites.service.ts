import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

const localStorageKey = "savedPictures";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  private _favoriteImagesIdList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ]);

  constructor() {}

  public get favoriteImagesIdList$(): Observable<string[]> {
    return this._favoriteImagesIdList$.asObservable();
  }

  public isSaved(id: string): boolean {
    return this._favoriteImagesIdList$.value.includes(id);
  }

  public addToFavorites(id: string): void {
    this._favoriteImagesIdList$.next([...this._favoriteImagesIdList$.value, id]);
    this.saveToLocalStorage();
  }

  public removeFromFavorites(id: string): void {
    console.log("removeFromFavorites", id);
    this._favoriteImagesIdList$.next(
      this._favoriteImagesIdList$.value.filter(savedId => savedId !== id)
    );
    console.log("this._favoriteImagesIdList$.value", this._favoriteImagesIdList$.value);
    
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    window.localStorage.setItem(localStorageKey, JSON.stringify(this._favoriteImagesIdList$.value));
  }

  private loadFromLocalStorage(): void {
    const savedData = window.localStorage.getItem(localStorageKey);
    if(!savedData){
      return;
    }
    const imagesIdList = JSON.parse(savedData);
    if(!imagesIdList || !Array.isArray(imagesIdList)){
      return;
    }
    this._favoriteImagesIdList$.next(imagesIdList);
  }
}
