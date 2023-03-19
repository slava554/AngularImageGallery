import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  private _favoriteImages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    "https://picsum.photos/seed/1/200/300",
    "https://picsum.photos/seed/2/200/300",
    "https://picsum.photos/seed/1/200/300",
    "https://picsum.photos/seed/2/200/300",
    "https://picsum.photos/seed/1/200/300",
    "https://picsum.photos/seed/2/200/300",
    "https://picsum.photos/seed/1/200/300",
    "https://picsum.photos/seed/2/200/300",
    "https://picsum.photos/seed/1/200/300"
    
  ]);

  constructor() {}

  public get favoriteImages$(): Observable<string[]> {
    return this._favoriteImages$.asObservable();
  }
}
