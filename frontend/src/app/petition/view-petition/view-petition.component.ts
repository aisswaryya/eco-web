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

  public displayedColumns = ['title'];//To display table header
  public dataSource = new MatTableDataSource<Petition>(); 
  petitionList: Petition[];
  filterList: Petition[];
  
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
        this.dataSource.data = data as Petition[];
        this.filterList = data;
      });
      console.log(this.petitionList);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.filterList = this.petitionList.filter(elem =>  elem.category.includes(value));
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/petition/details/${id}`;
    this.router.navigate([url]);
  }

  

  


}
