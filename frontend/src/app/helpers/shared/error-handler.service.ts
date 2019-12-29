import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage = '';
  public dialogConfig;

  constructor(private router: Router, private dialog: MatDialog) { }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      this.handle500Error(error);
    }
    if (error.status === 404) {
      this.handle404Error(error);
    }
  }

  private handle500Error(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }

  private handle404Error(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }

  private createErrorMessage(error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
