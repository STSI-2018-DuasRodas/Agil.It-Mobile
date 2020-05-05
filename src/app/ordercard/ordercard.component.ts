import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ordercard',
  templateUrl: './ordercard.component.html',
  styleUrls: ['./ordercard.component.scss'],
})
export class OrdercardComponent implements OnInit {
  @Input()  data : any;
  @Output() openOrder = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit() {}

  openSelectedOrder(){
    if (this.data.id == undefined){
      return;
    }

    this.openOrder.emit(this.data);
  }

}
