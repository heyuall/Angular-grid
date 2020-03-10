import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
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
import { NgMarqueeModule } from "ng-marquee-improved";
import { AppRoutingModule } from './/app-routing.module';
import { MessageComponent } from './message/message.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { CarouselModule,MDBBootstrapModule } from 'angular-bootstrap-md';




@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    Grid2Component,
    Grid3Component,
    MyBarChartComponent,
    GridPrimengComponent,
    CarouselComponent,
    GraphComponent,
    MessageComponent,
    MainGridComponent
   
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
   NgbModule,
   NgMarqueeModule,
   AppRoutingModule,
   CarouselModule,
   MDBBootstrapModule.forRoot()
   
   
   
  ],
  providers: [WeatherService,NgbCarouselConfig],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
