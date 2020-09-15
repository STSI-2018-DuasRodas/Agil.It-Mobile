import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefaultOperationPage } from './defaultoperation.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultOperationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DefaultOperationPage]
})
export class DefaultOperationPageModule {}
