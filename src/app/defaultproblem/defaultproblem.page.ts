import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/order/order';
import { DefaultIO } from 'src/app/io/defaultIO';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaultproblem',
  templateUrl: './defaultproblem.page.html',
  styleUrls: ['./defaultproblem.page.scss'],
})
  export class DefaultProblemPage implements OnInit, OnDestroy{
    public order : any = undefined;

    public subscribe : any;

    constructor() {      
    }

    ngOnInit(){
      this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
        this.order = data;        
      });

      EventEmitterService.get('requestOrderData').emit();
    }

    ngOnDestroy(){
      this.subscribe.unsubscribe();
    }
    
  }  




