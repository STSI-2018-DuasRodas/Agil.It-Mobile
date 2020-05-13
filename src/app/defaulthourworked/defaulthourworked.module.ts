import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefaultHourWorkedPage } from './defaulthourworked.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AgilitButtonComponent } from 'src/app/agilit-button/agilit-button.component';
import { CustomComponentsModule } from 'src/app/utils/customComponents.module';
import { AgilitDatePipe } from 'src/app/pipe/date.pipe';
import { AgilitTimePipe } from 'src/app/pipe/time.pipe';

const routes: Routes = [
  {
    path: '',
    component: DefaultHourWorkedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [DefaultHourWorkedPage]
})
export class DefaultHourWorkedPageModule {}
