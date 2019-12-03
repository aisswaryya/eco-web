import { Component, OnInit } from '@angular/core';
import { Petition } from '../../model/petition.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-petition',
  templateUrl: './update-petition.component.html',
  styleUrls: ['./update-petition.component.scss']
})
export class UpdatePetitionComponent implements OnInit {
  public updatePetitionForm: FormGroup;
  private dialogConfig;
  public Petition: Petition;  
  
    constructor(private location: Location,  private dialog: MatDialog) { }
  
    ngOnInit() {
      this.updatePetitionForm = new FormGroup({
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
     // this.getPetitionById();
    }
  
    public hasError = (controlName: string, errorName: string) => {
      return this.updatePetitionForm.controls[controlName].hasError(errorName);
    }
  
    public onCancel = () => {
      this.location.back();
    }
  
      
    // private getOwnerById = () => {
    //   let ownerId: string = this.activeRoute.snapshot.params['id'];
        
    //   let ownerByIdUrl: string = `api/owner/${ownerId}`;
     
    //   this.repository.getData(ownerByIdUrl)
    //     .subscribe(res => {
    //       this.owner = res as Owner;
    //       this.ownerForm.patchValue(this.owner);
    //     },
    //     (error) => {
    //       this.errorService.dialogConfig = this.dialogConfig;
    //       this.errorService.handleError(error);
    //     })
    // }
  
    // public updateOwner = (ownerFormValue) => {
    //   if (this.ownerForm.valid) {
    //     this.executeOwnerUpdate(ownerFormValue);
    //   }
    // }
  
    // private executeOwnerUpdate = (ownerFormValue) => {
   
    //   this.owner.name = ownerFormValue.name;
    //   this.owner.dateOfBirth = ownerFormValue.dateOfBirth;
    //   this.owner.address = ownerFormValue.address;
     
    //   let apiUrl = `api/owner/${this.owner.id}`;
    //   this.repository.update(apiUrl, this.owner)
    //     .subscribe(res => {
    //       let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          
    //       dialogRef.afterClosed()
    //         .subscribe(result => {
    //           this.location.back();
    //         });
    //     },
    //     (error => {
    //       this.errorService.dialogConfig = this.dialogConfig;
    //       this.errorService.handleError(error);
    //     })
    //   )
    // }
  }
   
 
