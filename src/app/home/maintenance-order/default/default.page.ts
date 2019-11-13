import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController, Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

  public tabs : any = this.obterTabs();
  order : any = {};
  currentPopover = null;
  
  constructor(public activeRoute : ActivatedRoute, private menuCtrl : MenuController, public popoverController: PopoverController, private events : Events) {
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

  public obterTabs(){
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
        route : "components",
        icon : "build"
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

  public loadOrderById(idOrder : string){
    this.order = {
      "id": 1,
      "integrationID" : "1000",
      "createdAt": "17/01/2016",
      "deleted": 0,
      "orderNumber": "OM - 2445492/DJ0449",
      "priority": "urgent",
      "type": "Preventiva",
      "userId": 1,
      "installationAreaId": 1,
      "orderTypeId": 0,
      "orderClassificationId": 1,
      "orderEquipamentId":1,
      "equipamentName": "DHA03005/007"
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


