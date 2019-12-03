import { Component, OnInit } from '@angular/core';
import { Petition } from '../../model/petition.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-petition',
  templateUrl: './create-petition.component.html',
  styleUrls: ['./create-petition.component.scss']
})
export class CreatePetitionComponent implements OnInit {
     public createPetitionForm: FormGroup;
    private dialogConfig;
  
    constructor(private location: Location,  private dialog: MatDialog) { }
  
    ngOnInit() {
      this.createPetitionForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        mediapath: new FormControl('', [Validators.maxLength(100)]),
        email: new FormControl('', [Validators.required])
      });
  
      this.dialogConfig = {
        height: '200px',
        width: '400px',
        disableClose: true,
        data: {}
      }
    }
  
    public hasError = (controlName: string, errorName: string) => {
      return this.createPetitionForm.controls[controlName].hasError(errorName);
    }
  
    public onCancel = () => {
      this.location.back();
    }
  
      
    // private executeOwnerCreation = (ownerFormValue) => {
    //   let owner: OwnerForCreation = {
    //     name: ownerFormValue.name,
    //     dateOfBirth: ownerFormValue.dateOfBirth,
    //     address: ownerFormValue.address
    //   }
  
    //   let apiUrl = 'api/owner';
    //   this.repository.create(apiUrl, owner)
    //     .subscribe(res => {
    //       let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
  
    //       //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    //       dialogRef.afterClosed()
    //         .subscribe(result => {
    //           this.location.back();
    //         });
    //     },
    //       (error => {
    //         this.errorService.dialogConfig = { ...this.dialogConfig };
    //         this.errorService.handleError(error);
    //       })
    //     )
    // }
  
  }
   
 
