import { Injectable } from '@angular/core';
import { ProviderHelper } from './helper';
import { HttpProvider } from '../http/http';

@Injectable()
export class RestOrder {
  private restAction             = 'maintenance-orders';
  private listMaintenerOrdersURL = 'mainteners';
  private restUpdateOperation    = 'order-operations';

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

  public orderAssignature(){

  }

  public updateOperation(operation){
    this.http.url = this.http.getBaseUrl() + this.restUpdateOperation + '/' + operation.id;
    return ProviderHelper.put(this.http, operation);
  }
}