import { Component, OnInit } from '@angular/core';
import { Petition } from '../../model/petition.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from '../../services/petition.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/auth.service';

/**
 *
 *
 * @export
 * @class CreatePetitionComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-create-petition',
  templateUrl: './create-petition.component.html',
  styleUrls: ['./create-petition.component.scss']
})
export class CreatePetitionComponent implements OnInit {
  public createPetitionForm: FormGroup;

  /**
   *Creates an instance of CreatePetitionComponent.
   * @param {MatSnackBar} snackBar
   * @param {Router} router
   * @param {Location} location
   * @param {PetitionService} petitionService
   * @param {MatDialog} dialog
   * @memberof CreatePetitionComponent
   */
  constructor(private router: Router,
    private snackBar: MatSnackBar,
    private location: Location,
    private petitionService: PetitionService,
    private dialog: MatDialog,
    private auth: AuthService) { }

  ngOnInit() {
    this.createPetitionForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      target: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      shortdescription: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      briefdescription: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      mediapath: new FormControl('', [Validators.maxLength(200)]),
      email: new FormControl(this.auth.userProfile.email, [Validators.required, Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      createdby: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }
  /**
   *
   *
   * @param {string} message
   * @param {string} action
   * @memberof CreatePetitionComponent
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   *
   *
   * @memberof CreatePetitionComponent
   */
  public hasError = (controlName: string, errorName: string) => {
    return this.createPetitionForm.controls[controlName].hasError(errorName);
  }
  /**
   *
   *
   * @memberof CreatePetitionComponent
   */
  public onCancel = () => {
    this.location.back();
  }
  /**
   *
   *
   * @memberof CreatePetitionComponent
   */
  public createPetition = (petitionFormValue) => {
    if (this.createPetitionForm.valid) {
      this.executePetitionCreation(petitionFormValue);
    }

  }

  /**
   *
   *function to create petition
   * @private
   * @memberof CreatePetitionComponent
   */
  private executePetitionCreation = (petitionFormValue) => {
    let petition: Petition = {
      _id: '',
      title: petitionFormValue.title,
      target: petitionFormValue.target,
      shortDescription: petitionFormValue.shortdescription,
      briefDescription: petitionFormValue.briefdescription,
      mediapath: petitionFormValue.mediapath,
      email: petitionFormValue.email,
      category: petitionFormValue.category,
      createdby: petitionFormValue.createdby,
      victory: false
    }
    console.log(petition);
    console.log(JSON.stringify(petition));
    this.petitionService.createPetition(petition)
      .subscribe(data => {
        this.openSnackBar(petition._id + " petition created successfully.", "Close");
        this.router.navigate(["/petition/profile"]);
      });

  }

}








