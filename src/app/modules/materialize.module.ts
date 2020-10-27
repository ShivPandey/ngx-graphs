import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// angular cdk
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { PlatformModule } from '@angular/cdk/platform';
import { LayoutModule } from '@angular/cdk/layout';

const modules = [
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatMenuModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatBottomSheetModule,
  // ckd
  ScrollingModule,
  CdkTableModule,
  PlatformModule,
  LayoutModule
];


@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'LLL',
        },
        display: {
          dateInput: 'DD-MM-YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LLL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      }
    }
  ]
})
export class MaterializeModule { }
