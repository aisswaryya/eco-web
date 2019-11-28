import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPetitionComponent } from './view-petition/view-petition.component';
import { CreatePetitionComponent } from './create-petition/create-petition.component';
import { UpdatePetitionComponent } from './update-petition/update-petition.component';
import {PetitionService} from './service/petition.service';
import { ViewPetitionsComponent } from './view-petitions/view-petitions.component';
import { ViewoneComponent } from './viewone/viewone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewPetitionComponent,
    CreatePetitionComponent,
    UpdatePetitionComponent,
    ViewPetitionsComponent,
    ViewoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PetitionService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
