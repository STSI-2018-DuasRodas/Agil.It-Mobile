import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {

  listView : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  public changeVisualizationMode(){
    this.listView = !this.listView;
  }
}
