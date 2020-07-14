import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AgilitUtils } from '../utils/agilitUtils';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';

@Component({
  selector: 'app-cad-operation',
  templateUrl: './cad-operation.component.html',
  styleUrls: ['./cad-operation.component.scss'],
})
export class CadOperationComponent implements OnInit {
  @Input() operationData : any = this.createOperationData();

  constructor(navParams: NavParams, private modalCtrl : ModalController, private restOrder : RestOrder, private viewUtils : ViewUtils) { 
    
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

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
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
      orderComponent: []
    }
  }

  async confirmOperation(){    
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
}
