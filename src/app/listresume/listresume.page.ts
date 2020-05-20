import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { CadOperationComponent } from '../cad-operation/cad-operation.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listresume',
  templateUrl: './listresume.page.html',
  styleUrls: ['./listresume.page.scss'],
})
export class ListResumePage implements OnInit, OnDestroy {
  public order : any = undefined;

  public subscribe : any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {    
    this.subscribe = EventEmitterService.get('listOrderData').subscribe((data) => {
      this.order = data;

      console.log(this.order);
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  expandOperation(item){    
    item.operation_expanded = !item.operation_expanded;
  }

  expandComponent(item){
    this.presentModal(item);
  }

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: CadOperationComponent,
      componentProps: {
        'operationData' : data
      }
    });
    return await modal.present();
  }

}
