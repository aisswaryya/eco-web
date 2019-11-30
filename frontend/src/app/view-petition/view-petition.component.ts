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

  deletepetition( id: string, petition: Petition): void {
    console.log("petition ID - "+ id);
    this.petitionService.deletePetition(id)
      .subscribe( data => {
        this.petitionList = this.petitionList.filter(u => u !== petition);
        alert(id +" deleted successfully.");
      })
  };

  updatepetition(id: string): void {
    console.log("update");
    console.log(id);
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
