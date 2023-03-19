import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService implements OnDestroy {
  private _feedImagesIdList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    "10",
    "2",
    "30",
    "40",
    "5",
    "60",
    "70",
    "80",
    "9"
  ]);
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loadNewImagesSubscription: Subscription | null = null;

  constructor(private httpService: HttpService) { }

  ngOnDestroy(): void {
    this.loadNewImagesSubscription?.unsubscribe();
  }

  public get feedImagesIdList$(): Observable<string[]> {
    return this._feedImagesIdList$.asObservable();
  }

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public loadNewImages(): void {
    this.loadNewImagesSubscription?.unsubscribe();
    this._loading$.next(true);
    this.httpService.loadRandomImages().subscribe(images => {
      const feedImages = [...this._feedImagesIdList$.value, ...images];
      const uniqueImages = [...new Set(feedImages)];
      this._feedImagesIdList$.next(uniqueImages);
      this._loading$.next(false);
    });
  }
}
