import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // to fetch the pathparameter ID
import { Petition } from '../../model/petition.model'; // traversing petition obj
import { PetitionService } from '../../services/petition.service'; // to call HTTP Client
import { Router } from '@angular/router'; // to navigate between various component
import { Signature } from 'src/app/model/signature.model';
import { SignatureService } from 'src/app/services/signature.service';
import { AuthService } from 'src/app/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-by-id-petition',
  templateUrl: './view-by-id-petition.component.html',
  styleUrls: ['./view-by-id-petition.component.scss']
})
export class ViewByIDPetitionComponent implements OnInit {
 public petition: Petition;
 public signature: Signature =new Signature();
 public userId: String;
 public signed: boolean =  false;
 public petitionId: String;
 //for dependency injection from other class
  constructor( private snackBar: MatSnackBar, private signatureService:SignatureService,private router: Router, private auth: AuthService,private petitionService:PetitionService,private activateRoute:ActivatedRoute) { }
  // Initialize petition and retrieve petition object from Service
  ngOnInit() {
    this.getPetitionByID();
    this.userId = this.auth.userProfile.email;
    this.getSignedPetition();
  }
 public getPetitionByID=()=>{
this.petitionId = this.activateRoute.snapshot.params['id'];
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
  this.signature.email=this.auth.userProfile.email;
  this.signature.signed=true;
  console.log(this.signature);
  console.log("Signed by "+ this.signature.email);
      console.log(JSON.stringify(this.signature));
      this.signatureService.createSignature(this.signature)
        .subscribe( data => {
          this.openSnackBar("Thanks for signing", "Close");
          this.router.navigate(["/"]);
        });

}

   //alert using snackbar
   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  public getSignedPetition = () => {
    this.signatureService.getbyIDSignature(this.userId)
      .subscribe( data => {
        

        data.forEach((value) => {
          console.log("Petition ID"+value.petitionId);
              if(value.petitionId === this.petitionId)
              {
                this.signed = true;
              }
          });

        });
          
  }




}

