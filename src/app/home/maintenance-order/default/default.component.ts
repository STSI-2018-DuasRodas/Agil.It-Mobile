import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  public tabs : any = this.obterTabs();

  constructor() { }

  ngOnInit() {}

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
