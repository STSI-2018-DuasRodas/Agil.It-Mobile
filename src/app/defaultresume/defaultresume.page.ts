import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order/order';
import { Events } from '@ionic/angular';
import { DefaultIO } from 'src/app/io/defaultIO';
import { ListIO } from 'src/app/io/listIO';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class DefaultResumePage implements OnInit {
  
  constructor() { 
  }

  ngOnInit() {
    
  }

}
