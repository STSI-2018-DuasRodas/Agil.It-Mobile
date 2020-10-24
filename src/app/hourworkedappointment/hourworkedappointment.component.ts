import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, PopoverController } from '@ionic/angular';
import { RestOrder } from '../rest/restorder';
import { AgilitTodayDateTypes, AgilitUtils } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { ViewUtils } from '../utils/viewUtils';

@Component({
  selector: 'app-hourworkedappointment',
  templateUrl: './hourworkedappointment.component.html',
  styleUrls: ['./hourworkedappointment.component.scss'],
})
export class HourworkedappointmentComponent implements OnInit, AfterViewInit {
  @ViewChild('focus', { static: false })  inputElement: IonTextarea;
  @Input() data : any;

  public id          : string = '';
  public description : string = '';
  public date        : string = AgilitUtils.getTodayDate(AgilitTodayDateTypes["YY/MM/DD"]);
  public initialHour : string = '';
  public finalHour   : string = '';
  public interval    : string = '';

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder, private popoverController : PopoverController) { }

  ngOnInit() {
    this.defineFieldsValues();
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.inputElement.setFocus();  
    }, 100);    
  }

  defineFieldsValues(){
    if (AgilitUtils.isNullOrUndefined(this.data)){
      return;
    }

    if (!this.data.editing){
      this.clearAppointmentsFields();
      return;
    }

    // ? Quando for edição alimenta as propriedades com o que veio da edição
    this.id          = this.data.editItem.Id;
    this.date        = this.data.editItem.Date.getFullYear() + '-' + ("0" + Number(this.data.editItem.Date.getMonth() + 1).toString()).slice(-2) + '-' + ("0" + this.data.editItem.Date.getDate()).slice(-2);
    this.initialHour = ("0" + this.data.editItem.InitialHour.getHours()).slice(-2) + ':' + ("0" + this.data.editItem.InitialHour.getMinutes()).slice(-2);
    this.finalHour   = ("0" + this.data.editItem.FinalHour.getHours()).slice(-2) + ':' + ("0" + this.data.editItem.FinalHour.getMinutes()).slice(-2);;    
    this.interval    = this.data.editItem.Interval;
    this.description = this.data.editItem.description;
  }

  clearAppointmentsFields(){
    // ? Limpa os campos
    this.id          = '';
    this.description = '';
    this.date        = AgilitUtils.getTodayDate(AgilitTodayDateTypes["YY/MM/DD"]);
    this.interval    = '';
    this.initialHour = '';
    this.finalHour   = '';
  }

  async confirmAppointments(){
    if (!this.validateFields()){
      await this.viewUtils.openAlert({header: 'Atenção', message: 'Há campos que não foram preenchidos corretamente!'});
      return;
    }

    if (!this.data.editing){
      this.createHourworked();
    } else {
      this.updateHourworked();
    }
  }

  async createHourworked(){
    // ? Criar um apontamento novo
    await this.viewUtils.showProgressBar();
    await this.restOrder.createHourWorkedTime(this.createWorkedTimeObject()).then(
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

  async updateHourworked(){
    // ? Edição de um apontamento
    await this.viewUtils.showProgressBar();
    await this.restOrder.updateHourWorkedTime(this.createWorkedTimeObject()).then(
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
    hourAponted.Date        = new Date(response.startedWork);
    hourAponted.InitialHour = new Date(response.startedWork);
    hourAponted.FinalHour   = new Date(response.finishedWork);
    hourAponted.Interval    = AgilitUtils.convertMinuteToHour(response.intervalTime);
    hourAponted.description = response.description;

    this.popoverController.dismiss({'dismissed': true, 'hourAponted': hourAponted});
  }

  createWorkedTimeObject(){
    let workedTime : any = {
      description : this.description,
      startedWork : DateHelper.serverFormatDate(this.date + ' ' + this.initialHour),
      finishedWork: DateHelper.serverFormatDate(this.date + ' ' + this.finalHour),
      intervalTime: AgilitUtils.convertHourToMinutes(this.interval)
    };

    if (this.data.editing){
      AgilitUtils.verifyProperty(workedTime, 'id', this.id);
    }

    if (!this.data.editing){
      // ? Pegar o tecnico da OM logado no sistema
      const userLogged = AgilitUtils.getMaintenerByLoggedUser(this.data.maintenanceWorker);

      if (AgilitUtils.isNullOrUndefined(userLogged)){
        return;
      }

      // ? Informar para qual tecnico é o apontamento
      AgilitUtils.verifyProperty(workedTime, 'maintenanceWorker', {});
      AgilitUtils.verifyProperty(workedTime.maintenanceWorker, 'id', userLogged.id);
    }
    
    return workedTime;
  }

  validateFields() : boolean{
    // ? Validar se os campos estão preenchidos corretamente

    if ((this.data.editing) && (AgilitUtils.isNullOrUndefined(this.id) || this.id == "")){
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

  close(){
    this.popoverController.dismiss({'dismissed': true});
  }
  
}
