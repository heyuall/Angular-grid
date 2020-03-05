import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { GridPrimengComponent } from './grid-primeng/grid-primeng.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GraphComponent } from './graph/graph.component';
// import {CarouselModule} from 'primeng/carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig}from'@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    Grid2Component,
    Grid3Component,
    MyBarChartComponent,
    GridPrimengComponent,
    CarouselComponent,
    GraphComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
   MatToolbarModule, 
   MatCardModule,
   FlexLayoutModule,
   MatGridListModule,
   HttpClientModule,
   NgbModule
  ],
  providers: [WeatherService,NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
