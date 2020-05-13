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
        loadChildren: () => import('../listresume/listresume.module').then(m => m.ListResumePageModule)
      },
      { 
        path: "hourWorked",
        loadChildren: () => import('../listhourworked/listhourworked.module').then(m => m.ListHourworkedPageModule)
      },
      { 
        path: "assignature",
        loadChildren: () => import('../listassignature/listassignature.module').then(m => m.ListassignaturePageModule)
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
