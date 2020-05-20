import { Component, OnInit } from '@angular/core';
import { ListIO } from 'src/app/io/listIO';
import { AgilitUtils } from 'src/app/utils/agilitUtils';
import { PopoverController, Events, MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Order } from 'src/app/order/order';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {  
  public order : any = this.createOrderObject();

  public tabs : any = this.obterTabs();

  public currentPopover = null;
  public requestOrderData : any;

  constructor(public activeRoute : ActivatedRoute, private menuCtrl : MenuController, private agilitUtils : AgilitUtils, public popoverController: PopoverController, private events : Events, private restOrder : RestOrder, private viewUtils : ViewUtils) {     
  }

  async ngOnInit() {
    await this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));

    this.requestOrderData = EventEmitterService.get('requestOrderData').subscribe(() => {
      this.emitOrderEvent();
    });
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }

  async  loadOrderById(idOrder : string){    
    if (idOrder == ''){
      return;
    }

    await this.viewUtils.showProgressBar();
    await this.restOrder.loadOrder(idOrder).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }

        this.order = response;
        this.loadOrderSuccess();

        EventEmitterService.get('listOrderData').emit(this.order);                
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    ); 
  }
  
  emitOrderEvent(){
    EventEmitterService.get('listOrderData').emit(this.order);
  }

  loadOrderSuccess(){
    if (AgilitUtils.isNullOrUndefined(this.order)){
      return;
    }  
    
    AgilitUtils.verifyProperty(this.order, 'orderType', '');
    AgilitUtils.verifyProperty(this.order, 'priorityFormated', '');
    AgilitUtils.verifyProperty(this.order, 'openDateFormated', '');

    this.order.orderType        = AgilitUtils.formatValues(this.order.orderLayout.orderLayout);
    this.order.priorityFormated = AgilitUtils.formatValues(this.order.priority);
    this.order.openDateFormated = new Date(this.order.openedDate).getDate() + '/' + new Date(this.order.openedDate).getMonth() + '/' + new Date(this.order.openedDate).getFullYear();

    for (const equipament of this.order.orderEquipment) {
      AgilitUtils.verifyProperty(equipament, 'operation_expanded', false);
      for (const operation of equipament.orderOperation) {                
        AgilitUtils.verifyProperty(operation, 'component_expanded', false);        
      }        
    }    
  }

  private createOrderObject(){
    return {
      orderNumber: '',
      type       : '',
      orderTypeId: ''
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      id : 'popover',
      translucent: true
    });
    this.currentPopover = popover;

    this.subscribeMethods();

    return await popover.present();
  }

  private subscribeMethods(){
    this.events.subscribe('assume', () => {
      console.log("Assumir");
      this.unSubscribeMethods();
    });

      this.events.subscribe('start', () => {
      console.log("Inicar");
      this.unSubscribeMethods();
    });
  
    this.events.subscribe('pause', () => {
      console.log("Pausar");
      this.unSubscribeMethods();
    });
  
    this.events.subscribe('delegate', () => {
      console.log("Delegar");
      this.unSubscribeMethods();
    });
  
    this.events.subscribe('invite', () => {
      console.log("Convidar");
      this.unSubscribeMethods();
    });
  
    this.events.subscribe('requestParticipation', () => {
      console.log("Solicitar Participação");
      this.unSubscribeMethods();
    });

    this.events.subscribe('equipamentStatus', () => {
      console.log("status do equipamento");
      this.unSubscribeMethods();
    });

    this.events.subscribe('checkList', () => {
      console.log("CheckList");
      this.unSubscribeMethods();
    });

  }  

  public unSubscribeMethods(){
    this.events.unsubscribe('assume');
    this.events.unsubscribe('start');
    this.events.unsubscribe('pause');
    this.events.unsubscribe('delegate');
    this.events.unsubscribe('invite');
    this.events.unsubscribe('requestParticipation');
    this.events.unsubscribe('equipamentStatus');
    this.events.unsubscribe('checkList');
  }

  public obterTabs(){
    return [
      {
        route : "resume",
        icon : "clipboard"
      },
      {
        route : "hourWorked",
        icon : "alarm"
      },
      {
        route : "assignature",
        icon : "create"
      }
    ]
  }
}
