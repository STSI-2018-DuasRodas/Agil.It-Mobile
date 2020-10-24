import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';
import { AgilitOrderStatus, AgilitUtils, SignatureRole, SignatureStatus } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { AgilitActionUtils } from '../utils/AgilitActionUtils';

@Component({
  selector: 'app-listassignature',
  templateUrl: './listassignature.page.html',
  styleUrls: ['./listassignature.page.scss'],
})
export class ListAssignaturePage implements OnInit {
  public order : any = undefined;

  public assignaturePassword : string = '';
  public subscribe : any;

  public assignatureVerificationChecked : boolean = false;

  constructor(private viewUtils : ViewUtils, private agilitActionUtils : AgilitActionUtils) { }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('listOrderData').subscribe((data) => {
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
      this.order.orderSignature.push(response);
      this.viewUtils.showToast('Assinatura realizada com sucesso!');
    }).catch((error) => {
      this.viewUtils.hideProgressBar();
      this.viewUtils.showToast(error, 2000, false);
    });
  }
}
