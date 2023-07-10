import { NgModule } from '@angular/core';
import { MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
      imports: [
            MatButtonModule, MatCheckboxModule, MatRadioModule, MatCardModule, MatInputModule, MatIconModule, MatAutocompleteModule, MatProgressSpinnerModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatListModule, MatDialogModule, MatTooltipModule, MatSelectModule, MatExpansionModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule, MatSlideToggleModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule, MatSliderModule, MatButtonToggleModule, MatChipsModule, MatProgressBarModule, FormsModule, ReactiveFormsModule, NgxMatSelectSearchModule
      ],
      exports: [
            MatButtonModule, MatCheckboxModule, MatRadioModule, MatCardModule, MatInputModule, MatIconModule, MatAutocompleteModule, MatProgressSpinnerModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatListModule, MatDialogModule, MatTooltipModule, MatSelectModule, MatExpansionModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule, MatSlideToggleModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule, MatSliderModule, MatButtonToggleModule, MatChipsModule, MatProgressBarModule, FormsModule, ReactiveFormsModule, NgxMatSelectSearchModule
      ],
      providers: [
            { provide: MAT_DATE_LOCALE, useValue: 'es-MX' }
      ]
})
export class AppMaterialModule {}
