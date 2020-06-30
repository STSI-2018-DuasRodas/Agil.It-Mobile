import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MenuController, PopoverController, Events, ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Order } from 'src/app/order/order';
import { AgilitUtils, AgilitOrderStatus } from 'src/app/utils/agilitUtils';
import { DefaultIO } from 'src/app/io/defaultIO';
import { RestOrder } from 'src/app/rest/restorder';
import { ViewUtils } from 'src/app/utils/viewUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { ChecklistComponent } from '../checklist/checklist.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit, OnDestroy{
  public tabs  : any = this.defineTabs();
  public order : any = this.createOrderObject();

  public currentPopover = null;
  public requestOrderData : any;
  
  constructor(public activeRoute : ActivatedRoute, private menuCtrl : MenuController, public popoverController: PopoverController, private events : Events, private agilitUtils : AgilitUtils, private restOrder : RestOrder,  private viewUtils: ViewUtils, public modalController: ModalController, public alertController: AlertController, private changeDetectorRef: ChangeDetectorRef) {    
  }

  async ngOnInit() {    
    await this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));

    this.requestOrderData = EventEmitterService.get('requestOrderData').subscribe(() => {
      this.emitOrderEvent();
    });
  }

  ngOnDestroy(){
    this.requestOrderData.unsubscribe();
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }

  public defineTabs(){
    return [
      {
        route : "resume",
        icon : "clipboard"
      },
      {
        route : "problem",
        icon : "alert"
      },
      {
        route : "operation",
        icon : "construct"
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

  emitOrderEvent(){
    EventEmitterService.get('defaultOrderData').emit(this.order);
  }

  loadOrderSuccess(){
    if (AgilitUtils.isNullOrUndefined(this.order)){
      return;
    }  
    
    AgilitUtils.verifyProperty(this.order, 'orderType', '');
    AgilitUtils.verifyProperty(this.order, 'orderStatusFormated', '');
    AgilitUtils.verifyProperty(this.order, 'priorityFormated', '');
    AgilitUtils.verifyProperty(this.order, 'openDateFormated', '');

    this.order.orderType           = AgilitUtils.formatValues(this.order.orderLayout.orderLayout);
    this.order.priorityFormated    = AgilitUtils.formatValues(this.order.priority);
    this.order.orderStatusFormated = AgilitUtils.formatValues(this.order.orderStatus);
    this.order.openDateFormated    = new Date(this.order.openedDate).getDate() + '/' + new Date(this.order.openedDate).getMonth() + '/' + new Date(this.order.openedDate).getFullYear();    
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
      this.presentAlertConfirm('Assumir!', 'Você deseja assumir esta Ordem de Manutenção?', AgilitOrderStatus.ASSUMED);
      this.unSubscribeMethods();
    });

      this.events.subscribe('start', () => {
        this.presentAlertConfirm('Iniciar!', 'Você deseja dar início a esta Ordem de Manutenção?', AgilitOrderStatus.STARTED);
      this.unSubscribeMethods();
    });
  
    this.events.subscribe('pause', () => {
      this.presentAlertConfirm('Pausar!', 'Você deseja pausar esta Ordem de Manutenção?', AgilitOrderStatus.PAUSED);
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

    this.events.subscribe('cancel', () => {
      this.presentAlertConfirm('Cancelar!', 'Você deseja cancelar esta Ordem de Manutenção?', AgilitOrderStatus.CANCELED);
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
      this.presentCheckListModal();
      this.unSubscribeMethods();
    });

  }  

  async presentCheckListModal() {
    const modal = await this.modalController.create({
      component: ChecklistComponent
    });
    return await modal.present();
  }

  async presentAlertConfirm(messageHeader : string, messageBody : string, agilitOrderStatus : AgilitOrderStatus) {
    const alert = await this.alertController.create({
      cssClass: '',
      header: messageHeader,
      message: messageBody,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: '',
          handler: (blah) => {
            // Ao clicar em não
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.maintenanceOrderActions(agilitOrderStatus);
          }
        }
      ]
    });

    await alert.present();
  }

  maintenanceOrderActions(agilitOrderStatus : AgilitOrderStatus){
    this.restOrder.orderActions(this.order.id, agilitOrderStatus);
    this.order.orderStatus = agilitOrderStatus;

    this.order.orderStatusFormated = AgilitUtils.formatValues(this.order.orderStatus);
    this.changeDetectorRef.detectChanges();
  }

  public unSubscribeMethods(){
    this.events.unsubscribe('assume');
    this.events.unsubscribe('start');
    this.events.unsubscribe('pause');
    this.events.unsubscribe('delegate');
    this.events.unsubscribe('invite');
    this.events.unsubscribe('cancel');
    this.events.unsubscribe('requestParticipation');
    this.events.unsubscribe('equipamentStatus');
    this.events.unsubscribe('checkList');
  }
  
}


