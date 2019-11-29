import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { Petition } from "../model/petition.model";
import { PetitionService } from "../service/petition.service";
import { petitionDataService } from '../service/datastore.service';

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
    
    
  } 

  ngOnInit() {
    this.petitionId = this.dataStore.getPetitionId();
    this.petitionService.getbyIDPetition(this.petitionId)
      .subscribe( data => {
        console.log("Fetch Component "+ this.petitionId);
        this.petition = data;
      });
  };

  //Delete function for petition
  deletepetition( id: string): void {
    console.log("petition ID - "+ this.petitionId);
    this.petitionService.deletePetition( this.petitionId)
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
    this.dataStore.setPetitionId(this.petitionId);
    this.router.navigate(["update"]);
  }
}
