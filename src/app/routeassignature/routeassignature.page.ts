import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';
import { AgilitUtils, SignatureRole, SignatureStatus } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { AgilitOrderStatus } from '../utils/agilitUtils';
import { AgilitActionUtils } from '../utils/AgilitActionUtils';

@Component({
  selector: 'app-routeassignature',
  templateUrl: './routeassignature.page.html',
  styleUrls: ['./routeassignature.page.scss'],
})
export class RouteAssignaturePage implements OnInit {
  public order : any = undefined;

  public subscribe : any;
  public assignaturePassword : string = '';

  public assignatureVerificationChecked : boolean = false;

  constructor(private viewUtils : ViewUtils, private agilitActionUtils : AgilitActionUtils) { }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('routeOrderData').subscribe((data) => {
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
