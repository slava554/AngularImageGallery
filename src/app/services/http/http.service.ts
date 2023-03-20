import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { getRandomImageId } from "../../utils/utils";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  public loadRandomImages(count: number = 3): Observable<string[]> {
    const ids = [...new Array(count)].map(() => getRandomImageId());
    return of(ids).pipe(delay(200 + Math.floor(Math.random() * 100)));
  }
}
