import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewUtils } from 'src/app/utils/viewUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaulthourworked',
  templateUrl: './defaulthourworked.page.html',
  styleUrls: ['./defaulthourworked.page.scss'],
})
export class DefaultHourWorkedPage implements OnInit, OnDestroy {
  public order : any = undefined;
  hoursAponted = [];  
  date        : string;
  initialHour : string;
  finalHour   : string;
  total       : string;
  interval    : string;
  public subscribe : any;

  constructor(private viewUtils : ViewUtils){
    this.initializingObject();
  }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
    });
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
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
