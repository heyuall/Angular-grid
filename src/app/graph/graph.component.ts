import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  chart:any  =  [];
  constructor(public _weather: WeatherService) { }
  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        
        let temp_max = res['list'].map((res: { main: { temp_max: any; }; }) => res.main.temp_max)
        let temp_min = res['list'].map((res: { main: { temp_min: any; }; }) => res.main.temp_min)
        let alldates = res['list'].map((res: { dt: any; }) => res.dt)

        let weatherDates = []
        alldates.forEach((res: number) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        })

        this.chart = new Chart('canvas2', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#ffcc00',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#3cba9f',
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
