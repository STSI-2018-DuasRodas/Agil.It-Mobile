import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventEmitterService } from '../eventemitter/eventemitter.service';

@Component({
  selector: 'app-listresume',
  templateUrl: './listresume.page.html',
  styleUrls: ['./listresume.page.scss'],
})
export class ListResumePage implements OnInit, OnDestroy {
  public order : any = undefined;

  public subscribe : any;

  constructor() { }

  ngOnInit() {    
    this.subscribe = EventEmitterService.get('listOrderData').subscribe((data) => {
      this.order = data;

      console.log(this.order);
    });
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
