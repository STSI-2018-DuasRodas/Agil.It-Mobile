import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListAssignaturePage } from './listassignature.page';
import { CustomComponentsModule } from '../utils/customComponents.module';

const routes: Routes = [
  {
    path: '',
    component: ListAssignaturePage
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
  declarations: [ListAssignaturePage]
})
export class ListassignaturePageModule {}
