import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefaultAssignaturePage } from './defaultassignature.page';
import { CustomComponentsModule } from 'src/app/utils/customComponents.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultAssignaturePage
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
  declarations: [DefaultAssignaturePage]
})
export class DefaultAssignaturePageModule {

  constructor(){

  }
}
