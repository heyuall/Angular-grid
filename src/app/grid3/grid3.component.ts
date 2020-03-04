import { Directive, Input, OnInit, Component } from '@angular/core';
import { MatGridList } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';


/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.css']
})
export class Grid3Component implements OnInit{
  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows:1 , color: 'lightgreen'},
     {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
  chart:any  =  [];
  constructor(public _weather: WeatherService) { }
  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        
        let temp_max = res['list'].map(res => res.main.temp_max)
        let temp_min = res['list'].map(res => res.main.temp_min)
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        })

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      })
    }
}