import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ViewUtils } from '../utils/viewUtils';
import { RestOrder } from '../rest/restorder';
import { AgilitOrderStatus, AgilitUtils } from '../utils/agilitUtils';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController, Events, MenuController, ModalController, AlertController } from '@ionic/angular';
import { DateHelper } from '../utils/Date';
import { ChecklistComponent } from '../checklist/checklist.component';
import { AgilitActionUtils } from '../utils/AgilitActionUtils';

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit, OnDestroy {  
  public order : any = this.createOrderObject();
  public requestOrderData : any;
  public currentPopover = null;

  constructor(private agilitActionUtils : AgilitActionUtils, private alertController : AlertController, private modalController : ModalController, private menuCtrl : MenuController, public activeRoute : ActivatedRoute, private viewUtils : ViewUtils, private restOrder : RestOrder, public popoverController: PopoverController, private events : Events, private changeDetectorRef: ChangeDetectorRef) { }

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

  public emitOrderEvent(){
    EventEmitterService.get('routeOrderData').emit(this.order);
  }

  public loadOrderSuccess(){
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
    this.order.openDateFormated    = DateHelper.formatDate(this.order.openedDate);
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
      componentProps: {
        data: this.order
      },
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
      this.presentAlertConfirm('Delegar!', 'Você deseja delegar esta Ordem de Manutenção?', AgilitOrderStatus.DELEGATE);
      this.unSubscribeMethods();
    });
  
    this.events.subscribe('invite', () => {
      // this.presentAlertConfirm('Convidar!', 'Você deseja convidar alguém?', AgilitOrderStatus.INVITE);
      this.unSubscribeMethods();
    });
  
    this.events.subscribe('requestParticipation', () => {
      // this.presentAlertConfirm('Convidar!', 'Você deseja convidar alguém?', AgilitOrderStatus.INVITE);
      this.unSubscribeMethods();
    });

    this.events.subscribe('cancel', () => {
      this.presentAlertConfirm('Cancelar!', 'Você deseja cancelar esta Ordem de Manutenção?', AgilitOrderStatus.CANCELED);
      this.unSubscribeMethods();
    });

    this.events.subscribe('checkList', () => {
      this.presentCheckListModal(false);
      this.unSubscribeMethods();
    });

  }  

  async presentCheckListModal(action = true) {
    const modal = await this.modalController.create({
      component: ChecklistComponent,
      componentProps: {
        orderId: this.order.id
      }
    });
    
    modal.onDidDismiss().then((data) => {
      if(!data.data.dismissed){
        return;
      }

      if (action){
        this.maintenanceOrderActions(AgilitOrderStatus.STARTED);
      }      
    });

    await modal.present();
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
          }
        }, {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            if (agilitOrderStatus == AgilitOrderStatus.STARTED){
              this.presentCheckListModal();
              return;   
            }
            
            this.maintenanceOrderActions(agilitOrderStatus);
          }
        }
      ]
    });

    await alert.present();
  }

  async maintenanceOrderActions(agilitOrderStatus : AgilitOrderStatus){
    try {
      const response : any = await this.agilitActionUtils.changeStatus(this.order.id, agilitOrderStatus);

      this.order.orderStatus         = response.status;
      this.order.orderStatusFormated = AgilitUtils.formatValues(response.status);

      this.changeDetectorRef.detectChanges();
    } catch (error) {
      console.error(error);
    }
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
