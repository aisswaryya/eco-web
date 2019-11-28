import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPetitionComponent } from './view-petition/view-petition.component';
import { CreatePetitionComponent } from './create-petition/create-petition.component';
import { UpdatePetitionComponent } from './update-petition/update-petition.component';
import { ViewoneComponent } from './view-one.component/viewone.component';



const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'view', component: ViewPetitionComponent},
  {path: 'create', component: CreatePetitionComponent},
  {path: 'update', component: UpdatePetitionComponent},
  {path: 'viewOne', component: ViewoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
