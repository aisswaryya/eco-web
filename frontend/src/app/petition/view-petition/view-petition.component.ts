import { PetitionService } from '../../services/petition.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Petition } from '../../model/petition.model';
import { ErrorHandlerService } from '../../helpers/shared/error-handler.service';
import { Router } from '@angular/router';
import { SignatureService } from 'src/app/services/signature.service';

@Component({
  selector: 'app-view-petition',
  templateUrl: './view-petition.component.html',
  styleUrls: ['./view-petition.component.scss']
})
export class ViewPetitionComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['title'];//To display table header
  public dataSource = new MatTableDataSource<Petition>();
  petitionList: Petition[];
  filterList: Petition[];
  myArray = new Array();
  result = '';

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  /**
   *Creates an instance of ViewPetitionComponent.
   * @param {PetitionService} petitionService
   * @param {SignatureService} signatureService
   * @param {ErrorHandlerService} errorService
   * @param {Router} router
   * @memberof ViewPetitionComponent
   */
  constructor(private petitionService: PetitionService, private signatureService: SignatureService, private errorService: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.getAllPetition();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  /**
   *
   *
   * @memberof ViewPetitionComponent
   */
  public getAllPetition = () => {
    this.petitionService.getPetition()
      .subscribe(data => {
        this.petitionList = data;
        this.dataSource.data = data as Petition[];
        this.filterList = data;

        data.forEach((value) => {
          console.log("ID" + value._id);
          this.signatureService.getbyEmailIDSignatureCount(value._id)
            .subscribe(data => {
              console.log(data);
              this.result = JSON.parse(JSON.stringify(data));
              console.log(this.result["count"]);

              this.myArray.push(this.result["count"]);
              console.log("Response - Count " + JSON.stringify(this.myArray));
            });

        });
      });
    console.log(this.petitionList);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.filterList = this.petitionList.filter(elem => elem.category.includes(value));
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/petition/details/${id}`;
    this.router.navigate([url]);
  }


  



}
