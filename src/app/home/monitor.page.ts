import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {

  listView : boolean = false;
  orders : any = [{}];
  allOrders : boolean = false;
  filter : string;

  constructor() { }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders(){
    let obj = JSON.parse(window.localStorage.getItem("user"));

    if (this.allOrders){
      this.orders = [
        {
          "id": 1,
          "integrationID" : "1000",
          "createdAt": "17/01/2016",
          "deleted": 0,
          "orderNumber": "OM - 2445492/DJ0449",
          "priority": "urgent",
          "type": "preventiva",
          "userId": 1,
          "installationAreaId": 1,
          "orderTypeId": 0,
          "orderClassificationId": 1,
          "orderEquipamentId":1,
          "equipamentName": "DHA03005/007"
        },
        {
          "id": 2,
          "integrationID" : "1001",
          "createdAt": "20/05/2018",
          "deleted": 0,
          "orderNumber": "OM - 2445000/DJ0123",
          "priority": "high",
          "type": "lista",
          "userId": 1,
          "installationAreaId": 1,
          "orderTypeId": 1,
          "orderClassificationId": 1,
          "orderEquipamentId":1,
          "equipamentName": "DHA05505/010 "
        },
        {
          "id": 3,
          "integrationID" : "1003",
          "createdAt": "11/02/2017",
          "deleted": 0,
          "orderNumber": "OM - 2444010/DJ0123",
          "priority": "medium",
          "type": "rota",
          "userId": 2,
          "installationAreaId": 1,
          "orderTypeId": 2,
          "orderClassificationId": 1,
          "orderEquipamentId":1,
          "equipamentName": "DHA01505/007"
        }
      ]
    } else {
      this.orders = [
        {
          "id": 1,
          "integrationID" : "1000",
          "createdAt": "17/01/2016",
          "deleted": 0,
          "orderNumber": "OM - 2445492/DJ0449",
          "priority": "urgent",
          "type": "preventiva",
          "userId": 1,
          "installationAreaId": 1,
          "orderTypeId": 0,
          "orderClassificationId": 1,
          "orderEquipamentId":1,
          "equipamentName": "DHA03005/007"
        },
        {
          "id": 2,
          "integrationID" : "1001",
          "createdAt": "20/05/2018",
          "deleted": 0,
          "orderNumber": "OM - 2445000/DJ0123",
          "priority": "high",
          "type": "lista",
          "userId": 1,
          "installationAreaId": 1,
          "orderTypeId": 1,
          "orderClassificationId": 1,
          "orderEquipamentId":1,
          "equipamentName": "DHA05505/010"
        }
      ]
    }
  }

  public changeVisualizationMode(){
    this.listView = !this.listView;
  }

  public segmentChanged(event : any){
    this.allOrders = event.detail.value == "allOrders";
    this.loadOrders();
  }

  public swipRefresh(event : any) {
    this.allOrders = !this.allOrders;
    this.loadOrders();

    setTimeout(() => {
      event.target.complete();
    }, 200);
  }

  public filterOm(){
    debugger;
    var filtered;
    this.orders.forEach(element => {
      filtered = element.orderNumber.filter(this.filter);
    });
    
  }
}
