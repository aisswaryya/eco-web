import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// to fetch the pathparameter ID
import { Petition } from '../../model/petition.model';// traversing petition obj
import { PetitionService } from '../../services/petition.service'; // to call HTTP Client
import { Router } from '@angular/router';// to navigate between various component
import { Signature } from 'src/app/model/signature.model';
import { SignatureService } from 'src/app/services/signature.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-petition',
  templateUrl: './manage-petition.component.html',
  styleUrls: ['./manage-petition.component.scss']
})
export class ManagePetitionComponent implements OnInit {
  public petition: Petition;
  public signature: Signature = new Signature();
  public petitionId: String;

  //for dependency injection from other class
  constructor(private signatureService: SignatureService,
    private snackBar: MatSnackBar,
    private router: Router,
    private petitionService: PetitionService,
    private activateRoute: ActivatedRoute) { }

  // Initialize petition and retrieve petition object from Service
  ngOnInit() {
    this.getPetitionByID();
  }
  public getPetitionByID = () => {
    this.petitionId = this.activateRoute.snapshot.params['id'];
    this.petitionService.getbyIDPetition(this.petitionId)
      .subscribe(
        data => {
          this.petition = data as Petition;
        }
      );
  }
  // function for delete petition 
  public deletePetition(): void {
    console.log("petition ID - " + this.petitionId);
    this.petitionService.deletePetition(this.petitionId)
      .subscribe(data => {
        this.openSnackBar(this.petition.title + " deleted successfully.", "Close");
        this.router.navigate(['petition/list']);
      })
  }

  // function to update petition
  public redirectToUpdate = () => {
    let url: string = `/petition/update/${this.petitionId}`;
    this.router.navigate([url]);
  }

  //alert using snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

}
