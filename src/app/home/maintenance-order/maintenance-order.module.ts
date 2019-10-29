import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderPage } from './maintenance-order.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaintenanceOrderPage]
})
export class MaintenanceOrderPageModule {}
