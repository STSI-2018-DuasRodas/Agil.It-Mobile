import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefaultResumePage } from './defaultresume.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultResumePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DefaultResumePage]
})
export class DefaultResumePageModule {}
