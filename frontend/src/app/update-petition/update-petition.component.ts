import { Component } from '@angular/core';
import { Petition } from '../model/petition.model';
import { PetitionService } from '../service/petition.service';
import { Router } from '@angular/router';
import { petitionDataService } from '../service/datastorage.service';

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
      this.petition = this.dataStore.getpetitionData(); 
      this.petitionId = this.dataStore.getpetitionId();
      console.log("Update Component "+ this.petitionId);
  }

  //Update petition function to call Express JS Create API
  updatePetition(): void {
    this.petitionService.updatePetition(this.petition,this.petitionId)
        .subscribe( data => {
          this.petition = new Petition();
          this.petitionId = "";
          //this.petitionData = data;
         //this.dataStore.setpetitionData(this.petition);
          alert("petition updated successfully.");
          this.router.navigate(["view"]);
        });

  };

}
