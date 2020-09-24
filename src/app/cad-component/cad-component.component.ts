import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';

enum FilterOrigin {
  DESCRIPTION    = 'DESCRIPTION',
  INTEGRATION_ID = 'INTEGRATION_ID'
}

@Component({
  selector: 'app-cad-component',
  templateUrl: './cad-component.component.html',
  styleUrls: ['./cad-component.component.scss'],
})
export class CadComponentComponent implements OnInit {
  @Input() operationData : any;
  @Input() component     : any;
  @Input() editing       : boolean = false;

  public integrationID = '';
  public filter        = '';
  public products      = [];
  public filterOrigin : FilterOrigin = FilterOrigin.DESCRIPTION;

  public componentData : any = this.createComponentObject();

  constructor(private modalCtrl : ModalController, private viewUtils : ViewUtils, private restOrder : RestOrder) { }

  ngOnInit() {
    this.componentData.orderOperation.id = this.operationData.id;

    if (this.editing){
      this.editingComponent();
    }    
  }

  editingComponent(){
    AgilitUtils.verifyProperty(this.component, 'item', {});
    AgilitUtils.verifyProperty(this.component.item, 'id', 0);
    AgilitUtils.verifyProperty(this.component.item, 'description', '');
    AgilitUtils.verifyProperty(this.component, 'quantity', 0);
    AgilitUtils.verifyProperty(this.component, 'canBeDeleted', false);

    this.componentData.id               = this.component.id              ;
    this.componentData.item.id          = this.component.item.id         ;
    this.componentData.item.description = AgilitUtils.copy(this.component.item.description);
    this.componentData.item.integrationID    = AgilitUtils.copy(this.component.item.integrationID);
    this.componentData.quantity         = this.component.quantity        ;    
    this.componentData.canBeDeleted     = this.component.canBeDeleted    ;
    
    this.filter        = this.componentData.item.description;
    this.integrationID = this.componentData.item.integrationID;
  }

  async loadProductsByDescription(){
    if (this.filter.length < 3){
      this.products = [];
      return;
    }   

    if (this.filter == this.componentData.item.description){
      return;
    }

    await this.viewUtils.showProgressBar();    
    await this.restOrder.listProductsByDescription(this.filter).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        this.filterOrigin = FilterOrigin.DESCRIPTION;
        this.products     = response || [];
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    );
  }

  async loadProductsById(){
    if (this.integrationID.length < 2){
      this.products = [];
      return;
    }

    if (this.integrationID == this.componentData.item.integrationID){
      return;
    }

    await this.viewUtils.showProgressBar();    
    await this.restOrder.listProductsByIntegrationId(this.integrationID).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        this.filterOrigin = FilterOrigin.INTEGRATION_ID;
        this.products = response || [];
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    );
  }

  componentSelected(item){        
    this.componentData.item = AgilitUtils.copy(item);
    this.products           = [];    

    this.filter             = item.description;
    this.integrationID      = item.integrationID;
  }

  confirmComponent(){
    if (!this.editing){
      this.postComponent();
    } else {
      this.putComponent();
    }    
  }

  async postComponent(){
    await this.viewUtils.showProgressBar();    
    await this.restOrder.createComponent(this.componentData).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();
        this.operationData.orderComponent.push(response) 
        this.dismissModal();
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    );
  }

  async putComponent(){
    await this.viewUtils.showProgressBar();    
    await this.restOrder.updateComponent(this.componentData).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();
        this.putComponentSuccess(response);
        this.dismissModal();
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    );
  }

  putComponentSuccess(response){
    if (AgilitUtils.isNullOrUndefined(response)){
      return;
    }

    for (let i = 0; i < this.operationData.orderComponent.length; i++) {      
      if (!AgilitUtils.equals(this.operationData.orderComponent[i].id, response.id)){
        continue;
      }

      this.operationData.orderComponent[i] = response;
      break;
    }
  }

  createComponentObject(){
    return {   
      orderOperation: {
        id: 0
      },   
      item : {
        id: 0,
        description: '',
        integrationID: ''
      },      
      quantity: 0,
      canBeDeleted: true      
    }
  }

  dismissModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
