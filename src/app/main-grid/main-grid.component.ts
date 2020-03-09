import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
  }

}
