import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datebar',
  templateUrl: './datebar.component.html',
  styleUrls: ['./datebar.component.scss']
})
export class DatebarComponent implements OnInit {
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  
  
  constructor(){
    setInterval(() => {
      this.todayDate = new Date()
    }, 1000)
  }

  ngOnInit(): void {

  }

}
