import { Component, OnInit } from '@angular/core';
import { ViewUtils } from '../utils/viewUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {

  listView          : boolean = false;
  filtredOrders     : any     = [{}] ;
  originalOrders    : any     = [{}] ;
  allOrders         : boolean = false;
  filter            : string         ;

  constructor(private viewUtils : ViewUtils, private router: Router) { }

  ngOnInit() {
    this.loadOrders();
  }

  private loadOrders(){
    let obj = JSON.parse(window.localStorage.getItem("user"));

    if (this.allOrders){
      this.originalOrders = [
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
      this.originalOrders = [
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

    this.filtredOrders = JSON.parse(JSON.stringify(this.originalOrders));
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
    this.filtredOrders = JSON.parse(JSON.stringify(this.originalOrders));
    
    if (this.filter == ''){      
      return;
    }

    this.filtredOrders = this.viewUtils.filterArray(this.filtredOrders, 'orderNumber', this.filter);
  }

  public openOrder(obj : any){
    this.router.navigateByUrl('/home/maintenance-order/' + obj.id);
  }

  public assumeOrder(event){
    event.stopPropagation();
  }
  
}
