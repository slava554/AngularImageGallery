import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { debounceTime, feedLengthMax } from "../../config";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root"
})
export class FeedService implements OnDestroy {
  private _feedImagesIdList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private loadNewImagesSubscription: Subscription | null = null;
  private lastLoadTime: number = 0;

  constructor(private httpService: HttpService) {}

  ngOnDestroy(): void {
    this.loadNewImagesSubscription?.unsubscribe();
  }

  public get feedImagesIdList$(): Observable<string[]> {
    return this._feedImagesIdList$.asObservable();
  }

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public loadNewImages(count: number = 3): void {
    if((this._loading$.value && this._feedImagesIdList$.value?.length) || (this.lastLoadTime && performance.now() - this.lastLoadTime < debounceTime)) {
      return;
    }
    
    this.loadNewImagesSubscription?.unsubscribe();
    this._loading$.next(true);
    this.loadNewImagesSubscription = this.httpService.loadRandomImages(count).subscribe(images => this.addImagesToFeed(images));
  }

  public clear(): void {
    this.loadNewImagesSubscription?.unsubscribe();
    this._loading$.next(true);
    this._feedImagesIdList$.next([]);
  }

  private addImagesToFeed(images: string[]): void {
    const feedImages = [...this._feedImagesIdList$.value, ...images];
    const uniqueImages = [...new Set(feedImages)];
    if(uniqueImages.length > feedLengthMax) {
      uniqueImages.splice(0, uniqueImages.length - feedLengthMax);
    }
    this._feedImagesIdList$.next(uniqueImages);
    this._loading$.next(false);
    this.lastLoadTime = performance.now();
  }
}
