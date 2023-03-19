import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor() {}

  public loadRandomImages(): Observable<string[]> {
    return of(["100", "200", "300"]).pipe(delay(200 + Math.floor(Math.random() * 100)));
  }
}
