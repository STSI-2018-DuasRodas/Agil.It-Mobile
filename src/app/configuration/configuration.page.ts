import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor(private menuCtrl : MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }

  teste(){

  }
}
