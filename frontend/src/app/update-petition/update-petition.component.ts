import { Component } from '@angular/core';
import { Petition } from '../model/petition.model';
import { PetitionService } from '../service/petition.service';
import { Router } from '@angular/router';
import { petitionDataService } from '../service/datastore.service';

@Component({
  selector: 'app-update-petition',
  templateUrl: './update-petition.component.html',
  styleUrls: ['./update-petition.component.scss']
})
export class UpdatePetitionComponent {
  petition: Petition= new Petition();
  petitionId:string;
  //Constructor with Router and Services
  constructor(
     private  router: Router,
     private petitionService: PetitionService,
     private dataStore: petitionDataService)  { 
     this.petitionId = this.dataStore.getPetitionId();
     console.log("Update Component "+ this.petitionId);
     this.petitionService.getbyIDPetition(this.petitionId)
      .subscribe( data => {
        this.petition = data;
      });
      console.log("Update Petition "+ this.petition);
  }

  //Update petition function to call Express JS Create API
  updatePetition(): void {
    this.petitionService.updatePetition(this.petition,this.petitionId)
        .subscribe( data => {
          this.petition = new Petition();
          this.petitionId = "";
          alert("petition updated successfully.");
          this.router.navigate(["view"]);
        });

  };

}
