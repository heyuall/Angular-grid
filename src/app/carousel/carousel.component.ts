import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {

  messages : string[] = ['message1','message2','message3'];
  //images = ['./assets/images/1.jpg','./assets/images/2.jpg','./assets/images/3.jpg'];
}


