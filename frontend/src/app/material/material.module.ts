import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule, MatListModule, MatMenuModule,
         MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressBarModule, MatCheckboxModule,
         MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule , 
         MatDialogModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    MatDialogModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [
    MatDialogModule,
    MatDatepickerModule, 
    MatSnackBarModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
