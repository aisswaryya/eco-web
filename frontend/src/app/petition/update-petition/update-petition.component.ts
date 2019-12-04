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
        description: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        mediapath: new FormControl('', [Validators.maxLength(100)]),
        email: new FormControl('', [Validators.required])
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
      this.petition.description = updatePetitionFormValue.description;
      this.petition.username = updatePetitionFormValue.name;
      this.petition.mediapath = updatePetitionFormValue.mediapath;
      this.petition.email = updatePetitionFormValue.email;
     
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
   
 
