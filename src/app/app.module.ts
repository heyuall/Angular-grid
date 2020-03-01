import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

import { HttpClientModule, /* other http imports */ } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    Grid2Component,
    Grid3Component,
    MyBarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   MatToolbarModule, 
   MatCardModule,
   FlexLayoutModule,
   MatGridListModule,
   HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
