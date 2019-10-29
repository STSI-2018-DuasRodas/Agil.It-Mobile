import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-order',
  templateUrl: './maintenance-order.page.html',
  styleUrls: ['./maintenance-order.page.scss'],
})
export class MaintenanceOrderPage implements OnInit {

  public tabs : any = this.obterTabs();

  constructor() { }

  ngOnInit() {
  }

  public obterTabs(){
    return [
      {
        route : "resume",
        icon : "clipboard"
      },
      {
        route : "problem",
        icon : "information-circle"
      },
      {
        route : "component",
        icon : "build"
      },
      {
        route : "hourWorked",
        icon : "time"
      },
      {
        route : "assignature",
        icon : "create"
      }
    ]
  }

}
