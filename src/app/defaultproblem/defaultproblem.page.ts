import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/order/order';
import { DefaultIO } from 'src/app/io/defaultIO';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaultproblem',
  templateUrl: './defaultproblem.page.html',
  styleUrls: ['./defaultproblem.page.scss'],
})
  export class DefaultProblemPage implements OnInit{
    public order : any = undefined;

    constructor() {      
    }

    ngOnInit(){
      EventEmitterService.get('defaultOrderData').subscribe((data) => {
        this.order = data;        
      });
    }

    
  }  




