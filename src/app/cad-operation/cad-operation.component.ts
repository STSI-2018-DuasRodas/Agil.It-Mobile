import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AgilitUtils } from '../utils/agilitUtils';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';
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
  @Input() operationData : any = this.createOperationData();
  @Input() orderEquipID  : number;
  @Input() operationMoviment : CadOperationTypes;

  constructor(private modalCtrl : ModalController, private restOrder : RestOrder, private viewUtils : ViewUtils, private modalController : ModalController) { 
    
  }

  ngOnInit() {
    this.fieldsConfiguration();
  }

  fieldsConfiguration(){
    AgilitUtils.verifyProperty(this.operationData, 'formatedPlanningTime', '');
    AgilitUtils.verifyProperty(this.operationData, 'formatedExecutedTime', '');

    this.operationData.formatedPlanningTime = AgilitUtils.convertMinuteToHour(this.operationData.planningTime);
    this.operationData.formatedExecutedTime = AgilitUtils.convertMinuteToHour(this.operationData.executeTime);
  }

  async componentModalOpen(){
    const modal = await this.modalController.create({
      component: CadComponentComponent,
      componentProps: {
        'operationData': this.operationData
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

  async confirmOperation(){    
    this.operationData.orderEquipment.id = this.orderEquipID;

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

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
