import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // to fetch the pathparameter ID
import { Petition } from '../../model/petition.model'; // traversing petition obj
import { PetitionService } from '../../services/petition.service'; // to call HTTP Client
import { Router } from '@angular/router'; // to navigate between various component
import { Signature } from 'src/app/model/signature.model';
import { SignatureService } from 'src/app/services/signature.service';


@Component({
  selector: 'app-manage-petition',
  templateUrl: './manage-petition.component.html',
  styleUrls: ['./manage-petition.component.scss']
})
export class ManagePetitionComponent implements OnInit {
  public petition: Petition;
  public signature: Signature = new Signature();

  public petitionId: String;
  // for dependency injection from other class
   constructor( private signatureService: SignatureService, private router: Router, private petitionService: PetitionService, private activateRoute: ActivatedRoute) { }
   // Initialize petition and retrieve petition object from Service
   ngOnInit() {
     this.getPetitionByID();
   }
  public getPetitionByID = () => {
 this.petitionId = this.activateRoute.snapshot.params.id;
 this.petitionService.getbyIDPetition(this.petitionId)
 .subscribe(
   data => {
     this.petition = data as Petition;
   }
 );
 }
 public deletePetition(): void {
  console.log('petition ID - ' + this.petitionId);
  this.petitionService.deletePetition(this.petitionId)
    .subscribe( data => {
      alert(this.petition.title + ' deleted successfully.');
      this.router.navigate(['petition/list']);
    });
}

public redirectToUpdate = () => {
  const url = `/petition/update/${this.petitionId}`;
  this.router.navigate([url]);
}

 }
