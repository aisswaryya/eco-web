import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Petition } from '../model/petition.model';
import { PetitionService } from '../service/petition.service';
import { petitionDataService } from '../service/datastore.service'
@Component({
  selector: 'app-view-petition',
  templateUrl: './view-petition.component.html',
  styleUrls: ['./view-petition.component.scss']
})
export class ViewPetitionComponent {
//test
//public name="pass";
//petition: Petition = new Petition();
  petitionList: Petition[];
  constructor(
    private router: Router, 
    private petitionService: PetitionService,
    private dataStore: petitionDataService
    ) {

  }

  ngOnInit() {
    this.petitionService.getPetition()
      .subscribe( data => {
        this.petitionList = data;
      });
  };

  deletepetition( id: string): void {
    console.log("petition ID - "+ id);
    this.petitionService.deletePetition( id)
      .subscribe( data => {
        alert(id +" deleted successfully.");
      })
  };

  updatepetition(petition: Petition, id: string): void {
    console.log("update");
    console.log(petition);
    console.log(id);
    //this.dataStore.setpetitionData(petition);
    this.dataStore.setPetitionId(id);
    this.router.navigate(["update"]);
  }

     getpetition(petition: Petition, id: string): void {
    console.log("View By Id");
    console.log(petition);
    console.log(id);
    //this.dataStore.setpetitionData(petition);
    this.dataStore.setPetitionId(id);
    this.router.navigate(["viewOne"]);
  }


}
