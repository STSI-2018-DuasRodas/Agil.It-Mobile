import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'Home',
      url: 'home/monitor',
      icon: 'home',
      color: 'secondary'
    },
    {
      title: 'Ordem de Manutenção',
      url: '/resume',
      icon: 'build',
      color: ''
    },
    {
      title: 'Notificações',
      url: 'home/notification',
      icon: 'notifications',
      color: ''
    },
    {
      title: 'Configurações',
      url: 'configuration',
      icon: 'settings',
      color: ''
    },
    {
      title: 'LogOut',
      url: '/login',
      icon: 'wallet'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  selectItemMenu(itemMenu){
    this.appPages.forEach(element => {
      if (element['color']){
        element.color = '';
      }      
    });

    if (itemMenu.title === 'LogOut'){
      return;
    }

    itemMenu.color = 'secondary';
  }
}
