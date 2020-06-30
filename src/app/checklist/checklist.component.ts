import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewUtils } from '../utils/viewUtils';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {
  public checkLists : any = this.loadCheckList();

  constructor(private modalCtrl : ModalController, private viewUtils : ViewUtils) { }

  ngOnInit() {

  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  loadCheckList(){
    return [
      {
        description: "Colocar Luva",
        isCheck : false
      },
      {
        description: "Coloacr Capacete",
        isCheck : true
      }
    ]
  }

  confirmChecklist(){

  }
}
