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
        loadChildren: () => import('../routeresume/routeresume.module').then(m => m.RouteResumePageModule)
      },
      { 
        path: "hourWorked",
        loadChildren: () => import('../routehourworked/routehourworked.module').then(m => m.RouteHourworkedPageModule)
      },
      { 
        path: "assignature",
        loadChildren: () => import('../routeassignature/routeassignature.module').then(m => m.RouteAssignaturePageModule)
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
