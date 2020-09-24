import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { CadOperationComponent, CadOperationTypes } from '../cad-operation/cad-operation.component';
import { ModalController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routeresume',
  templateUrl: './routeresume.page.html',
  styleUrls: ['./routeresume.page.scss'],
})
export class RouteResumePage implements OnInit {
  public order : any = undefined;

  public subscribe : any;

  constructor(public modalController: ModalController, private viewUtils : ViewUtils, private restOrder : RestOrder, private router: Router) { }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('routeOrderData').subscribe((data) => {
      this.order = data;

      console.log(this.order);
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  expandOperation(item){    
    item.operation_expanded = !item.operation_expanded;
  }

  async expandComponent(operation, orderEquipment){
    const modal = await this.modalController.create({
      component: CadOperationComponent,
      componentProps: {
        'operationData' : operation,
        'orderEquipID'  : orderEquipment.id,
        'operationMoviment': CadOperationTypes.EDIT
      }
    });
    return await modal.present();
  }

  async addOperation(){
    const modal = await this.modalController.create({
      component: CadOperationComponent,
      componentProps: {
        'operationMoviment': CadOperationTypes.INSERT,
        'orderEquipments' : this.order.orderEquipment
      }
    });
    
    await modal.present();

    modal.onDidDismiss().then(() => {
      this.reloadOrder();
    });
  }

  async reloadOrder(){
    await this.viewUtils.showProgressBar();
    await this.restOrder.loadOrder(this.order.id).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }

        this.order = response;
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    ); 
  }
}
