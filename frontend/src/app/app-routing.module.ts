import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialFeedListComponent } from "./social-feed/social-feed-list/social-feed-list.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";

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
    path:"blog-detail",
    component: BlogDetailComponent
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
