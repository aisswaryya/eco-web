import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// to fetch the pathparameter ID
import { Petition } from '../../model/petition.model';// traversing petition obj 
import { PetitionService } from '../../service/petition.service'; // to call HTTP Client
import { Router } from '@angular/router';// to navigate between various component
//import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-view-by-id-petition',
  templateUrl: './view-by-id-petition.component.html',
  styleUrls: ['./view-by-id-petition.component.scss']
})
export class ViewByIDPetitionComponent implements OnInit {
 public petition: Petition;
 public petitionId: String;

 //for dependency injection from other class
  constructor( private route: Router,private petitionService:PetitionService,private activateRoute:ActivatedRoute) { }
  // Initialize petition and retrieve petition object from Service
  ngOnInit() {
    this.getPetitionByID();
  }
 public getPetitionByID=()=>{
this.petitionId=this.activateRoute.snapshot.params['id'];
this.petitionService.getbyIDPetition(this.petitionId)
.subscribe(
  data=>{
    this.petition=data as Petition;
  }
);
}
  
}