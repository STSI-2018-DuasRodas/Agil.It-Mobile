import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss'],
})
export class OrderlistComponent implements OnInit {
  @Input() data : any;
  @Output() openOrder = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  openSelectedOrder(){
    if (this.data.id == undefined){
      return;
    }

    this.openOrder.emit(this.data);
  }
}
