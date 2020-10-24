import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ViewUtils } from 'src/app/utils/viewUtils';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { RestOrder } from '../rest/restorder';
import { AgilitUtils } from '../utils/agilitUtils';
import { DateHelper } from '../utils/Date';
import { IonContent, IonTextarea } from '@ionic/angular';
import { AgilitStorageTypes, AgilitStorageUtils } from '../utils/AgilitStorageUtils';

@Component({
  selector: 'app-defaulthourworked',
  templateUrl: './defaulthourworked.page.html',
  styleUrls: ['./defaulthourworked.page.scss'],
})
export class DefaultHourWorkedPage implements OnInit, OnDestroy {
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
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
    });

    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
