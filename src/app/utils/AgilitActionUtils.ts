import { Injectable } from '@angular/core';
import { RestOrder } from '../rest/restorder';
import { AgilitOrderStatus } from './agilitUtils';

@Injectable()
export class AgilitActionUtils {

  constructor(private restOrder : RestOrder){}

  public async changeStatus(orderID, orderStatus : AgilitOrderStatus){    
    return this.restOrder.orderActions(orderID, orderStatus);
  }
}