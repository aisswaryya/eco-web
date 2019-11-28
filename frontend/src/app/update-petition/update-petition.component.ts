import { Component } from '@angular/core';
import { Petition } from '../model/petition.model';
import { PetitionService } from '../service/petition.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-petition',
  templateUrl: './update-petition.component.html',
  styleUrls: ['./update-petition.component.scss']
})
export class UpdatePetitionComponent implements OnInit {
  petition: Petition= new Petition();
  petitionId:string;
  //Constructor with Router and Services
  constructor(
     private  router: Router,
     private petitionService: PetitionService)  { 
  }

  //Update petition function to call Express JS Create API
  updatePetition(): void {
    this.petitionService.updatePetition(this.petition,this.petitionId)
        .subscribe( data => {
          this.petition = new Petition();
          this.petitionId = "";
   //this.dataStore.setTodoData(this.todo);
          alert("petition updated successfully.");
          this.router.navigate(["view"]);
        });

  };


  ngOnInit() {
  }

}
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
