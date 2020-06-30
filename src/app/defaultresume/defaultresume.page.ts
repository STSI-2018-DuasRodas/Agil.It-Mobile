import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/order/order';
import { Observable } from 'rxjs';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaultresume',
  templateUrl: './defaultresume.page.html',
  styleUrls: ['./defaultresume.page.scss'],
})
export class DefaultResumePage implements OnInit, OnDestroy {
  public order : any = undefined;

  public subscribe : any;
  
  constructor() { 
  }  

  ngOnInit() {    
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
      console.log(this.order);
    });    
    
    EventEmitterService.get('requestOrderData').emit();
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }  
  
}
