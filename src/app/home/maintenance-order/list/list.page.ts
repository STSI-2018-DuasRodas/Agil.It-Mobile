import { Component, OnInit } from '@angular/core';
import { ListIO } from 'src/app/io/listIO';
import { AgilitUtils } from 'src/app/utils/agilitUtils';
import { PopoverController, Events, MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Order } from 'src/app/order/order';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(public activeRoute : ActivatedRoute, private menuCtrl : MenuController, private agilitUtils : AgilitUtils, public popoverController: PopoverController, private events : Events) { 
    this.loadOrderById(this.activeRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

  public tabs : any = this.obterTabs();
  public listOrder : ListIO;

  public order : any = {}; /* OBJETO QUE VEM DO SERVIDOR */
  public currentPopover = null;

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
      "createdBy": 5,
      "updatedAt": "17/01/2016",
      "updatedBy": 7,
      "deleted": 0,
      "orderNumber": "2445492/DJ0449",
      "priority": "urgent",
      "orderStatus": "assumed",
      "needStopping": false,
      "isStoped": false,
      "exported": false,
      "openedDate": "01/01/2020",
      "defectOriginNote": "O problema foi por causa do parafuso frouxo.",
      "defectSymptomNote": "A valvula esta entupida",
      "type": "Lista",
      "orderType": {
        "id": 1,
        "description": "ZR/LOUCURA",
        "createdAt": "17/01/2016",
        "createdBy": 5,
        "updatedAt": "17/01/2016",
        "updatedBy": 7
      },
      "orderClassification": {
        "id": 1,
        "description": "OMZ/TOP",
        "createdAt": "17/01/2016",
        "createdBy": 5,
        "updatedAt": "17/01/2016",
        "updatedBy": 7
      },
      "orderLayout": {
        "id": 1,
        "description": "Preventiva",
        "orderLayout": "default",
        "createdAt": "17/01/2016",
        "createdBy": 5,
        "updatedAt": "17/01/2016",
        "updatedBy": 7
      },
      "installationArea": {
        "id": 1,
        "description": "Setor B210",
        "sector": {
          "id": 1,
          "description": "TI",
          "createdAt": "17/01/2016",
          "createdBy": 5,
          "updatedAt": "17/01/2016",
          "updatedBy": 7
        },
        "createdAt": "17/01/2016",
        "createdBy": 5,
        "updatedAt": "17/01/2016",
        "updatedBy": 7
      },
      "defectOrigin": {
        "id": 1,
        "description": "Superaquecimento",
        "machineType": {
          "id": 1,
          "description": "Defumadora",
          "createdAt": "17/01/2016",
          "createdBy": 5,
          "updatedAt": "17/01/2016",
          "updatedBy": 7
        },
        "createdAt": "17/01/2016",
        "createdBy": 5,
        "updatedAt": "17/01/2016",
        "updatedBy": 7
      },
      "orderEquipament": [
        {
          "id": 1,
          "equipament": {
            "id": 1,
            "description": "Defumadora Brastemp",
            "machineType": {
              "id": 1,
              "description": "Defumadora",
              "createdAt": "17/01/2016",
              "createdBy": 5,
              "updatedAt": "17/01/2016",
              "updatedBy": 7
            },
            "createdAt": "17/01/2016",
            "createdBy": 5,
            "updatedAt": "17/01/2016",
            "updatedBy": 7
          },
          "superiorEquipament": {
            "installationArea": {
              "id": 1,
              "description": "Setor",
              "createdAt": "17/01/2016",
              "createdBy": 5,
              "updatedAt": "17/01/2016",
              "updatedBy": 7
            },
            "id": 1,
            "description": "Defumadora Superior",
            "createdAt": "17/01/2016",
            "createdBy": 5,
            "updatedAt": "17/01/2016",
            "updatedBy": 7
          },
          "orderOperation": [
            {
              "id": 1,
              "description": "Apertei o parafuso",
              "operationNumber": "123",
              "planningTime": 60,
              "executeTime": 0,
              "executed": true,
              "note": "",
              "expanded": false,
              "orderComponent": [
                {
                  "id": 1,
                  "item": {
                    "id": 1,
                    "description": "Parafuso 6cm",
                    "measurementUnit": {
                      "id": 1,
                      "description": "UN",
                      "createdAt": "17/01/2016",
                      "createdBy": 5,
                      "updatedAt": "17/01/2016",
                      "updatedBy": 7
                    },
                    "createdAt": "17/01/2016",
                    "createdBy": 5,
                    "updatedAt": "17/01/2016",
                    "updatedBy": 7
                  },
                  "quantity": 10,
                  "canBeDeleted": true,
                  "createdAt": "17/01/2016",
                  "createdBy": 5,
                  "updatedAt": "17/01/2016",
                  "updatedBy": 7
                }
              ],
              "createdAt": "17/01/2016",
              "createdBy": 5,
              "updatedAt": "17/01/2016",
              "updatedBy": 7
            },
            {
              "id": 2,
              "description": "Passei alcool em Gel",
              "operationNumber": "456",
              "planningTime": 120,
              "executeTime": 0,
              "executed": false,
              "note": "",
              "expanded": false,
              "orderComponent": [
                {
                  "id": 1,
                  "item": {
                    "id": 1,
                    "description": "Alcool 70 Grau",
                    "measurementUnit": {
                      "id": 1,
                      "description": "UN",
                      "createdAt": "17/01/2016",
                      "createdBy": 5,
                      "updatedAt": "17/01/2016",
                      "updatedBy": 7
                    },
                    "createdAt": "17/01/2016",
                    "createdBy": 5,
                    "updatedAt": "17/01/2016",
                    "updatedBy": 7
                  },
                  "quantity": 5,
                  "canBeDeleted": true,
                  "createdAt": "17/01/2016",
                  "createdBy": 5,
                  "updatedAt": "17/01/2016",
                  "updatedBy": 7
                }
              ],
              "createdAt": "17/01/2016",
              "createdBy": 5,
              "updatedAt": "17/01/2016",
              "updatedBy": 7
            }
          ],
          "workers": {
            "id": 1,
            "description": "José Silveira",
            "createdAt": "17/01/2016",
            "createdBy": 5,
            "updatedAt": "17/01/2016",
            "updatedBy": 7
          }
        }        
      ]
    }

    AgilitUtils.sincronizeObject(this.order, Order.getInstance().orderDefault);
    this.listOrder = Order.getInstance().orderList;
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
