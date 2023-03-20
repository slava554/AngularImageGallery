import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { FavoritesPageComponent } from "./pages/favorites-page/favorites-page.component";
import { PhotoPageComponent } from "./pages/photo-page/photo-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { PhotoPreviewComponent } from "./components/photo-preview/photo-preview.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeaderComponent } from "./components/header/header.component";
import { PhotosFeedComponent } from "./components/photos-feed/photos-feed.component";
import { PhotoActionsComponent } from "./components/photo-actions/photo-actions.component";
import { PhotoCardComponent } from "./components/photo-card/photo-card.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotosFeedComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    PhotoPreviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
