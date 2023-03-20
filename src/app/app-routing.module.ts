import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    title: "Main",
    pathMatch: "full"
  },
  {
    path: "favorites",
    loadComponent: () => import('./pages/favorites-page/favorites-page.component').then(m => m.FavoritesPageComponent),
    title: "Favorites",
    pathMatch: "full"
  },
  {
    path: "photos/:id",
    loadComponent: () => import('./pages/photo-page/photo-page.component').then(m => m.PhotoPageComponent),
    title: "Photo",
    pathMatch: "full"
  },
  {
    path: "**",
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    title: "Page not found",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
