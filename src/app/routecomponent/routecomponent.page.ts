import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routecomponent',
  templateUrl: './routecomponent.page.html',
  styleUrls: ['./routecomponent.page.scss'],
})
export class RouteComponentPage implements OnInit {
  items: any[] = [];

  constructor() { 
    this.loadComponents();
  }

  ngOnInit() {
  }

  public loadComponents(){
    this.items.push(
      {
        name: 'Alicate',
        description: 'Alicate de corte - 01 UN'
      },
      {
        name: 'Alicate',
        description: 'Alicate universal - 01 UN'
      },
      {
        name: 'Parafuso',
        description: 'Parafuso Fenda 6cm - 08 UN'
      },
      {
        name: 'Parafuso',
        description: 'Parafuso Fenda 6cm - 08 UN'
      },
      {
        name: 'Parafuso',
        description: 'Parafuso Fenda 6cm - 08 UN'
      },
    );
  }
}
