import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { ViewUtils } from '../utils/viewUtils';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-routehourworked',
  templateUrl: './routehourworked.page.html',
  styleUrls: ['./routehourworked.page.scss'],
})
export class RouteHourworkedPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public order        : any     = undefined;
  public hoursAponted : any     = [];  
  public index        : number;
  public id           : string;
  public description  : string;
  public date         : string;
  public initialHour  : string;
  public finalHour    : string;
  public total        : string;
  public interval     : string;
  public subscribe    : any;

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder) { }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('routeOrderData').subscribe((data) => {
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

      if (!AgilitUtils.equals(userData.id, maintener.user.id)){
        continue;
      }

      for (const workedtime of maintener.workedTime){
        let hourAponted : any = {};

        hourAponted.Id          = workedtime.id;
        hourAponted.Date        = new Date(workedtime.startedWork);
        hourAponted.InitialHour = new Date(workedtime.startedWork);
        hourAponted.FinalHour   = new Date(workedtime.finishedWork);
        hourAponted.Interval    = AgilitUtils.convertMinuteToHour(workedtime.intervalTime);
        hourAponted.deleted     = workedtime.deleted;
        hourAponted.description = workedtime.description;
  
        this.hoursAponted.push(hourAponted);
      }      
    }    
  }

  public validateFields() : boolean{
    if (AgilitUtils.isNullOrUndefined(this.id) || this.id == ""){
      return false;
    }

    if (AgilitUtils.isNullOrUndefined(this.description) || this.description == ""){
      return false;
    }

    if (AgilitUtils.isNullOrUndefined(this.date) || this.date == ""){
      return false;
    }

    if (AgilitUtils.isNullOrUndefined(this.initialHour) || AgilitUtils.isNullOrUndefined(this.finalHour) || this.initialHour == "" || this.finalHour == ""){
      return false;
    }

    if (AgilitUtils.isNullOrUndefined(this.interval) || this.interval == ""){
      return false;
    }

    return true;
  }

  async confirmAppointments(){
    if (!this.validateFields()){
      await this.viewUtils.openAlert({header: 'Atenção', message: 'Há campos que não foram preenchidos corretamente!'});
      return;
    }
    
    const workedTime = {
      id          : this.id,
      description : this.description,
      startedWork : DateHelper.serverFormatDate(this.date + ' ' + this.initialHour),
      finishedWork: DateHelper.serverFormatDate(this.date + ' ' + this.finalHour),
      intervalTime: AgilitUtils.convertHourToMinutes(this.interval)
    }

    await this.viewUtils.showProgressBar();
    await this.restOrder.updateHourWorkedTime(workedTime).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }

        this.createHourWorkedTimeSuccess(response, true);
        this.id = "";
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );    
  }

  async newAppointments(){
    const userLogged = AgilitUtils.getMaintenerByLoggedUser(this.order.maintenanceWorker);

    if (AgilitUtils.isNullOrUndefined(userLogged)){
      return;
    }

    const workedTime = {
      maintenanceWorker: {
        id: userLogged.id
      },
      description : this.description,
      startedWork : DateHelper.serverFormatDate(this.date + ' ' + this.initialHour),
      finishedWork: DateHelper.serverFormatDate(this.date + ' ' + this.finalHour),
      intervalTime: AgilitUtils.convertHourToMinutes(this.interval)
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

  createHourWorkedTimeSuccess(response, edit = false){
    let hourAponted : any = {};
    hourAponted.Id          = response.id;
    hourAponted.Date        = new Date(response.startedWork);
    hourAponted.InitialHour = new Date(response.startedWork);
    hourAponted.FinalHour   = new Date(response.finishedWork);
    hourAponted.Interval    = AgilitUtils.convertMinuteToHour(response.intervalTime);
    hourAponted.description = response.description;

    this.date        = '';
    this.initialHour = '';
    this.finalHour   = '';
    this.interval    = '';
    this.description = '';
    
    if (edit){
      this.hoursAponted[this.index] = hourAponted;
      return;
    }
    this.hoursAponted.push(hourAponted);
  }

  async deleteHourWorked(item, index){
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

        const hoursApontedIndex = this.hoursAponted.findIndex((element) => element.Id == response.id);

        if (hoursApontedIndex == -1){
          return;
        }

        this.hoursAponted.splice(hoursApontedIndex, 1);

        const maintenerIndex = this.order.maintenanceWorker.findIndex((element) => element.id == userLogged.id);

        if (maintenerIndex == -1 || this.order.maintenanceWorker[maintenerIndex].workedTime.length < index){
          return;
        }
        
        this.order.maintenanceWorker[maintenerIndex].workedTime.splice(index, 1);
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );   
  }

  ScrollToTop() {
    this.content.scrollToTop(200);
  }

  editHourWorked(item, index){
    this.ScrollToTop();
    
    this.index       = index;
    this.id          = item.Id;
    this.date        = item.Date.getFullYear() + '-' + ("0" + Number(item.Date.getMonth() + 1).toString()).slice(-2) + '-' + ("0" + item.Date.getDate()).slice(-2);
    this.initialHour = ("0" + item.InitialHour.getHours()).slice(-2) + ':' + ("0" + item.InitialHour.getMinutes()).slice(-2);    
    this.finalHour   = ("0" + item.FinalHour.getHours()).slice(-2) + ':' + ("0" + item.FinalHour.getMinutes()).slice(-2);;    
    this.interval    = item.Interval;
    this.description = item.description;
  }

  public jsDateToPascal(date : Date) : string {
    let numberDay = date.getDate();
    let stringDay : string = String(numberDay);

    if (numberDay < 10){
      stringDay = '0' + numberDay;
    }

    return ("0" + date.getDate()).slice(-2) + '-' + ("0" + Number(date.getMonth() + 1).toString()).slice(-2) + '-' + date.getFullYear().toString()    
  }
}
