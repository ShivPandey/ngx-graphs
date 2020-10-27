import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'src/app/modules/materialize.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './public/bar-chart/bar-chart.component';
import { PiiPieComponent } from './public/pii-pie/pii-pie.component';
import { AdaPieComponent } from './public/ada-pie/ada-pie.component';
import { AdvancePieComponent } from './public/advance-pie/advance-pie.component';
import { DataDialogComponent } from './public/data-dialog/data-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    BarChartComponent,
    PiiPieComponent,
    AdaPieComponent,
    AdvancePieComponent,
    DataDialogComponent
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
