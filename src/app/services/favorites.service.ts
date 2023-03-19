import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  private _favoriteImages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "https://material.angular.io/assets/img/examples/shiba1.jpg"
  ]);

  constructor() {}

  public get favoriteImages$(): Observable<string[]> {
    return this._favoriteImages$.asObservable();
  }
}
