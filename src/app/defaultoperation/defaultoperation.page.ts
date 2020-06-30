import { Component, OnInit, OnDestroy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { DefaultIO } from 'src/app/io/defaultIO';
import { Order } from 'src/app/order/order';
import { ModalController } from '@ionic/angular';
import { CadOperationComponent } from 'src/app/cad-operation/cad-operation.component';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';

@Component({
  selector: 'app-defaultoperation',
  templateUrl: './defaultoperation.page.html',
  styleUrls: ['./defaultoperation.page.scss'],
})
export class DefaultOperationPage implements OnInit, OnDestroy {
  public order : any = undefined;  

  public subscribe : any;

  constructor(public modalController: ModalController, private changeDetectorRef: ChangeDetectorRef, private modalCtrl : ModalController, private restOrder : RestOrder, private viewUtils : ViewUtils) {
  }

  ngOnInit() {    
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;      
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }  
  
  expandedItem(item){
    item.expanded = !item.expanded;
  }

  addOperation(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CadOperationComponent
    });
    return await modal.present();
  }

  async exitOperation(item){
    item.executed = !item.executed;
    await this.viewUtils.showProgressBar();    
    await this.restOrder.updateOperation(item).then(
      (response: any) => {
        this.viewUtils.showToast('Operação cadastrada com sucesso!');
        this.viewUtils.hideProgressBar();
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    );
  }

}
