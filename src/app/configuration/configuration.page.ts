import { Component, OnInit, Inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';

const themes = {
  primary: '#FFFFFF',
  secondary: '#8B008B',
  tertiary: '#8B008B',
  medium: '#8B008B',
  light: '#8B008B'
}

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 800,
    
  };

  constructor(private menuCtrl : MenuController, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  } 
}
