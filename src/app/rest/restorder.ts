import { Injectable } from '@angular/core';
import { ProviderHelper } from './helper';
import { HttpProvider } from '../http/http';
import { AgilitOrderStatus } from '../utils/agilitUtils';

@Injectable()
export class RestOrder {
  private restAction             = 'maintenance-orders';
  private listMaintenerOrdersURL = 'mainteners';
  private restUpdateOperation    = 'order-operations';
  private restAssignature        = 'order-signatures';

  constructor(private http : HttpProvider){   
    this.http = http;     
  }

  public list(){
    this.http.url = this.http.getBaseUrl() + `${this.restAction}`;
    return ProviderHelper.get(this.http);
      
  }

  public listMaintenerOrders(maintenerID){
    this.http.url = this.http.getBaseUrl() + `${this.listMaintenerOrdersURL + '/' + maintenerID + '/orders'}`;
    return ProviderHelper.get(this.http);
  }

  public loadOrder(orderID){
    this.http.url = this.http.getBaseUrl() + `${this.restAction + '/' + orderID}`;
    return ProviderHelper.get(this.http);
  }

  public orderAssignature(orderAssignature){
    this.http.url = this.http.getBaseUrl() + this.restAssignature;
    return ProviderHelper.post(this.http, orderAssignature);
  }

  public updateOperation(operation){
    this.http.url = this.http.getBaseUrl() + this.restUpdateOperation + '/' + operation.id;
    return ProviderHelper.put(this.http, operation);
  }

  public orderActions(orderID : number, agilitOrderStatus : AgilitOrderStatus){
    const orderStatus = {
      orderStatus: agilitOrderStatus
    }

    this.http.url = this.http.getBaseUrl() + this.restAction + '/' + orderID;
    return ProviderHelper.put(this.http, orderStatus);
  }

  public createHourWorkedTime(hourWorked){
    this.http.url = this.http.getBaseUrl() + this.restAction + '/' + hourWorked.maintenanceWorker + '/worked-times';
    return ProviderHelper.post(this.http, hourWorked);
  }

  public deleteHourWorkedTime(hourWorked){
    this.http.url = this.http.getBaseUrl() + this.restAction + '/' + hourWorked.maintenanceWorker + '/worked-times' + hourWorked.id;
    return ProviderHelper.delete(this.http);
  }
}