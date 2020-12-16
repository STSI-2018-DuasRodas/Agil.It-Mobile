import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AgilitUtils } from '../utils/agilitUtils';
import { RestOrder } from '../rest/restorder';
import { ViewUtils, AlertType } from '../utils/viewUtils';
import { CadComponentComponent } from '../cad-component/cad-component.component';

export enum CadOperationTypes{
  INSERT = 'INSERT',
  EDIT = 'EDIT'
}

@Component({
  selector: 'app-cad-operation',
  templateUrl: './cad-operation.component.html',
  styleUrls: ['./cad-operation.component.scss'],
})
export class CadOperationComponent implements OnInit {
  @Input() operationData     : any = this.createOperationData();
  @Input() orderEquipID      : number;
  @Input() operationMoviment : CadOperationTypes;
  @Input() orderEquipments   : any = undefined;

  public orderEquipmentSelect : any;

  executedToggle : boolean = false;
  isDisapproved  : boolean = false;

  constructor(private modalCtrl : ModalController, private restOrder : RestOrder, private viewUtils : ViewUtils, private modalController : ModalController) { 
    
  }

  ngOnInit() {
    this.fieldsConfiguration();
    this.executedToggle = this.operationData.executed;
    this.isDisapproved  = this.operationData.isDisapproved;
  }

  fieldsConfiguration(){
    AgilitUtils.verifyProperty(this.operationData, 'formatedPlanningTime', '');
    AgilitUtils.verifyProperty(this.operationData, 'formatedExecutedTime', '');
    AgilitUtils.verifyProperty(this.operationData, 'orderEquipment', {});
    AgilitUtils.verifyProperty(this.operationData.orderEquipment, 'id', 0);

    this.operationData.formatedPlanningTime = AgilitUtils.convertMinuteToHour(this.operationData.planningTime);
    this.operationData.formatedExecutedTime = AgilitUtils.convertMinuteToHour(this.operationData.executeTime);
  }

  async componentModalOpen(){
    const modal = await this.modalController.create({
      component: CadComponentComponent,
      componentProps: {
        'operationData': this.operationData,
        'editing': false
      }
    });
    return await modal.present();
  }  

  executeTimeChange(){
    this.operationData.executeTime = AgilitUtils.convertHourToMinutes(this.operationData.formatedExecutedTime);
  }

  createOperationData(){
    return {
      description: '',
      operationNumber: 0,
      formatedPlanningTime: '',
      formatedExecutedTime: '',
      note: '',
      executed: false,
      orderComponent: [],
      orderEquipment: {
        id: 0
      }
    }
  }

  async deleteComponent(index, component, event){
    event.stopPropagation();

    if (AgilitUtils.isNullOrUndefined(component) || !component.canBeDeleted){
      return;
    }

    await this.viewUtils.openAlert({header: 'Atenção', message: 'Deseja realmente deletar este componente?', type: AlertType.ALERT_CONFIRM}, async (data) => {
      await this.viewUtils.showProgressBar();    
      await this.restOrder.deleteComponent(component.id).then(
        (response: any) => {
          this.viewUtils.hideProgressBar();
          this.operationData.orderComponent.splice(index, 1);
        }
      ).catch(
        error => {
          this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
          this.viewUtils.hideProgressBar();
        }
      );
    });    
  }

  async confirmOperation(){        
    this.operationData.orderEquipment.id = this.orderEquipID  ;
    this.operationData.executed          = this.executedToggle;
    this.operationData.isDisapproved     = this.isDisapproved ;

    if (this.operationMoviment == CadOperationTypes.EDIT){
      this.updateOperation();
      return;
    }

    if (this.operationMoviment == CadOperationTypes.INSERT){
      this.createOperation();
    }    
  }

  async createOperation(){
    await this.viewUtils.showProgressBar();    
    await this.restOrder.createOperation(this.operationData).then(
      (response: any) => {
        this.viewUtils.showToast('Operação cadastrada com sucesso!');
        this.viewUtils.hideProgressBar();
        this.dismissModal();
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    );
  }

  async updateOperation(){
    await this.viewUtils.showProgressBar();    
    await this.restOrder.updateOperation(this.operationData).then(
      (response: any) => {
        this.viewUtils.showToast('Operação cadastrada com sucesso!');
        this.viewUtils.hideProgressBar();
        this.dismissModal();
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    );
  }

  async openComponent(component){
    const modal = await this.modalController.create({
      component: CadComponentComponent,
      componentProps: {
        'operationData': this.operationData,
        'component': component,
        'editing': true
      }
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
