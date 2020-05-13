import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order/order';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-defaultassignature',
  templateUrl: './defaultassignature.page.html',
  styleUrls: ['./defaultassignature.page.scss'],
})
export class DefaultAssignaturePage implements OnInit {
  public order : any = undefined;

  public assignaturePassword : string = '';

  assignatureVerificationChecked : boolean = false;

  constructor() { }

  ngOnInit() {
    EventEmitterService.get('defaultOrderData').subscribe((data) => {
      this.order = data;
      console.log(this.order);
    });
  }

  assineOm(){
    if (this.assignaturePassword != window.localStorage.getItem("password")){
      return;
    }

    
  }
}
