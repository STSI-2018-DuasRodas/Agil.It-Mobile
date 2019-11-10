import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoutePage } from './route.page';

const routes: Routes = [
  {
    path: '',
    component: RoutePage,
    children: [
      {
        path: "resume",
        loadChildren: () => import('../tabs/resume.module').then(m => m.ResumePageModule)
      },
      { 
        path: "components",
        loadChildren: () => import('../tabs/components.module').then(m => m.ComponentsPageModule)
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
  declarations: [RoutePage]
})
export class RoutePageModule {}
