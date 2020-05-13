import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RouteHourworkedPage } from './routehourworked.page';

const routes: Routes = [
  {
    path: '',
    component: RouteHourworkedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RouteHourworkedPage]
})
export class RouteHourworkedPageModule {}
