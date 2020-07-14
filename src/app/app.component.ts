import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EventEmitterService } from './eventemitter/eventemitter.service';
import { AgilitUtils } from './utils/agilitUtils';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public userData : any = undefined;
  
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

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.initializeApp();

    const userInformation = EventEmitterService.get('requestUserInformation').subscribe((data) => {
      if (AgilitUtils.isNullOrUndefined(data)){
        return;
      }
      
      this.userData = data;
      AgilitUtils.verifyProperty(this.userData, 'roleFormatted', AgilitUtils.formatValues(this.userData.role)); 
      userInformation.unsubscribe();
      console.log(this.userData);
    });
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
