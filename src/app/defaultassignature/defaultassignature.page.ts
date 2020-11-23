import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/order/order';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';
import { AgilitOrderStatus, AgilitUtils, SignatureRole, SignatureStatus } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { AgilitActionUtils } from '../utils/AgilitActionUtils';

@Component({
  selector: 'app-defaultassignature',
  templateUrl: './defaultassignature.page.html',
  styleUrls: ['./defaultassignature.page.scss'],
})
export class DefaultAssignaturePage implements OnInit, OnDestroy {
  public order : any = undefined;

  public assignaturePassword : string = '';
  public subscribe : any;

  public assignatureVerificationChecked : boolean = false;

  constructor(private agilitActionUtils : AgilitActionUtils, private viewUtils : ViewUtils) { }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;

      for (const orderSignature of this.order.orderSignature){
        AgilitUtils.verifyProperty(orderSignature, 'createdAtFormatted', DateHelper.formatDate(orderSignature.createdAt));
      }
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  assineOm(){
    this.agilitActionUtils.signOrder(this.order, this.assignaturePassword).then((response) => {
      this.viewUtils.hideProgressBar();

      AgilitUtils.verifyProperty(response.signature, 'createdAtFormatted', DateHelper.formatDate(response.signature.createdAt));

      this.order.orderSignature.push(response.signature);
      this.viewUtils.showToast('Assinatura realizada com sucesso!');
    }).catch((error) => {
      this.viewUtils.hideProgressBar();
      this.viewUtils.showToast(error, 2000, false);
    });
  }
}
