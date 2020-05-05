import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController, Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Order } from 'src/app/order/order';
import { AgilitUtils } from 'src/app/utils/agilitUtils';
import { DefaultIO } from 'src/app/io/defaultIO';
import { RestOrder } from 'src/app/rest/restorder';
import { ViewUtils } from 'src/app/utils/viewUtils';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

  public tabs  : any = this.defineTabs();
  public order : any = this.createOrderObject();

  public defaultOrder : DefaultIO;
  public currentPopover = null;
  
  constructor(public activeRoute : ActivatedRoute, private menuCtrl : MenuController, public popoverController: PopoverController, private events : Events, private agilitUtils : AgilitUtils, private restOrder : RestOrder,  private viewUtils: ViewUtils) {
    this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
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
        route : "problems",
        icon : "alert"
      },
      {
        route : "operations",
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

  public async loadOrderById(idOrder : string){
    if (idOrder == ''){
      return;
    }

    await this.viewUtils.showProgressBar();
    this.restOrder.loadOrder(idOrder).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }

        Order.getInstance().orderDefault = response;
        this.order = Order.getInstance().orderDefault;        
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );    
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


