import { Component, OnInit } from '@angular/core';
import { Petition } from '../../model/petition.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from '../../service/petition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-petition',
  templateUrl: './create-petition.component.html',
  styleUrls: ['./create-petition.component.scss']
})
export class CreatePetitionComponent implements OnInit {
    public createPetitionForm: FormGroup;
  
    constructor(private  router: Router,private location: Location, private petitionService: PetitionService, private dialog: MatDialog) { }
  
    ngOnInit() {
      this.createPetitionForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        mediapath: new FormControl('', [Validators.maxLength(100)]),
        email: new FormControl('', [Validators.required])
      });
    }
  
    public hasError = (controlName: string, errorName: string) => {
      return this.createPetitionForm.controls[controlName].hasError(errorName);
    }
  
    public onCancel = () => {
      this.location.back();
    }

    public createPetition = (petitionFormValue) => {
      if (this.createPetitionForm.valid) {
        this.executePetitionCreation(petitionFormValue);
      }
    }
      
    private executePetitionCreation = (petitionFormValue) => {
      let petition: Petition = {
        _id:'',
        title: petitionFormValue.title,
        description: petitionFormValue.description,
        username: petitionFormValue.username,
        mediapath: petitionFormValue.mediapath,
        email: petitionFormValue.email
      }
      console.log(petition);
      console.log(JSON.stringify(petition));
      this.petitionService.createPetition(petition)
        .subscribe( data => {
          alert("petition created successfully.");
          this.router.navigate(["petition/list"]);
        });

  
      }
  
  }
   
 
