import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HourWorkedPage } from './hour-worked.page';

const routes: Routes = [
  {
    path: '',
    component: HourWorkedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HourWorkedPage]
})
export class HourWorkedPageModule {}
