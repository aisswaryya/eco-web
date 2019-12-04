import { PetitionService } from './../../service/petition.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Petition } from '../../model/petition.model';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-petition',
  templateUrl: './view-petition.component.html',
  styleUrls: ['./view-petition.component.scss']
})
export class ViewPetitionComponent implements OnInit,AfterViewInit {

  public displayedColumns = ['title', 'description', 'mediapath', 'email', 'username'];
  public dataSource = new MatTableDataSource<Petition>(); 
  petitionList: Petition[];

  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private petitionService: PetitionService, private errorService: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.getAllPetition();
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

  public getAllPetition = () => {
    this.petitionService.getPetition()
      .subscribe( data => {
        this.petitionList = data;
      });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/petition/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/petition/update/${id}`;
    this.router.navigate([url]);
  }

  public deletepetition(petition: Petition, id: string): void {
    console.log("petition ID - "+ id);
    this.petitionService.deletePetition(id)
      .subscribe( data => {
        this.petitionList = this.petitionList.filter(u => u !== petition);
        alert(petition.title +" deleted successfully.");
      })
  };


}
