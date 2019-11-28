import { Component } from '@angular/core';
import { Petition } from '../model/petition.model';
import { PetitionService } from '../service/petition.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-petition',
  templateUrl: './create-petition.component.html',
  styleUrls: ['./create-petition.component.scss']
})
export class CreatePetitionComponent  {
  petition: Petition= new Petition();
  //Constructor with Router and Services
  constructor(private  router: Router, private petitionService: PetitionService)  { 

  }
  //Create petition function to call Express JS Create API
  createPetition(): void {
    this.petitionService.createPetition(this.petition)
        .subscribe( data => {
          alert("petition created successfully.");
          this.router.navigate(["view"]);
        });

  };


  
}

