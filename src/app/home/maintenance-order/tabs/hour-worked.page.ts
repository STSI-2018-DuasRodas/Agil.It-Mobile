import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour-worked',
  templateUrl: './hour-worked.page.html',
  styleUrls: ['./hour-worked.page.scss'],
})
export class HourWorkedPage implements OnInit {

  hoursAponted = [{}];  
  hourAponted = {"Date": "", "InitialHour": "", "FinalHour": "", "Total": "", "Interval": ""};

  ngOnInit() {
  }

  teste() {
    console.log(this.testando);
  }
}
