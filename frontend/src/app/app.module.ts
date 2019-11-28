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
import { ViewOnePetitionComponent } from './view-one-petition/view-one-petition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewPetitionComponent,
    CreatePetitionComponent,
    UpdatePetitionComponent,
    ViewOnePetitionComponent
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
