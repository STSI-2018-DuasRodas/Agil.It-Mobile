import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {
  items: any[] = [];

  constructor() { 
    this.loadComponents();
  }

  ngOnInit() {
  }

  public loadComponents(){
    for (let i = 0; i < 50; i++) {
      this.items.push({
        name: 'Alicate ' + ' N' + i,
        description: 'Alicate de corte - 01 UN'
      });
    }
  }
}
