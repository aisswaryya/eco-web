import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Petition } from '../../model/petition.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from '../../service/petition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-by-id-petition',
  templateUrl: './view-by-id-petition.component.html',
  styleUrls: ['./view-by-id-petition.component.scss']
})
export class ViewByIDPetitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
}