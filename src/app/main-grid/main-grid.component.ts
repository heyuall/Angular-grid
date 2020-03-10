import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { MessageDataService } from '../message-data.service';


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
value : string ="flash";
messages : any;

  constructor(private _data: MessageDataService,private route: ActivatedRoute,private router: Router) {
    
  }

  ngOnInit() {
    this._data.message.subscribe(res => this.messages = res);
  }
  
}
