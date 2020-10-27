import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'src/app/modules/materialize.module';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PublicComponent } from './public/public.component';
import { BarChartComponent } from './public/bar-chart/bar-chart.component';
import { PiiPieChartComponent } from './public/pii-pie-chart/pii-pie-chart.component';
import { PiiAdaChartComponent } from './public/pii-ada-chart/pii-ada-chart.component';
import { AdvancePieChartComponent } from './public/advance-pie-chart/advance-pie-chart.component';
import { DataDialogComponent } from './public/data-dialog/data-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    BarChartComponent,
    PiiPieChartComponent,
    PiiAdaChartComponent,
    AdvancePieChartComponent,
    DataDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterializeModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
