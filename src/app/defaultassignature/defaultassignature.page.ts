import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/order/order';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaultassignature',
  templateUrl: './defaultassignature.page.html',
  styleUrls: ['./defaultassignature.page.scss'],
})
export class DefaultAssignaturePage implements OnInit, OnDestroy {
  public order : any = undefined;

  public assignaturePassword : string = '';
  public subscribe : any;

  assignatureVerificationChecked : boolean = false;

  constructor() { }

  ngOnInit() {
    this.subscribe = EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
    });
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

  assineOm(){
    if (this.assignaturePassword != window.localStorage.getItem("password")){
      return;
    }

    
  }
}
