import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AgilitUtils } from '../utils/agilitUtils';
import { RestOrder } from '../rest/restorder';
import { ViewUtils } from '../utils/viewUtils';

@Component({
  selector: 'app-agilitfilter',
  templateUrl: './agilitfilter.component.html',
  styleUrls: ['./agilitfilter.component.scss'],
})
export class AgilitfilterComponent implements OnInit {
  @Input() data : any;

  public filters               : any = this.createFilterObject();
  public equipmentFilter       : any;
  public selectedEquipment     : any = {};
  public maintenanceOrderTypes : any = [];
  public equipments            : any = [];

  constructor(private popoverController : PopoverController, private restOrder : RestOrder, private viewUtils : ViewUtils) { }

  ngOnInit() {
    this.loadOMTypes();
    console.log(this.data);
  }

  async loadOMTypes(){
    await this.restOrder.listOMTypes().then(
      (response : any) => {   
        this.viewUtils.hideProgressBar();
        if (AgilitUtils.isEmptyArray(response)){
          return;
        }

        this.maintenanceOrderTypes = response;
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );
  }

  equipmentSelected(item){
    this.selectedEquipment = item;
    this.equipmentFilter   = item.description;
    this.filters.equipment = item.id;
    this.equipments        = [];  
  }

  createFilterObject(){
    return {
      orderNumber: '',
      orderEquipment: '',
      initialDate: '',
      finalDate: '',
      orderStatus: [],
      priority: [],
      orderType: []
    }
  }

  async loadEquipments(){
    if (this.equipmentFilter.length < 3){
      this.equipments = [];
      return;
    }

    if (this.equipmentFilter == this.selectedEquipment.description){
      return;
    }

    await this.viewUtils.showProgressBar();    
    await this.restOrder.listEquipments(this.equipmentFilter).then(
      (response: any) => {
        this.viewUtils.hideProgressBar();
        this.equipments = response || [];
      }
    ).catch(
      error => {
        this.viewUtils.showToast('Algo de errado aconteceu!', 2000, false);        
        this.viewUtils.hideProgressBar();
      }
    ); 
  }

  confirmFilters(){    
    if (this.filters.finalDate != ''){
      this.filters.finalDate = this.filters.finalDate + 'T23:59:59';
    }
    

    const filtersToResult = {
      ...this.filters,
      openedDate: {
        from: this.filters.initialDate,
        to: this.filters.finalDate
      },
      initialDate : undefined,
      finalDate : undefined,
      orderLayout : this.filters.orderType,
      orderType : undefined,
      ...(this.filters.orderNumber?{orderNumber: `like(${this.filters.orderNumber})`} : '')
    };
    
    this.popoverController.dismiss({'dismissed': true, filters: filtersToResult});
  }

  clearFilter(){

  }

  cancelFilters(){
    this.popoverController.dismiss({'dismissed': false});
  }

  clearFilters(){
    this.popoverController.dismiss({'dismissed': true, filters: undefined});
  }

}
