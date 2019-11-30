import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialFeedListComponent } from "./social-feed/social-feed-list/social-feed-list.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path:"socialfeeds",
    component: SocialFeedListComponent
  },
  {
    path:"home",
    component: HomePageComponent
  },
  {
    path:"",
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
