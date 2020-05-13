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
        loadChildren: () => import('../defaultresume/defaultresume.module').then(m => m.DefaultResumePageModule)
      },
      { 
        path: "problem",
        loadChildren: () => import('../defaultproblem/defaultproblem.module').then(m => m.DefaultProblemPageModule)
      },
      { 
        path: "operation",
        loadChildren: () => import('../defaultoperation/defaultoperation.module').then(m => m.DefaultOperationPageModule)
      },
      { 
        path: "hourWorked",
        loadChildren: () => import('../defaulthourworked/defaulthourworked.module').then(m => m.DefaultHourWorkedPageModule)
      },
      { 
        path: "assignature",
        loadChildren: () => import('../defaultassignature/defaultassignature.module').then(m => m.DefaultAssignaturePageModule)
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
