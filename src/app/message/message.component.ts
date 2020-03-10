import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  messageCount: number;
  btnText: string = 'Ajouter';
  messageText: string; 
  messages = [];


  constructor( private router: Router) {  }

  sendMeHome() {
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.messageCount = this.messages.length;
  }

  addItem() {
    this.messages.push(this.messageText);
    this.messageText = '';
    this.messageCount = this.messages.length;
  }

}
