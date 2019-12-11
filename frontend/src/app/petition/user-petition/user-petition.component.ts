import { PetitionService } from './../../services/petition.service';
import { SignatureService } from './../../services/signature.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Petition } from '../../model/petition.model';
import { Signature } from '../../model/signature.model';
import { ErrorHandlerService } from '../../helpers/shared/error-handler.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-petition',
  templateUrl: './user-petition.component.html',
  styleUrls: ['./user-petition.component.scss']
})
export class UserPetitionComponent implements OnInit {

  public displayedColumns = ['title'];//To display table header
  public dataSource = new MatTableDataSource<Petition>();
  public signedSource = new MatTableDataSource<Petition>();
  petitionList: any[] = [];
  signatureList: Signature[] = [];
  myArray: Signature[] = new Array<Signature>();
  signedPetitionList: Petition[] = new Array<Petition>();
  petition: Petition;
  email: String = "";

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   *Creates an instance of UserPetitionComponent.
   * @param {PetitionService} petitionService
   * @param {AuthService} auth
   * @param {SignatureService} signatureService
   * @param {ErrorHandlerService} errorService
   * @param {Router} router
   * @memberof UserPetitionComponent
   */
  constructor(private petitionService: PetitionService, private auth: AuthService, private signatureService: SignatureService, private errorService: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.email = this.auth.userProfile.email;
    this.getbyEmailPetition();
    this.getByEmailSignature();
    this.getSignedPetitions();

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.signedSource.sort = this.sort;
    this.signedSource.paginator = this.paginator;
  }
  /**
   *
   *fetch petition using email
   * @memberof UserPetitionComponent
   */
  public getbyEmailPetition = () => {
    console.log("Authorized Email " + this.email);
    this.petitionService.getbyEmailPetition(this.email)
      .subscribe(data => {
        this.petitionList = data;
        this.dataSource.data = data as Petition[];
      });
    console.log(this.petitionList);
  }
  /**
   *
   *get signature using emailId
   * @memberof UserPetitionComponent
   */
  public getByEmailSignature = () => {
    this.signatureService.getbyIDSignature(this.email)
      .subscribe(data => {

        data.forEach((value) => {
          console.log(value);
          this.myArray.push(value);
        });
        console.log("List " + JSON.stringify(this.myArray));

        this.myArray.forEach((value) => {
          console.log(value.petitionId);

          this.petitionService.getbyIDPetition(value.petitionId)
            .subscribe(
              data => {
                console.log("Response - Petition List " + JSON.stringify(this.signedPetitionList));
                console.log("Response " + data.email);
                this.signedPetitionList.push(data);
                this.signedSource.data = this.signedPetitionList;
              }
            );

        });
        this.getSignedPetitions();
      });


  }

  /**
   *
   *fetch petition signed
   * @memberof UserPetitionComponent
   */
  public getSignedPetitions = () => {
    console.log("Petition List Final " + JSON.stringify(this.signedPetitionList));
    this.signedSource.data = this.signedPetitionList;
  }

  /**
   *
   *page redirect
   * @memberof UserPetitionComponent
   */
  public redirectToManage = (id: string) => {
    let url: string = `/petition/manage/${id}`;
    this.router.navigate([url]);
  }
  /**
   *
   *redirect to show  petition
   * @memberof UserPetitionComponent
   */
  public redirectToDetails = (id: string) => {
    let url: string = `/petition/details/${id}`;
    this.router.navigate([url]);
  }

}
