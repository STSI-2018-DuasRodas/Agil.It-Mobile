import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {
  @Input() orderId : any;

  public checkLists : any = [];

  public confirmIsValid = false;

  constructor(private modalCtrl : ModalController, private viewUtils : ViewUtils, private restOrder : RestOrder) { }

  ngOnInit() {
    this.loadSafetyParams();
  }

  async loadSafetyParams(){
    await this.viewUtils.showProgressBar();
    await this.restOrder.listSafetyParams(this.orderId).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();
        if (AgilitUtils.isEmptyArray(response)){
          return;
        }

        this.checkLists = response;

        for (const safetyParam of this.checkLists){
          AgilitUtils.verifyProperty(safetyParam, 'checked', false);
        }
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );    
  }

  validateParams() : boolean{
    for (const safetyParam of this.checkLists){
      if (!safetyParam.checked){
        return false;
      }
    }

    return true;
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': false
    });
  }

  confirmChecklist(){
    this.validateParams();
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
