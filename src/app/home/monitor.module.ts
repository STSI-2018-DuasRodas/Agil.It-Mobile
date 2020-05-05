import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MonitorPage } from './monitor.page';
import { CustomComponentsModule } from '../utils/customComponents.module';
import { OrdercardComponent } from '../ordercard/ordercard.component';

const routes: Routes = [
  {
    path: '',
    component: MonitorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonitorPage]
})
  
export class MonitorPageModule {}
