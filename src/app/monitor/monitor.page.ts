import { Component, OnInit, OnChanges } from '@angular/core';
import { ViewUtils } from '../utils/viewUtils';
import { Router } from '@angular/router';
import { AgilitUtils } from '../utils/agilitUtils';
import { Platform } from '@ionic/angular';
import { RestOrder } from '../rest/restorder';
import { AgilitfilterComponent } from '../agilitfilter/agilitfilter.component';
import { DateHelper } from '../utils/Date';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {
  public allOrders: any = [];

  public orders   : any = [];

  public originalMaintenerOrders: any = [];
  public maintenerOrders        : any = [];
  public rowList : any = [];

  public showAllOrders: boolean = false;
  public listView: boolean = false;

  public filters: any = this.createFilterObject();

  constructor(private viewUtils: ViewUtils, private router: Router, private restOrder: RestOrder) { 
    EventEmitterService.get('requestUserInformation').emit();
  }

  async ngOnInit() {
    await this.loadOrderList();
    await this.loadMaintenerOrderList();

    this.orders = this.maintenerOrders;   
    this.prepareRowList();    
  }

  private prepareRowList(){
    this.rowList = [];

    for (let i = 0; i < this.orders.length; i++) {
      if (i %2){
        continue;
      }

      const obj = [];
      obj.push(this.orders[i]);
      
      if ( (i + 1) <= this.orders.length){
        obj.push(this.orders[i + 1]);
      }

      this.rowList.push(obj);
    }
  }

  private async loadOrderList() {
    await this.viewUtils.showProgressBar();

    this.allOrders = [];

    this.restOrder.list(this.filters).then(
      (response: any) => {
        if (response.length == 0) {          
          return;
        }

        this.loadOrderListSucess(response);
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );
  }

  private loadOrderListSucess(response) {
    this.allOrders = AgilitUtils.copy(response);    

    this.allOrders.forEach(element => {
      AgilitUtils.verifyProperty(element, 'orderType', '');
      AgilitUtils.verifyProperty(element, 'priorityFormated', '');
      AgilitUtils.verifyProperty(element, 'openDateFormated', '');
      AgilitUtils.verifyProperty(element, 'orderStatusFormated', '');

      element.orderType        = AgilitUtils.formatValues(element.orderLayout.orderLayout);
      element.priorityFormated = AgilitUtils.formatValues(element.priority);
      element.openDateFormated = DateHelper.formatDate(element.openedDate);
      element.orderStatusFormated = AgilitUtils.formatValues(element.orderStatus);
    });    
  }

  private async loadMaintenerOrderList() {    

    const maintenerID = AgilitStorageUtils.getDataJSON(AgilitStorageTypes.USERDATA);

    if (maintenerID == undefined || maintenerID.id == undefined){
      return;
    }

    this.maintenerOrders = [];

    await this.restOrder.listMaintenerOrders(maintenerID.id, this.filters).then(
      (response : any) => {   
        this.viewUtils.hideProgressBar();        
        if (response.length == 0){
          
          return;
        }

        this.loadMaintenerOrderListSuccess(response);
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );
  }

  loadMaintenerOrderListSuccess(response){
    this.originalMaintenerOrders = response;

    this.maintenerOrders = AgilitUtils.copy(this.originalMaintenerOrders);  

    this.maintenerOrders.forEach(element => {
      AgilitUtils.verifyProperty(element, 'orderType', '');
      AgilitUtils.verifyProperty(element, 'priorityFormated', '');
      AgilitUtils.verifyProperty(element, 'openDateFormated', '');
      AgilitUtils.verifyProperty(element, 'orderStatusFormated', '');

      element.orderType           = AgilitUtils.formatValues(element.orderLayout.orderLayout);
      element.priorityFormated    = AgilitUtils.formatValues(element.priority);
      element.openDateFormated    = DateHelper.formatDate(element.openedDate);
      element.orderStatusFormated = AgilitUtils.formatValues(element.orderStatus);
    });
  }

  public changeVisualizationMode() {
    this.listView = !this.listView;
  }

  public segmentChanged(event: any) {
    if (event.detail.value == 'allOrders'){
      this.orders = this.allOrders;
    }

    if (event.detail.value == 'userOrders'){
      this.orders = this.maintenerOrders;
    }

    this.prepareRowList();
  }

  public swipRefresh(event: any) {
    // this.allOrders = !this.allOrders;
    // this.loadOrders();

    setTimeout(() => {
      event.target.complete();
    }, 200);
  }

  async openFilterModal(){
    const modal = await this.viewUtils.openComponent(AgilitfilterComponent);
    modal.onDidDismiss().then(async (result : any) => {
      if (AgilitUtils.equals(result.role, 'backdrop') || !result.data.dismissed){
        return;
      }

      if (result.data.dismissed && AgilitUtils.isNullOrUndefined(result.data.filters)){
        this.filters = this.createFilterObject()
      } else {
        this.filters = result.data.filters;
      }      
      
      this.orders  = [];
      this.rowList = [];

      await this.loadOrderList();
      await this.loadMaintenerOrderList();
      this.orders = this.maintenerOrders;   
      this.prepareRowList();
    });
  }


  public filterOm() {
    // this.filtredOrders = JSON.parse(JSON.stringify(this.originalOrders));

    // if (this.filter == '') {
    //   return;
    // }

    // this.filtredOrders = this.viewUtils.filterArray(this.filtredOrders, 'orderNumber', this.filter);
  }

  public openSelectOrder(order) {
    if (order == undefined){
      return;
    }

    if (order.orderType == 'Preventiva') {
      this.router.navigateByUrl('home/maintenance-order/' + order.id + '/default');

      return;
    }

    if (order.orderType == 'Lista') {
      this.router.navigateByUrl('home/maintenance-order/' + order.id + '/list');

      return;
    }

    if (order.orderType == 'Rota') {
      this.router.navigateByUrl('home/maintenance-order/' + order.id + '/route');

      return;
    }
  }

  createFilterObject(){
    return {
      initialDate: '',
      finalDate: '',
      status: '',
      priority: '',
      orderType: ''
    }
  }

  public assumeOrder(event) {
    event.stopPropagation();
  }

}
