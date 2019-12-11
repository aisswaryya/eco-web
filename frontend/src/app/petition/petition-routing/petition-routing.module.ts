import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatePetitionComponent } from '../create-petition/create-petition.component';
import { ViewPetitionComponent } from '../view-petition/view-petition.component';
import { ViewByIDPetitionComponent } from '../view-by-id-petition/view-by-id-petition.component';
import { UpdatePetitionComponent } from '../update-petition/update-petition.component';
import { ManagePetitionComponent } from '../manage-petition/manage-petition.component';
import { UserPetitionComponent } from "../user-petition/user-petition.component";


const routes: Routes = [
  { path: 'list', component: ViewPetitionComponent },
  { path: 'create', component: CreatePetitionComponent },
  { path: 'update/:id', component: UpdatePetitionComponent },
  { path: 'details/:id', component: ViewByIDPetitionComponent },
  { path: 'manage/:id', component: ManagePetitionComponent },
  { path: 'profile', component: UserPetitionComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PetitionRoutingModule { }

