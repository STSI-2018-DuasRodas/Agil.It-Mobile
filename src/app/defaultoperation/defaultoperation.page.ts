import { Component, OnInit } from '@angular/core';
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
export class DefaultOperationPage implements OnInit {
  public order : any = undefined;  

  constructor(public modalController: ModalController) {    
  }

  ngOnInit() {
    EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
      console.log(this.order);
    });
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
