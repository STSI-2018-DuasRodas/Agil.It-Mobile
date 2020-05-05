import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cad-operation',
  templateUrl: './cad-operation.component.html',
  styleUrls: ['./cad-operation.component.scss'],
})
export class CadOperationComponent implements OnInit {

  constructor(navParams: NavParams, private modalCtrl : ModalController) { 
    
  }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
