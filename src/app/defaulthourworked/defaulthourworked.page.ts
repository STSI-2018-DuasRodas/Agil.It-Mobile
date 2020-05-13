import { Component, OnInit } from '@angular/core';
import { ViewUtils } from 'src/app/utils/viewUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaulthourworked',
  templateUrl: './defaulthourworked.page.html',
  styleUrls: ['./defaulthourworked.page.scss'],
})
export class DefaultHourWorkedPage implements OnInit {
  public order : any = undefined;
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
    EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
      console.log(this.order);
    });
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
