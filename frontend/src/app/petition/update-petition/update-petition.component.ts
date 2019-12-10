import { Component, OnInit } from '@angular/core';
import { Petition } from '../../model/petition.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from '../../service/petition.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-petition',
  templateUrl: './update-petition.component.html',
  styleUrls: ['./update-petition.component.scss']
})
export class UpdatePetitionComponent implements OnInit {
  public updatePetitionForm: FormGroup;
  public petition: Petition = new Petition  ();
  public petitionId: string 
  
    constructor(private location: Location,private petitionService: PetitionService,private  router: Router, private dialog: MatDialog,private activeRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.updatePetitionForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        target: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        shortDescription: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        briefDescription: new FormControl('', [Validators.required, Validators.maxLength(400)]),
        mediapath: new FormControl('', [Validators.maxLength(60)]),
        email: new FormControl('', [Validators.required,Validators.maxLength(30)]),
        category:new FormControl('', [Validators.required,Validators.maxLength(30)]),
        createdby:new FormControl('', [Validators.required,Validators.maxLength(30)])

      });
       
      
     this.getPetitionById();
    }
  
    public hasError = (controlName: string, errorName: string) => {
      return this.updatePetitionForm.controls[controlName].hasError(errorName);
    }
  
    public onCancel = () => {
      this.location.back();
    }
  
      
    
    public updatePetition = (updatePetitionFormValue) => {
      if (this.updatePetitionForm.valid) {
        this.executePetitionUpdation(updatePetitionFormValue);
      }
    }

    private getPetitionById = () => {
      this.petitionId = this.activeRoute.snapshot.params['id'];
      console.log("Petition ID - "+ this.petitionId);
      this.petitionService.getbyIDPetition(this.petitionId)
      .subscribe( data => {
        this.petition = data as Petition;
        this.updatePetitionForm.patchValue(this.petition);
      });
    }
         
    
    private executePetitionUpdation = (updatePetitionFormValue) => {
      console.log("Petition Title - "+ updatePetitionFormValue.title);
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
        .subscribe( data => {
          alert("petition updated successfully.");
          this.router.navigate(["petition/list"]);
        });

    }
  }
  