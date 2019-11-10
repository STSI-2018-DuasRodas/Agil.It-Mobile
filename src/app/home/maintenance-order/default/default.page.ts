import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

  public tabs : any = this.obterTabs();
  order : any = {};
  
  constructor(public activeRoute : ActivatedRoute, private menuCtrl : MenuController) {
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
}
