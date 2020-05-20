import { Component, OnInit, OnDestroy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { DefaultIO } from 'src/app/io/defaultIO';
import { Order } from 'src/app/order/order';
import { ModalController } from '@ionic/angular';
import { CadOperationComponent } from 'src/app/cad-operation/cad-operation.component';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaultoperation',
  templateUrl: './defaultoperation.page.html',
  styleUrls: ['./defaultoperation.page.scss'],
})
export class DefaultOperationPage implements OnInit, OnDestroy {
  public order : any = undefined;  

  public subscribe : any;

  constructor(public modalController: ModalController, private changeDetectorRef: ChangeDetectorRef) {    
  }

  ngOnInit() {    
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;      
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }  
  
  expandedItem(item){
    item.expanded = !item.expanded;
  }

  addOperation(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CadOperationComponent
    });
    return await modal.present();
  }

}
