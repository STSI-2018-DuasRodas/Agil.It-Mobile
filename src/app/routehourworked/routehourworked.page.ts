import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { ViewUtils } from '../utils/viewUtils';
import { IonContent, IonTextarea } from '@ionic/angular';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';

@Component({
  selector: 'app-routehourworked',
  templateUrl: './routehourworked.page.html',
  styleUrls: ['./routehourworked.page.scss'],
})
export class RouteHourworkedPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;  

  public order        : any;
  public subscribe    : any;  
  public editingItem  : any = {};
  public hoursAponted : any = [];  

  public total        : string;    

  public index        : number;

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder) { }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('routeOrderData').subscribe((data) => {
      this.order = data;      
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
