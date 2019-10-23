import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public tabs : any = this.obterTabs();
  // public notificationPage = NotificationPage;

  public obterTabs(){    
    return [
      {
        route : "ordem-manutencao",
        icon : "filing",
        name : "Ordens",
        notification : ""
      },
      {
        route : "notification",
        icon : "notifications",
        name : "Notificação",
        notification : "2"
      }
    ] 
  }
  
}
