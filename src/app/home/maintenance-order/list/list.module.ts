import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    children: [
      {
        path: "resume",
        loadChildren: () => import('../tabs/resume.module').then(m => m.ResumePageModule)
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
  declarations: [ListPage]
})
export class ListPageModule {}
