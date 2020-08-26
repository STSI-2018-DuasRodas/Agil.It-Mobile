import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';

@Component({
  selector: 'app-cad-component',
  templateUrl: './cad-component.component.html',
  styleUrls: ['./cad-component.component.scss'],
})
export class CadComponentComponent implements OnInit {
  @Input() operationData : any;

  public filter   = '';
  public products = [];

  public componentData : any = this.createComponentObject();

  constructor(private modalCtrl : ModalController, private viewUtils : ViewUtils, private restOrder : RestOrder) { }

  ngOnInit() {
    this.componentData.orderOperation.id = this.operationData.id;
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
    await this.restOrder.listProducts(this.filter).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();
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
  }

  async confirmComponent(){
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

  createComponentObject(){
    return {   
      orderOperation: {
        id: 0
      },   
      item : {
        id: 0,
        description: ''
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
