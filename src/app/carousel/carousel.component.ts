import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {

  messages : Array <any> = ['Bonjour',"hello !!" ];
  //images = ['./assets/images/1.jpg','./assets/images/2.jpg','./assets/images/3.jpg'];
}


