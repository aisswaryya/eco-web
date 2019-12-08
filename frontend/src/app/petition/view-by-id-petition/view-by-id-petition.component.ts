import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// to fetch the pathparameter ID
import { Petition } from '../../model/petition.model';// traversing petition obj 
import { PetitionService } from '../../service/petition.service'; // to call HTTP Client
import { Router } from '@angular/router';// to navigate between various component
import { Signature } from 'src/app/model/signature.model';
import { SignatureService } from 'src/app/service/signature.service';

@Component({
  selector: 'app-view-by-id-petition',
  templateUrl: './view-by-id-petition.component.html',
  styleUrls: ['./view-by-id-petition.component.scss']
})
export class ViewByIDPetitionComponent implements OnInit {
 public petition: Petition;
 public signature: Signature =new Signature();
 
 public petitionId: String;
 //for dependency injection from other class
  constructor( private signatureService:SignatureService,private router: Router,private petitionService:PetitionService,private activateRoute:ActivatedRoute) { }
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
// Call create petition API
  
public signPetition=()=>{
  this.signature.name = this.petition.createdby;
  this.signature.petitionId = this.petition._id;
  this.signature.email=this.petition.email;
  this.signature.signed=true;
  console.log(this.signature);
      console.log(JSON.stringify(this.signature));
      this.signatureService.createSignature(this.signature)
        .subscribe( data => {
          alert("petition signed successfully.");
          this.router.navigate(["/"]);
        });

}
  
}