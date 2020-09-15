import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefaultProblemPage } from './defaultproblem.page';
import { CustomComponentsModule } from 'src/app/utils/customComponents.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultProblemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CustomComponentsModule
  ],
  declarations: [DefaultProblemPage]
})
export class DefaultProblemPageModule {}
