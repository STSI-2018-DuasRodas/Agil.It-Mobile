import { Injectable } from '@angular/core';
import { ProviderHelper } from './helper';
import { HttpProvider } from '../http/http';

@Injectable()
export class RestOrder {
  private restAction             = 'http://localhost:4000/api/v1/maintenance-orders/';  
  private listMaintenerOrdersURL = 'http://localhost:4000/api/v1/mainteners/';

  constructor(private http : HttpProvider){        
  }

  public list(){
    this.http.url = `${this.restAction}`;
    return ProviderHelper.get(this.http);
      
  }

  public listMaintenerOrders(maintenerID){
    this.http.url = `${this.listMaintenerOrdersURL + maintenerID + '/orders'}`;
    return ProviderHelper.get(this.http);
  }

  public loadOrder(orderID){
    this.http.url = `${this.restAction + orderID}`;
    return ProviderHelper.get(this.http);
  }

  public orderAssignature(){

  }
}