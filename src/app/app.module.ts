import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './login/login.module';
import { HomePageModule } from './home/home.module';
import { MonitorPageModule } from './home/monitor.module';
import { NotificationPageModule } from './home/notification.module';
import { HttpProvider } from './http/http';
import { LoginRest } from './rest/loginRest';
import { ViewUtils } from './utils/viewUtils';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { PopoverComponent } from './popover/popover.component';
import { CustomComponentsModule } from './utils/customComponents.module';
import { AgilitUtils } from './utils/agilitUtils';
import { CadOperationComponent } from './cad-operation/cad-operation.component';
import { RestOrder } from './rest/restorder';

library.add(fas, far, fab);
@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    CadOperationComponent
  ],
  entryComponents: [PopoverComponent, CadOperationComponent],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    HomePageModule,
    MonitorPageModule,
    NotificationPageModule,
    CustomComponentsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpProvider,
    ViewUtils,
    LoginRest,
    RestOrder,
    AgilitUtils,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
