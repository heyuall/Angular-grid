import { Directive, Input, OnInit, Component } from '@angular/core';
import { MatGridList } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

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
  constructor() { }

  ngOnInit() {
    
}
}