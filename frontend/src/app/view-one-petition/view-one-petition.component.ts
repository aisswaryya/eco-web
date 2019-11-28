import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { Petition } from "../model/petition.model";
import { PetitionService } from "../service/petition.service";
import { petitionDataService } from "../service/datastorage.service";

@Component({
  selector: 'app-view-one-petition',
  templateUrl: './view-one-petition.component.html',
  styleUrls: ['./view-one-petition.component.scss']
})
export class ViewOnePetitionComponent {

  petition: Petition = new Petition();
  petitionId: string;

  //Constructor with Router and Services
  constructor(
    private router: Router,
    private petitionService: PetitionService,
    private dataStore: petitionDataService
  ) { 
    this.petition = this.dataStore.getpetitionData(); 
    this.petitionId = this.dataStore.getpetitionId();
    console.log("Fetch Component "+ this.petitionId);
  } 

  //Delete function for petition
  deletepetition(): void {
    console.log("petition ID - "+ this.petitionId);
    this.petitionService.deletePetition(this.petition, this.petitionId)
      .subscribe( data => {
        alert(this.petition.title +" deleted successfully.");
        this.router.navigate(["view"]);
      })
  };

 //Update function for petition
  updatepetition(): void {
    console.log("update");
    console.log(this.petition);
    console.log(this.petitionId);
    //this.dataStore.setpetitionData(this.petition);
    this.dataStore.setpetitionId(this.petitionId);
    this.router.navigate(["update"]);
  }

  

}
