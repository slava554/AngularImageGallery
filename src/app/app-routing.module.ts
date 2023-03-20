import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesPageComponent } from "./pages/favorites-page/favorites-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { PhotoPageComponent } from "./pages/photo-page/photo-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    title: "Main",
    pathMatch: "full"
  },
  {
    path: "favorites",
    component: FavoritesPageComponent,
    title: "Favorites",
    pathMatch: "full"
  },
  {
    path: "photos/:id",
    component: PhotoPageComponent,
    title: "Photo",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundPageComponent,
    title: "Page not found",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
