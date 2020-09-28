import { Component, OnInit } from '@angular/core';
import { RestNotification } from '../rest/restnotification';
import { AgilitUtils } from '../utils/agilitUtils';
import { ViewUtils } from '../utils/viewUtils';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public notifications : any;
  
  constructor(private restNotification : RestNotification, private viewUtils : ViewUtils) { }

  ngOnInit() {
    this.loadNotifications();
  }

  async loadNotifications(){
    this.viewUtils.showProgressBar();
    await this.restNotification.getUserNotification().then(
      (response: any) => {
        this.viewUtils.hideProgressBar();

        if (AgilitUtils.isNullOrUndefined(response)){
          return;
        }

        this.loadNotificationsSuccess(response);                       
      }
    ).catch(
      error => {
        console.log('Error');
        this.viewUtils.hideProgressBar();
      }
    );    
  }

  loadNotificationsSuccess(response){
    this.notifications = response; 

    for (const notification of this.notifications) {      
      notification.icon = "checkmark";
    }
  }
}
