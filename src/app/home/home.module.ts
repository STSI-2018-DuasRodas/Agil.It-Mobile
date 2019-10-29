import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { MonitorPageModule } from './monitor.module';
import { NotificationPageModule } from './notification.module';

const routes : Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "monitor",
        loadChildren: "./monitor.module#MonitorPageModule"
      },
      {
        path: "notification",
        loadChildren: "./notification.module#NotificationPageModule"
      },
      {
        path: "",
        redirectTo: "monitor",
        pathMatch: "full"
      }
    ]
  },
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorPageModule,
    NotificationPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
