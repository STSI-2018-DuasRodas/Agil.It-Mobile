import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order/order';
import { DefaultIO } from 'src/app/io/defaultIO';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
})
  export class ProblemsPage implements OnInit{
    public defaultOrder : DefaultIO;

    constructor() {
      this.defaultOrder = Order.getInstance().orderDefault;
    }

    ngOnInit(){
      
    }
  }  




