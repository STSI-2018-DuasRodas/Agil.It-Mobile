import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefaultPage } from './default.page';
import { PopoverComponent } from 'src/app/popover/popover.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultPage,
    children: [
      {
        path: "resume",
        loadChildren: () => import('../tabs/resume.module').then(m => m.ResumePageModule)
      },
      { 
        path: "problems",
        loadChildren: () => import('../tabs/problems.module').then(m => m.ProblemsPageModule)
      },
      { 
        path: "operations",
        loadChildren: () => import('../tabs/operations.module').then(m => m.OperationsPageModule)
      },
      { 
        path: "hourWorked",
        loadChildren: () => import('../tabs/hour-worked.module').then(m => m.HourWorkedPageModule)
      },
      { 
        path: "assignature",
        loadChildren: () => import('../tabs/assignature.module').then(m => m.AssignaturePageModule)
      },
      {
        path: "",
        redirectTo: "resume",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DefaultPage]
})
export class DefaultPageModule {}
