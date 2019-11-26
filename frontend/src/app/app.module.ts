import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPetitionComponent } from './view-petition/view-petition.component';
import { CreatePetitionComponent } from './create-petition/create-petition.component';
import { UpdatePetitionComponent } from './update-petition/update-petition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewPetitionComponent,
    CreatePetitionComponent,
    UpdatePetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
