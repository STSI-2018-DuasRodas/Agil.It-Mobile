import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonTextarea } from '@ionic/angular';
import { RestOrder } from '../rest/restorder';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';
import { AgilitTodayDateTypes, AgilitUtils } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { AlertType, ViewUtils } from '../utils/viewUtils';
import { HourworkedappointmentComponent } from '../hourworkedappointment/hourworkedappointment.component';

@Component({
  selector: 'app-hourworked',
  templateUrl: './hourworked.component.html',
  styleUrls: ['./hourworked.component.scss'],
})
export class HourworkedComponent implements OnInit {
  @ViewChild('focus', { static: false })  inputElement: IonTextarea;
  
  @Input() orderData     : any;  
  @Input() editItem      : any;
  @Input() editItemIndex : number;

  public hoursAponted : any = [];

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder) { }

  ngOnInit() {
    this.loadHourWorked();
  }

  loadHourWorked(){
    const userData : any = AgilitStorageUtils.getDataJSON(AgilitStorageTypes.USERDATA);

    for (const maintener of this.orderData.maintenanceWorker){
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

  async addAppointment(){
    let object = {
      maintenanceWorker: this.orderData.maintenanceWorker,
      editing: false
    }
    const modal = await this.viewUtils.openComponent(HourworkedappointmentComponent, object);
    modal.onDidDismiss().then(async (result : any) => {
      if (AgilitUtils.isNullOrUndefined(result.data.hourAponted)){
        return;
      }

      this.hoursAponted.push(result.data.hourAponted);
    });
  }

  async editHourWorked(item, index){
    let object = {
      editItem : item,
      maintenanceWorker: this.orderData.maintenanceWorker,
      editing: true
    }
    const modal = await this.viewUtils.openComponent(HourworkedappointmentComponent, object);
    modal.onDidDismiss().then(async (result : any) => {
      if (AgilitUtils.isNullOrUndefined(result.data.hourAponted)){
        return;
      }

      this.hoursAponted[index] = result.data.hourAponted;
    });
  }

  async deleteHourworked(hourAponted, index, event){
    event.stopPropagation();

    await this.viewUtils.openAlert({header: 'Atenção', message: 'Deseja realmente deletar este apontamento?', type: AlertType.ALERT_CONFIRM}, async (data) => {
      const userLogged = AgilitUtils.getMaintenerByLoggedUser(this.orderData.maintenanceWorker);

      if (AgilitUtils.isNullOrUndefined(userLogged)){
        return;
      }
  
      let hourWorked = {
        id : hourAponted.Id,
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
  
          const maintenerIndex = this.orderData.maintenanceWorker.findIndex((element) => element.id == userLogged.id);
  
          if (maintenerIndex == -1 || this.orderData.maintenanceWorker[maintenerIndex].workedTime.length < index){
            return;
          }
          
          this.orderData.maintenanceWorker[maintenerIndex].workedTime.splice(index, 1);
        }
      ).catch(
        error => {
          console.log('Error');
          this.viewUtils.hideProgressBar();
        }
      );   
    });
  }
}
