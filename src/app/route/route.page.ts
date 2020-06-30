import { Component, OnInit } from '@angular/core';
import { ViewUtils } from '../utils/viewUtils';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController, Events } from '@ionic/angular';

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {  
  public order : any = this.createOrderObject();
  public requestOrderData : any;
  public currentPopover = null;

  constructor(public activeRoute : ActivatedRoute, private viewUtils : ViewUtils, private restOrder : RestOrder, public popoverController: PopoverController, private events : Events) { }

  async ngOnInit() {
    await this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));

    this.requestOrderData = EventEmitterService.get('requestOrderData').subscribe(() => {
      this.emitOrderEvent();
    });
  }

  public tabs : any = this.obterTabs();

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

  async loadOrderById(idOrder : string){
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
        this.emitOrderEvent();
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );    
  }

  public loadOrderSuccess(){
    if (AgilitUtils.isNullOrUndefined(this.order)){
      return;
    }  
    
    AgilitUtils.verifyProperty(this.order, 'orderType', '');
    AgilitUtils.verifyProperty(this.order, 'priorityFormated', '');
    AgilitUtils.verifyProperty(this.order, 'openDateFormated', '');

    this.order.orderType        = AgilitUtils.formatValues(this.order.orderLayout.orderLayout);
    this.order.priorityFormated = AgilitUtils.formatValues(this.order.priority);
    this.order.openDateFormated = new Date(this.order.openedDate).getDate() + '/' + new Date(this.order.openedDate).getMonth() + '/' + new Date(this.order.openedDate).getFullYear();    
  }

  public emitOrderEvent(){
    EventEmitterService.get('routeOrderData').emit(this.order);
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
}
