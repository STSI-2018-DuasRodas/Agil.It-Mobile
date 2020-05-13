import { Component, OnInit } from '@angular/core';
import { ViewUtils } from '../utils/viewUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-listhourworked',
  templateUrl: './listhourworked.page.html',
  styleUrls: ['./listhourworked.page.scss'],
})
export class ListHourworkedPage implements OnInit {
  public order : any = undefined;
  public hoursAponted = [];  
  public date        : string;
  public initialHour : string;
  public finalHour   : string;
  public total       : string;
  public interval    : string;

  constructor(private viewUtils : ViewUtils){
  }

  ngOnInit() {
    EventEmitterService.get('listOrderData').subscribe((data) => {
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
}