import { Component, OnInit } from '@angular/core';
import { DefaultIO } from 'src/app/io/defaultIO';
import { Order } from 'src/app/order/order';
import { ModalController } from '@ionic/angular';
import { CadOperationComponent } from 'src/app/cad-operation/cad-operation.component';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
  public defaultOrder : DefaultIO;

  constructor(public modalController: ModalController) {
    this.defaultOrder = Order.getInstance().orderDefault;
  }

  ngOnInit() {
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
