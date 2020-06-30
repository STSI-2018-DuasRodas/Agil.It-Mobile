import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewUtils } from 'src/app/utils/viewUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';

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

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder){
    this.initializingObject();
  }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
      this.loadHourWorked();
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }  

  loadHourWorked(){
    const userData : any = JSON.parse(window.localStorage.getItem("user"));

    for (const maintener of this.order.maintenanceWorker){
      if (AgilitUtils.isNullOrUndefined(maintener.user) || AgilitUtils.isNullOrUndefined(maintener.workedTime)){
        continue;
      }

      if (!AgilitUtils.equals(userData.data.id, maintener.user.id)){
        continue;
      }

      for (const workedtime of maintener.workedTime){
        let hourAponted : any = {};

        hourAponted.Id          = workedtime.id;
        hourAponted.Date        = new Date(workedtime.createdAt);
        hourAponted.InitialHour = new Date(workedtime.startedWork);
        hourAponted.FinalHour   = new Date(workedtime.finishedWork);
        hourAponted.Interval    = AgilitUtils.convertMinuteToHour(workedtime.intervalTime);
  
        this.hoursAponted.push(hourAponted);
      }      
    }    
  }
  
  // confirmAppointments(){
  //   let hourAponted : any = {};
  //   hourAponted.Date        = new Date(this.date);
  //   hourAponted.InitialHour = new Date(this.initialHour);
  //   hourAponted.FinalHour   = new Date(this.finalHour);
  //   hourAponted.Interval    = new Date(this.interval);

  //   this.date        = '';
  //   this.initialHour = '';
  //   this.finalHour   = '';
  //   this.interval    = '';

  //   this.hoursAponted.push(hourAponted);
  // }

  async confirmAppointments(){
    let hourAponted : any = {};
    hourAponted.Date        = new Date(this.date);
    hourAponted.InitialHour = new Date(this.initialHour);
    hourAponted.FinalHour   = new Date(this.finalHour);
    hourAponted.Interval    = new Date(this.interval);

    hourAponted.Interval = AgilitUtils.convertHourToMinutes(hourAponted.Interval.getHours() + ':' + hourAponted.Interval.getMinutes());

    const userLogged = AgilitUtils.getMaintenerByLoggedUser(this.order.maintenanceWorker);

    if (AgilitUtils.isNullOrUndefined(userLogged)){
      return;
    }

    const workedTime = {
      maintenanceWorker: {
        id: userLogged.id
      },
      description : "Trabalhado na manutenção das 7:24 até às 7:24.",
      startedWork : hourAponted.InitialHour.toISOString(),
      finishedWork: hourAponted.FinalHour.toISOString(),
      intervalTime: hourAponted.Interval
    }

    await this.viewUtils.showProgressBar();
    await this.restOrder.createHourWorkedTime(workedTime).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }

        this.createHourWorkedTimeSuccess(response);
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );    
  }

  createHourWorkedTimeSuccess(response){
    let hourAponted : any = {};
    hourAponted.Id          = response.id;
    hourAponted.Date        = new Date(response.createdAt);
    hourAponted.InitialHour = new Date(response.startedWork);
    hourAponted.FinalHour   = new Date(response.finishedWork);
    hourAponted.Interval    = AgilitUtils.convertMinuteToHour(response.intervalTime);

    this.date        = '';
    this.initialHour = '';
    this.finalHour   = '';
    this.interval    = '';

    this.hoursAponted.push(hourAponted);
  }

  async deleteHourWorked(item){
    const userLogged = AgilitUtils.getMaintenerByLoggedUser(this.order.maintenanceWorker);

    if (AgilitUtils.isNullOrUndefined(userLogged)){
      return;
    }

    let hourWorked = {
      id : item.Id,
      maintenanceWorker: userLogged.id    
    }

    await this.viewUtils.showProgressBar();
    await this.restOrder.deleteHourWorkedTime(hourWorked).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }        
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );   
  }

  editHourWorked(item){    
    this.date = item.Date.getMonth() + '-' + item.Date.getDate() + '-' + item.Date.getFullYear();    
    this.initialHour = ("0" + item.InitialHour.getHours()).slice(-2) + ':' + ("0" + item.InitialHour.getMinutes()).slice(-2);    
    this.finalHour   = ("0" + item.FinalHour.getHours()).slice(-2) + ':' + ("0" + item.FinalHour.getMinutes()).slice(-2);;    
    this.interval    = item.Interval;
  }

  public jsDateToPascal(date : Date) : string {
    let numberDay = date.getDate();
    let stringDay : string = String(numberDay);

    if (numberDay < 10){
      stringDay = '0' + numberDay;
    }

    return ("0" + date.getDate()).slice(-2) + '-' + ("0" + Number(date.getMonth() + 1).toString()).slice(-2) + '-' + date.getFullYear().toString()    
  }

  initializingObject(){
  }
}
