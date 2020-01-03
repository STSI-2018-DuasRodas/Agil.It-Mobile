import { Component, OnInit } from '@angular/core';
import { ViewUtils } from 'src/app/utils/viewUtils';

@Component({
  selector: 'app-hour-worked',
  templateUrl: './hour-worked.page.html',
  styleUrls: ['./hour-worked.page.scss'],
})
export class HourWorkedPage implements OnInit {

  hoursAponted = [];  
  date        : string;
  initialHour : string;
  finalHour   : string;
  total       : string;
  interval    : string;

  constructor(private viewUtils : ViewUtils){
    this.initializingObject();
  }

  ngOnInit() {
  }
  
  confirmAppointments(){
    let hourAponted : any = {};
    hourAponted.Date        = new Date(this.date);
    hourAponted.InitialHour = new Date(this.initialHour);
    hourAponted.FinalHour   = new Date(this.finalHour);
    hourAponted.Interval    = new Date(this.interval);

    this.date        = '';
    this.initialHour = '';
    this.finalHour   = '';
    this.interval    = '';

    this.hoursAponted.push(hourAponted);
  }

  initializingObject(){
  }
}
