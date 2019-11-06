import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance-order',
  templateUrl: './maintenance-order.page.html',
  styleUrls: ['./maintenance-order.page.scss'],
})
export class MaintenanceOrderPage implements OnInit {

  order : any;

  constructor(public activeRoute : ActivatedRoute) {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.loadFullOrderData(Number(id));
   }

  ngOnInit() {

  }

  public loadFullOrderData(id : number){
    this.order = {
      "id": 1,
      "integrationID" : "1000",
      "createdAt": "17/01/2016",
      "deleted": 0,
      "orderNumber": "OM - 2445492/DJ0449",
      "priority": "urgent",
      "type": "preventiva",
      "userId": 1,
      "installationAreaId": 1,
      "orderTypeId": id - 1,
      "orderClassificationId": 1,
      "orderEquipamentId":1,
      "equipamentName": "DHA03005/007"
    }
  }

  

}
