import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ListIO } from 'src/app/io/listIO';
import { AgilitOrderStatus, AgilitUtils } from 'src/app/utils/agilitUtils';
import { PopoverController, Events, MenuController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Order } from 'src/app/order/order';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';
import { DateHelper } from '../utils/Date';
import { ChecklistComponent } from '../checklist/checklist.component';
import { AgilitActionUtils } from '../utils/AgilitActionUtils';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {  
  public order : any = this.createOrderObject();

  public tabs : any = this.obterTabs();

  public currentPopover = null;
  public requestOrderData : any;

  constructor(private agilitActionUtils : AgilitActionUtils, private modalController : ModalController, private alertController : AlertController, public activeRoute : ActivatedRoute, private menuCtrl : MenuController, private agilitUtils : AgilitUtils, public popoverController: PopoverController, private events : Events, private restOrder : RestOrder, private viewUtils : ViewUtils, private changeDetectorRef: ChangeDetectorRef) {     
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
    AgilitUtils.verifyProperty(this.order, 'orderStatusFormated', '');
    AgilitUtils.verifyProperty(this.order, 'priorityFormated', '');
    AgilitUtils.verifyProperty(this.order, 'openDateFormated', '');

    this.order.orderType           = AgilitUtils.formatValues(this.order.orderLayout.orderLayout);
    this.order.priorityFormated    = AgilitUtils.formatValues(this.order.priority);
    this.order.orderStatusFormated = AgilitUtils.formatValues(this.order.orderStatus);
    this.order.openDateFormated    = DateHelper.formatDate(this.order.openedDate);

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

  defineColor(){
    if (this.order.priority == 'urgent'){
      return 'primary';
    }

    if (this.order.priority == 'high'){
      return 'warning';
    }

    if (this.order.priority == 'medium'){
      return 'medium';
    }

    if (this.order.priority == 'low'){
      return 'light';
    }

    return 'secondary'
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
