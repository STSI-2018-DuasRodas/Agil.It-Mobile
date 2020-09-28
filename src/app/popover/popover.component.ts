import { Component, OnInit, Input } from '@angular/core';
import { Events, PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @Input() data : any;

  public fieldsActions : any = this.createFieldsActions();
  page;
  constructor(private events : Events, public popoverController: PopoverController, private navParams : NavParams) { 
    
  }
  
  createFieldsActions(){
    return {
      created : true,
      assumed : true,
      started : true,
      paused : true,
      stopped : true,
      canceled : true,
      signature_pending : true,
      signatured : true,
      finished : true
    }
  }

  ngOnInit() {
    this.page = this.navParams.get('data');
    this.configFields()    ;
  }

  configFields(){
    if (this.data.orderStatus == 'canceled' || this.data.orderStatus == 'finished'){
      return;
    }

    if (this.data.orderStatus == 'created'){
      this.fieldsActions.assumed  = false;
    } else if (this.data.orderStatus == 'assumed'){
      this.fieldsActions.started  = false;
      this.fieldsActions.canceled = false;
      this.fieldsActions.finished = false;
    } else if (this.data.orderStatus == 'started'){
      this.fieldsActions.paused   = false;
      this.fieldsActions.stopped  = false;
      this.fieldsActions.finished = false;
    } else if (this.data.orderStatus == 'paused'){
      this.fieldsActions.started  = false;
      this.fieldsActions.canceled = false;
      this.fieldsActions.finished = false;
    } else if (this.data.orderStatus == 'stopped'){
      this.fieldsActions.started  = false;
      this.fieldsActions.canceled = false;
      this.fieldsActions.finished = false;
    } else if (this.data.orderStatus == 'signature_pending'){
      this.fieldsActions.signatured = false;
      this.fieldsActions.canceled   = false;
    } else if (this.data.orderStatus == 'signatured'){
      this.fieldsActions.finished = false;
    }
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

  public checkList(){
    this.events.publish('checkList');
    this.popoverController.dismiss();
  }

}
