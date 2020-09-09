import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';
import { AgilitUtils } from '../utils/agilitUtils';

@Component({
  selector: 'app-routeassignature',
  templateUrl: './routeassignature.page.html',
  styleUrls: ['./routeassignature.page.scss'],
})
export class RouteAssignaturePage implements OnInit {
  public order : any = undefined;

  public assignaturePassword : string = '';

  assignatureVerificationChecked : boolean = false;

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder) { }

  ngOnInit() {
    EventEmitterService.get('routeOrderData').subscribe((data) => {
      this.order = data;
      console.log(this.order);
    });
  }

  async assineOm(){
    if (this.assignaturePassword != window.localStorage.getItem("password")){
      return;
    }

    let orderAssignature = {
      user: {
        id: 3
      },
      maintenanceOrder: {
        id: this.order.id
      },
        signatureRole: "maintainer",
        signatureStatus: "new"
    }

    await this.viewUtils.showProgressBar();
    await this.restOrder.orderAssignature(orderAssignature).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }        
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );   
  }

}
