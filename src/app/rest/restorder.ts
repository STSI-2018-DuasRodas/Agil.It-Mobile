import { Injectable } from '@angular/core';
import { ProviderHelper } from './helper';
import { HttpProvider } from '../http/http';
import { AgilitOrderStatus, AgilitUtils } from '../utils/agilitUtils';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';

@Injectable()
export class RestOrder {
  private restAction             = 'maintenance-orders';
  private listMaintenerOrdersURL = 'mainteners';
  private restUpdateOperation    = 'order-operations';
  private restAssignature        = 'signatures';
  private restItem               = 'items'           ;
  private restComponents         = 'order-components';
  private restOMType             = 'order-layouts'   ;
  private restEquipments         = 'equipments'      ;
  private restSafetyParams       = 'safety-params'   ;

  constructor(private http : HttpProvider){   
    this.http = http;     
  } 

  public list(filter){
    this.http.url = this.http.getBaseUrl() + `${this.restAction}` + AgilitUtils.createRestParamsFilters(filter);
    return ProviderHelper.get(this.http);      
  }

  public listMaintenerOrders(maintenerID, filter){
    this.http.url = this.http.getBaseUrl() + `${this.listMaintenerOrdersURL + '/' + maintenerID + '/orders'}` + AgilitUtils.createRestParamsFilters(filter);
    return ProviderHelper.get(this.http);
  }

  public loadOrder(orderID){
    this.http.url = this.http.getBaseUrl() + `${this.restAction + '/' + orderID}`;
    return ProviderHelper.get(this.http);
  }

  public orderAssignature(orderID, userID, userPassword){
    let obj = {
      userId : userID,
      password: userPassword
    }

    this.http.url = this.http.getBaseUrl() + this.restAction + '/' + orderID + '/' + this.restAssignature;
    return ProviderHelper.post(this.http, obj);
  }

  public updateOperation(operation){
    this.http.url = this.http.getBaseUrl() + this.restUpdateOperation + '/' + operation.id;
    return ProviderHelper.put(this.http, operation);
  }

  public createOperation(operation){
    this.http.url = this.http.getBaseUrl() + this.restUpdateOperation;
    return ProviderHelper.post(this.http, operation);
  }

  public orderActions(orderID : number, agilitOrderStatus : AgilitOrderStatus){
    const orderStatus : any = {
      orderStatus: agilitOrderStatus        
    }

    if (agilitOrderStatus == AgilitOrderStatus.ASSUMED){
      let userInfo : any = AgilitStorageUtils.getDataJSON(AgilitStorageTypes.USERDATA);

      orderStatus.userId = userInfo.id;
    }    

    this.http.url = this.http.getBaseUrl() + this.restAction + '/' + orderID + '/status';
    return ProviderHelper.put(this.http, orderStatus);
  }

  public createHourWorkedTime(hourWorked){
    this.http.url = this.http.getBaseUrl() + 'worked-times';
    return ProviderHelper.post(this.http, hourWorked);
  }

  public updateHourWorkedTime(hourWorked){
    this.http.url = this.http.getBaseUrl() + 'worked-times/' + hourWorked.id;
    return ProviderHelper.put(this.http, hourWorked);
  }

  public deleteHourWorkedTime(hourWorked){
    this.http.url = this.http.getBaseUrl() + 'worked-times/' + hourWorked.id;
    return ProviderHelper.delete(this.http);
  }

  public createComponent(component){
    this.http.url = this.http.getBaseUrl() + this.restComponents;
    return ProviderHelper.post(this.http, component);
  }

  public updateComponent(component){
    this.http.url = this.http.getBaseUrl() + this.restComponents + '/' + component.id;
    return ProviderHelper.put(this.http, component);
  }

  public deleteComponent(componentID){
    this.http.url = this.http.getBaseUrl() + this.restComponents + '/' + componentID;
    return ProviderHelper.delete(this.http);
  }

  public listProductsByDescription(description){
    this.http.url = this.http.getBaseUrl() + this.restItem + '?description=like(' + description + ')';
    return ProviderHelper.get(this.http);
  }

  public listProductsByIntegrationId(integrationId){
    this.http.url = this.http.getBaseUrl() + this.restItem + '?integrationID=like(' + integrationId + ')';
    return ProviderHelper.get(this.http);
  }

  public listOMTypes(){
    this.http.url = this.http.getBaseUrl() + this.restOMType;
    return ProviderHelper.get(this.http);
  }

  public listEquipments(equipmentDescription){
    this.http.url = this.http.getBaseUrl() + this.restEquipments + '?description=like(' + equipmentDescription + ')';
    return ProviderHelper.get(this.http);
  }

  public listSafetyParams(orderId){
    this.http.url = this.http.getBaseUrl() + this.restAction + '/' + orderId + '/' + this.restSafetyParams;
    return ProviderHelper.get(this.http);
  }
}