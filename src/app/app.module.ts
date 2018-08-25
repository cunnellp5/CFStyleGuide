import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';
import { IconComponent } from './icon/icon.component';
import { FormsComponent } from './forms/forms.component';

const appRoutes: Routes = [
  { path: 'buttons', component: ButtonComponent },
  { path: 'lists', component: ListComponent },
  { path: 'icons', component: IconComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', component: ListViewComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListViewComponent,
    ButtonComponent,
    ListComponent,
    IconComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
