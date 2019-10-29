import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './login/login.module';
import { HomePageModule } from './home/home.module';
import { MaintenanceOrderPageModule } from './home/maintenance-order/maintenance-order.module';
import { MonitorPageModule } from './home/monitor.module';
import { NotificationPageModule } from './home/notification.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    LoginPageModule,
    HomePageModule,
    MaintenanceOrderPageModule,
    MonitorPageModule,
    NotificationPageModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
