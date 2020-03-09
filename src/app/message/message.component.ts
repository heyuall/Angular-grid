import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor( private router: Router) {  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
