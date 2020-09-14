import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';
import { AgilitUtils, SignatureRole, SignatureStatus } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';

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

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder) { }

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

  async assineOm(){
    if (this.assignaturePassword != window.localStorage.getItem("password")){
      this.viewUtils.showToast('Senha incorreta!', 2000, false);
      return;
    }

    const userData : any = JSON.parse(window.localStorage.getItem("user"));
    
    let orderAssignature = {
      user: {
        id: userData.id
      },
      maintenanceOrder: {
        id: this.order.id
      },
        signatureRole: SignatureRole.MAINTAINER,
        signatureStatus: SignatureStatus.NEW
    }

    await this.viewUtils.showProgressBar();
    await this.restOrder.orderAssignature(orderAssignature).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }
        this.order.orderSignature.push(response);

        this.viewUtils.showToast('Assinatura realizada com sucesso!');
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );   
  }

}
