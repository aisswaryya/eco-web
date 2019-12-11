import { Component, OnInit } from '@angular/core';
import { Petition } from '../../model/petition.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from '../../services/petition.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-petition',
  templateUrl: './update-petition.component.html',
  styleUrls: ['./update-petition.component.scss']
})
export class UpdatePetitionComponent implements OnInit {
  public updatePetitionForm: FormGroup;
  public petition: Petition = new Petition();
  public petitionId: string
  /**
   *Creates an instance of UpdatePetitionComponent.
   * @param {MatSnackBar} snackBar
   * @param {Location} location
   * @param {PetitionService} petitionService
   * @param {Router} router
   * @param {MatDialog} dialog
   * @param {ActivatedRoute} activeRoute
   * @memberof UpdatePetitionComponent
   */
  constructor(private snackBar: MatSnackBar, private location: Location, private petitionService: PetitionService, private router: Router, private dialog: MatDialog, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.updatePetitionForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      target: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      shortDescription: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      briefDescription: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      mediapath: new FormControl('', [Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      createdby: new FormControl('', [Validators.required, Validators.maxLength(200)])

    });


    this.getPetitionById();
  }
  /**
   *
   *
   * @memberof UpdatePetitionComponent
   */
  public hasError = (controlName: string, errorName: string) => {
    return this.updatePetitionForm.controls[controlName].hasError(errorName);
  }
  /**
   *
   *
   * @memberof UpdatePetitionComponent
   */
  public onCancel = () => {
    this.location.back();
  }


  /**
   *
   *
   * @memberof UpdatePetitionComponent
   */
  public updatePetition = (updatePetitionFormValue) => {
    if (this.updatePetitionForm.valid) {
      this.executePetitionUpdation(updatePetitionFormValue);
    }
  }
  /**
   *
   *
   * @private
   * @memberof UpdatePetitionComponent
   */
  private getPetitionById = () => {
    this.petitionId = this.activeRoute.snapshot.params['id'];
    console.log("Petition ID - " + this.petitionId);
    this.petitionService.getbyIDPetition(this.petitionId)
      .subscribe(data => {
        this.petition = data as Petition;
        this.updatePetitionForm.patchValue(this.petition);
      });
  }

  /**
   *
   *
   * @private
   * @memberof UpdatePetitionComponent
   */
  private executePetitionUpdation = (updatePetitionFormValue) => {
    console.log("Petition Title - " + updatePetitionFormValue.title);
    this.petition.title = updatePetitionFormValue.title;
    this.petition.target = updatePetitionFormValue.target;
    this.petition.shortDescription = updatePetitionFormValue.shortDescription;
    this.petition.briefDescription = updatePetitionFormValue.briefDescription;
    this.petition.mediapath = updatePetitionFormValue.mediapath;
    this.petition.email = updatePetitionFormValue.email;
    this.petition.category = updatePetitionFormValue.category;
    this.petition.createdby = updatePetitionFormValue.createdby;
    console.log(this.petition);
    console.log(this.petitionId);
    console.log(JSON.stringify(this.petition));
    this.petitionService.updatePetition(this.petition, this.petitionId)
      .subscribe(data => {
        this.openSnackBar(this.petition.title + " updated successfully.", "Close");
        this.router.navigate(["petition/list"]);
      });

  }

  //alert using snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}
