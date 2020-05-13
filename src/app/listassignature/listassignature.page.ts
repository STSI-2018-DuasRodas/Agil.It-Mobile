import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-listassignature',
  templateUrl: './listassignature.page.html',
  styleUrls: ['./listassignature.page.scss'],
})
export class ListAssignaturePage implements OnInit {
  public order : any = undefined;

  public assignaturePassword : string = '';

  assignatureVerificationChecked : boolean = false;

  constructor() { }

  ngOnInit() {
    EventEmitterService.get('listOrderData').subscribe((data) => {
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
