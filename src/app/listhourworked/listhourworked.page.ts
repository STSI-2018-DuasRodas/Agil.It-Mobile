import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ViewUtils } from '../utils/viewUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { AgilitUtils } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { RestOrder } from '../rest/restorder';
import { IonContent, IonTextarea } from '@ionic/angular';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';

@Component({
  selector: 'app-listhourworked',
  templateUrl: './listhourworked.page.html',
  styleUrls: ['./listhourworked.page.scss'],
})
export class ListHourworkedPage implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  @ViewChild('focus', { static: false })  inputElement: IonTextarea;
  
  public order        : any     = undefined;
  public hoursAponted : any     = [];  
  public index        : number;
  public id           : string;
  public description  : string;
  public date         : string;
  public initialHour  : string;
  public finalHour    : string;
  public total        : string;
  public interval     : string;
  public subscribe    : any;

  constructor(private viewUtils : ViewUtils, private restOrder : RestOrder){
  }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('listOrderData').subscribe((data) => {
      this.order = data;
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}