import { Component, OnInit } from '@angular/core';
import { Events, PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  page;
  constructor(private events : Events, public popoverController: PopoverController, private navParams : NavParams) { 
    
  }

  ngOnInit() {
    this.page = this.navParams.get('data');
  }

  public dismissPopover() {
    this.events.publish('dismissPopover');
    this.popoverController.dismiss();
  }

  public assume(){
    this.events.publish('assume');
    this.popoverController.dismiss();
  }

  public start(){
    this.events.publish('start');
    this.popoverController.dismiss();
  }

  public pause(){
    this.events.publish('pause');
    this.popoverController.dismiss();
  }

  public cancel(){
    this.events.publish('cancel');
    this.popoverController.dismiss();
  }

  public delegate(){
    this.events.publish('delegate');
    this.popoverController.dismiss();
  }

  public invite(){
    this.events.publish('invite');
    this.popoverController.dismiss();
  }

  public requestParticipation(){
    this.events.publish('requestParticipation');
    this.popoverController.dismiss();
  }

  public equipamentStatus(){
    this.events.publish('equipamentStatus');
    this.popoverController.dismiss();
  }

  public checkList(){
    this.events.publish('checkList');
    this.popoverController.dismiss();
  }

}
