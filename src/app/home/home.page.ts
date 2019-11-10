import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

  public tabs : any = this.obterTabs();

  public obterTabs(){
    return [
      {
        route : "monitor",
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
