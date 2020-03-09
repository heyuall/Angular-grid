import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent}from './app.component';
import {MessageComponent} from './message/message.component';
import { MainGridComponent } from './main-grid/main-grid.component'

const routes : Routes =[
  {
    path: '',
    component: MainGridComponent  
  },
  {
    path: 'message',
    component:MessageComponent  
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
