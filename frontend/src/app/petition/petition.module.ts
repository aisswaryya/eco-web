import { NgModule } from '@angular/core';
import { SharedModule} from '../helpers/shared/shared.module';
import {CreatePetitionComponent} from './create-petition/create-petition.component';
import { ViewPetitionComponent} from './view-petition/view-petition.component';
import { ViewByIDPetitionComponent} from './view-by-id-petition/view-by-id-petition.component';
import { UpdatePetitionComponent} from './update-petition/update-petition.component';
import { CommonModule } from '@angular/common';
import { PetitionRoutingModule } from './petition-routing/petition-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagePetitionComponent } from './manage-petition/manage-petition.component';
import { UserPetitionComponent } from './user-petition/user-petition.component';

@NgModule({
  declarations: [CreatePetitionComponent,
    ViewPetitionComponent,
    ViewByIDPetitionComponent,
    UpdatePetitionComponent,
    ManagePetitionComponent,
    UserPetitionComponent],

  imports: [
    CommonModule,
    PetitionRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PetitionModule {


}
