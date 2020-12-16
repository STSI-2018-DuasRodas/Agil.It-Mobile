import { Injectable } from '@angular/core';
import { RestOrder } from '../rest/restorder';
import { AgilitStorageTypes, AgilitStorageUtils } from './AgilitStorageUtils';
import { AgilitOrderStatus, AgilitUtils, SignatureRole, SignatureStatus } from './agilitUtils';

@Injectable()
export class AgilitActionUtils {
  private resolvePromise : any;
  private rejectPromise  : any;

  constructor(private restOrder : RestOrder){}

  public async changeStatus(orderID, orderStatus : AgilitOrderStatus){    
    return this.restOrder.orderActions(orderID, orderStatus);
  }

  public async signOrder(order, assignaturePassword): Promise<any>{
    return new Promise(async (resolve, reject) => {
      this.resolvePromise = resolve;
      this.rejectPromise  = reject;

      try {
        if (!this.validateOrder(order, assignaturePassword)){
          return;
        }        

        const user = AgilitStorageUtils.getDataJSON(AgilitStorageTypes.USERDATA);

        if (AgilitUtils.isNullOrUndefined(user) || AgilitUtils.isNullOrUndefined(user.id) || user.id == ''){
          this.rejectPromise('Dados de usuário inválido!');
          return;
        }
        
        await this.restOrder.orderAssignature(order.id, user.id, assignaturePassword).then(
          (response: any) => {
            if (AgilitUtils.isNullOrUndefined(response)){
              return;
            }

            this.resolvePromise(response);
          }
        ).catch(
          error => {
            this.rejectPromise(error);
          }
        );
      } catch (error) {
        this.rejectPromise(error);
      }
    });
  }

  private validateOrder(order, password) : boolean{
    if (password != AgilitStorageUtils.getData(AgilitStorageTypes.PASSWORD)){
      this.rejectPromise('Senha incorreta!');
      return;
    }

    if (order.orderStatus == AgilitOrderStatus.SIGNATURED){
      this.rejectPromise('OM já está assinada!');
      return;
    }

    if (order.orderStatus == AgilitOrderStatus.FINISHED){
      this.rejectPromise('OM já está assinada!');
      return;
    }

    if (order.orderStatus == AgilitOrderStatus.CANCELED){      
      this.rejectPromise('OM está cancelada!');
      return;
    }

    return true;
  }
}